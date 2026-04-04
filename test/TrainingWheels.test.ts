import { test, expect } from "vitest";

import util from "node:util";
import fs from "node:fs";
import { exec as execCallback } from "node:child_process";

const exec = util.promisify(execCallback);

const changedLinesLimit = 10;

test("📎 Looks like you are changing lots of production code at a time. Prefer working in small, safe steps.", async () => {
  const { stdout } = await exec("git diff --numstat -- src");

  const changes = stdout
    .split("\n")
    .map((line: string) => line.split("\t"))
    .filter((parts: string[]): parts is [string, string, string] => parts.length === 3)
    .map(([added, removed]: [string, string, string]): number => Math.max(parseInt(added, 10), parseInt(removed, 10)))
    .reduce((a: number, b: number): number => a + b, 0);

  expect(changes, "number of changed lines").toBeLessThanOrEqual(changedLinesLimit);
});

test(`documentation is in sync with the ${changedLinesLimit} lines limit`, () => {
  const readme = fs.readFileSync("README.md", "utf8").replaceAll("\n", " ");
  expect(readme).toContain(`will fail if you change more than ${changedLinesLimit} lines of production code at a time`);
});

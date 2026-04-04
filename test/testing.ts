import { expect } from "vitest";

export function normalize(s: string): string {
  return s.replaceAll(" ", "").trim() + "\n";
}

expect.extend({
  equalShape(received: string, expected: string) {
    expected = normalize(expected);
    const pass = received === expected;
    return {
      pass,
      message: () =>
        pass
          ? `expected ${received} to not equal ${expected}`
          : `expected ${received} to equal ${expected} but got ${received}`,
    };
  },
});

declare module "vitest" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface Assertion<T = any> {
    equalShape(expected: string): T;
  }
  interface AsymmetricMatchersContaining {
    equalShape(expected: string): void;
  }
}

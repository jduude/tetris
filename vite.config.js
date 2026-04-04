/** @type {import("vite").UserConfig} */
export default {
  test: {
    setupFiles: ["test/testing"],
    passWithNoTests: true,
    forceRerunTriggers: ["**"],
  },
};

export default {
  testEnvironment: "./node_modules/jest-environment-jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { useESM: true }],
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testMatch: ["**/__tests__/**/*.(test|spec).(ts|tsx|js)"],
};

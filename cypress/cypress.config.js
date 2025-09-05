const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.uol.com.br",
    viewportWidth: 1280,
    viewportHeight: 800,
  },
});
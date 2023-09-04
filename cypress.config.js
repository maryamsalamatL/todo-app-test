const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7ks9ta',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

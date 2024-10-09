const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://account.booking.com/sign-in',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

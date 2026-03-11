const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'custom/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'custom/cypress/support/e2e.cy.js',
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      // node event listeners
    },
  },
});

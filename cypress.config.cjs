const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // 🌐 page the tests should visit
    baseUrl: 'http://localhost:3003',

    // ⭐ point to the new folder
    specPattern: 'tests/e2e/**/*.cy.{js,jsx,ts,tsx}',

    // (optional) custom support file
    supportFile: 'tests/support/e2e.ts',
  },
});

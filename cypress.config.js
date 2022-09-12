const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

    },
    baseUrl: 'http://localhost:3000/Login',
    reporter: "mochawesome",
    reporterOptions: {
      reportDiir: "mochawesome-reporte",
      overwrite: false,
      html: false,
      json: true
    }
  },
});

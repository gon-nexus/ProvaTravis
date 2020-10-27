// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const path = require('path');
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-safari-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/admin-app'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      },
      'FirefoxHeadless': {
          base: 'Firefox',
          flags: ['-headless'],
          prefs: {
              'network.proxy.type': 0
          }
      },
      Edge_without_security: {
        base: 'Edge',
        flags: ['--disable-web-security', '--disable-site-isolation-trials']
      },
      Edge_with_debugging: {
        base: 'Edge',
        edgeDataDir: path.resolve(__dirname, '.edge')
      }
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'ChromeHeadless', 'ChromeHeadlessNoSandbox', 'Firefox','Safari', 'Edge','EdgeHeadless','Edge_without_security'],
    singleRun: false,
    restartOnFileChange: true
  });
};

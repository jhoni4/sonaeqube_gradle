// Karma configuration
// Generated on Thu Dec 07 2017 14:55:06 GMT-0500 (EST)
const WATCH = process.argv.indexOf('--watch') > -1;
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '/Users/yonatanmolla/Documents/workspace5/sonar-scanning-examples/sonarqube-scanner-gradle/src/main/javascript/*.js',
      '/Users/yonatanmolla/Documents/workspace5/sonar-scanning-examples/sonarqube-scanner-gradle/src/test/javascript/*.js'
    ],

    preprocessors: {
      '/Users/yonatanmolla/Documents/workspace5/sonar-scanning-examples/sonarqube-scanner-gradle/src/main/javascript/*.js': ['coverage']
    }, 
    // preprocessors: {
    //   '**/*.js': 'coverage'
    // },

    reporters: ['dots', 'junit', 'progress', 'karma-remap-istanbul', 'notify', 'coverage'],

    junitReporter: {
        outputFile: '../../../../build/reports/test-results/karma/TESTS-results.xml'
    },

    notifyReporter: {
        reportEachFailure: true, // Default: false, will notify on every failed sepc
        reportSuccess: true // Default: true, will notify when a suite was successful
    },
    coverageReporter: {
      dir: '/Users/yonatanmolla/Documents/workspace5/sonar-scanning-examples/sonarqube-scanner-gradle/build/test-results/karmacoverage',
      reporters: [
          {type: 'lcov', subdir: 'report-lcov'}
      ]
    },
    
    // remapIstanbulReporter: {
    //     reports: { // eslint-disable-line
    //         'lcovonly': 'build/test-results/istancoverage/report-lcov/lcov.info',
    //         'html': 'build/test-results/coverage',
    //         'text-summary': null
    //     }
    //   },   
    // list of files to exclude
    exclude: [
    ],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    // autoWatch: true,
    autoWatch: WATCH,
    browsers: ['ChromiumHeadlessNoSandbox'],
    
    customLaunchers: {
        ChromiumHeadlessNoSandbox: {
            base: 'ChromiumHeadless',
                flags: ['--no-sandbox']
        }
    },
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    // singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    // concurrency: Infinity,
    singleRun: !WATCH
  })
}

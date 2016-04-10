module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      './node_modules/angular/angular.js',
      './node_modules/angular-ui-router/angular-ui-router.js',
      //'./node_modules/angular-mocks/angular-mocks.js',
      './components/**/*.js',
      './public/view*/**/*.tpl.html'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};

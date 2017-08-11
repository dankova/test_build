'use strict';

module.exports = function (grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // configuration
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // before 
    clean: {
      tests: ['tmp']
    },

    // configuration 
    start_webdriver: {
      default_options: {
        options: {
        },
        files: {
          'tmp/default_options': ['test/fixtures/testing', 'test/fixtures/123']
        }
      },
      custom_options: {
        options: {
          separator: ': ',
          punctuation: ' !!!'
        },
        files: {
          'tmp/custom_options': ['test/fixtures/testing', 'test/fixtures/123']
        }
      }
    },

    // unit
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // actually load this plugin's task
  grunt.loadTasks('tasks');

  grunt.registerTask('test', ['clean', 'start_webdriver', 'nodeunit']);

  // default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};

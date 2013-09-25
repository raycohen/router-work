var grunt = require('grunt');

module.exports = {
  "tests": {
    type: 'amd',
    moduleName: function(path) {
      return grunt.config.process('<%= pkg.namespace %>/tests/') + path;
    },
    files: [{
      expand: true,
      cwd: 'tmp/javascript/tests/',
      src: '**/*.js',
      dest: 'tmp/transpiled/tests/'
    }]
  },
  "outerApp": {
    type: 'amd',
    moduleName: function(path) {
      return grunt.config.process('outer') + path;
    },
    files: [{
      expand: true,
      cwd: 'tmp/javascript/app/outer',
      src: '**/*.js',
      dest: 'tmp/transpiled/app/outer'
    }]
  },
  "innerApp": {
    type: 'amd',
    moduleName: function(path) {
      return grunt.config.process('inner') + path;
    },
    files: [{
      expand: true,
      cwd: 'tmp/javascript/app/inner',
      src: '**/*.js',
      dest: 'tmp/transpiled/app/inner'
    }]
  }
};

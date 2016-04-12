module.exports = function(grunt) {

require('jit-grunt')(grunt);

  grunt.initConfig({
    uglify: {
      my_target: {
        options: {
          mangle:false //will change your variables, function names, etc into shortened versions if true
        },
        files: {
          'lib/js/main.min.js': ['lib/js/main.js'] // destination file and source file
        },
      },
      my_dist_target: {
        options: {
          mangle:true //will change your variables, function names, etc into shortened versions if true
        },
        files: {
          'lib/js/main.min.js': ['lib/js/main.js'] // destination file and source file
        },
      },
    },
    sass: {
      dev: {
        options: {
          style: 'nested',
          sourcemap: 'none',
          noCache: true   
        },
        files: {
          'lib/css/main.min.css': 'lib/scss/main.scss' // destination file and source file
        }
      },
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none',
          noCache: true
        },
        files: {
          'lib/css/main.min.css': 'lib/scss/main.scss' // destination file and source file
        },
      },
    },
    watch: {
      options: { livereload:true },
      scripts: {
        files: ['lib/js/main.js'], // which files to watch
        tasks: ['uglify:my_target']
      },
      sass: {
        files: ['lib/scss/**/*.scss'], // which files to watch
        tasks: ['sass:dev']
      },
      html: {
        files: ['*.html']
      }
    }

  }); //end initConfig
  
  grunt.registerTask('default', ['watch']);
}; //end exports
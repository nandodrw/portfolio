module.exports = function(grunt) {

  grunt.initConfig({

    express: {
      all: {
        options: {
          port: 9000,
          hostname: "0.0.0.0",
          bases: [__dirname],

          livereload: true
        }
      }
    },

    open: {
      all: {
        // Gets the port from the connect configuration
        path: 'http://localhost:<%= express.all.options.port%>'
      }
    },

    pkg: grunt.file.readJSON('package.json'),


    watch: {

      all:{
        options: { livereload: true },
        files: ['*/*.html','*.html','styles/*.css','scripts/*.js']
      },

      options: {
        livereload: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('server', ['express','open','express-keepalive']);
  grunt.registerTask('default', ['watch','server']);
}
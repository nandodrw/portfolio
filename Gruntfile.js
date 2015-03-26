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

      options: {
        livereload: true
      },

      html: {
        files: ['index_raw.html'],
        tasks: ['htmlbuild:dist', 'htmlbuild:dev'],
        options: { livereload: true }
      },

      sass: {
        files: ['styles/main.sass', 'styles/sass/*.sass', 'styles/sass/*.scss'],
        tasks: ['sass:dist','sass:dev'],
        options: { livereload: true }
      },

      js: {
        files: ['scripts/*.js'],
        tasks: ['uglify:target'],
        options: { livereload: true }
      }

    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'dist/styles/style.min.css': 'styles/main.sass'
        }
      },
      dev: {
        options: {
          style: 'expanded',
          lineNumbers: true
        },
        files: {
          'styles/style.css': 'styles/main.sass'
        }
      },
    },

    uglify: {
      options : {
        sourceMap : true,
        sourceMapName : 'sourceMap.map'
      },
      target: {
        files: {
          'dist/scripts/scripts.min.js':
          ['scripts/initializers.js',
          'scripts/responsive.js',
          'scripts/ux.js',
          'scripts/slider.js',]
        }
      }
    },

    htmlbuild: {
      dist: {
        src: 'index_raw.html',
        dest: 'dist/index.html',
        options: {
          scripts: {
            script: 'dist/scripts/scripts.min.js'
          },
          styles: {
            style: 'dist/styles/style.min.css'
          }
        }
      },

      dev: {
        src: 'index_raw.html',
        dest: 'index.html',
        options: {
          scripts: {
            script: [
              "scripts/vendor/*.js",
              "scripts/*.js"
            ]
          },
          styles: {
            style: [
              'styles/style.css'
            ]
          }
        }
      }
    },


  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('server', ['express','open','express-keepalive']);
  grunt.registerTask('process', ['sass','uglify', 'htmlbuild', 'watch']);
}
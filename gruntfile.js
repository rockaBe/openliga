module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/stylesheets/application.css': 'sass/application.scss'
        },
        options: {
          includePaths: [
            './bower_components/bower-bourbon'
          ]
        }
      }
    },
    watch: {
      source: {
        files: ['sass/**/*.scss', 'views/**/*.jade'],
        tasks: ['sass'],
        options: {
          livereload: true, // needed to run LiveReload
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('heroku',
    ['compass:dist', 'autoprefixer', 'imagemin']);
};
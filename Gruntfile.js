module.exports = function(grunt){
    grunt.initConfig({
        less:{
            complie:{
                files:{'dist/compiled.css':'css/*.less'}
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default',['less:complie'])
};
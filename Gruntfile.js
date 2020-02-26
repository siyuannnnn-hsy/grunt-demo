module.exports = function(grunt){
    grunt.initConfig({
        csslint:{
            options:{
                csslintrc:'.csslintrc'
            },
            src:['*.css']
        },
        mocha_istanbul:{
            coverage:{
                src:'test'
            }
        }
        
    });

    grunt.loadNpmTasks('grunt-mocha-cli');
    grunt.loadNpmTasks('grunt-mocha-istanbul');

    grunt.registerTask('default',['mochacli']);
    grunt.registerTask('cover',['mocha_istanbul']);
};
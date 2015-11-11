/*!
 * Magicdust Sass Gruntfile
 * http://magicdust.com.au
 * @author Andrew Hyndman
 */



/**
 * Grunt Module
 */
module.exports = function(grunt) {

'use strict';



/**
 * Configuration
 */
grunt.initConfig({

	/**
	 * Get package meta data
	 */
	pkg: grunt.file.readJSON('package.json'),

	/**
	 * Set project object
	 */
	project: {
		app: 'app',
		assets: '<%= project.app %>/',
		src: '<%= project.assets %>/',
		css: [
			'<%= project.src %>/sass/magicdust.scss'
		]
	},

	/**
	 * Sass
	 */
	sass: {
		dev: {
			options: {
				style: 'expanded',
				compass: true,
				noCache: true
			},
			files: {
				// '<%= project.assets %>/magicdust.css': '<%= project.css %>'
				'magicdust.css': 'sass/magicdust.scss'
			}
			},
			dist: {
			options: {
				style: 'compressed',
				compass: true,
				noCache: true
			},
			files: {
				// '<%= project.assets %>/css/magicdust.css': '<%= project.css %>'
			}
		}
	},

	/**
	 * Less
	 */
	less: {
		dev: {
			options: {
				style: 'expanded',
				compass: true,
				noCache: true
			},
			files: {
				// '<%= project.assets %>/magicdust.css': '<%= project.css %>'
				'magicdust.css': 'less/magicdust.less'
			}
			},
			dist: {
			options: {
				style: 'compressed',
				compass: true,
				noCache: true
			},
			files: {
				// '<%= project.assets %>/css/magicdust.css': '<%= project.css %>'
			}
		}
	},

	postcss: {
		build: {
			src: [ 'magicdust.css' ]
		},
		options: {
			processors: [
				require( 'autoprefixer-core' )( { browsers: [ 'last 20 versions', 'ie 9' ] } )
			]
		}
	},

	/**
	 * Watch
	 */
	watch: {
		// sass: {
		// 	files: 'sass/{,*/}*.{scss,sass}',
		// 	tasks: ['sass:dev', 'postcss']
		// }
		less: {
			files: 'less/{,*/}*.{less}',
			tasks: ['less:dev', 'postcss']
		}
	}
});

/**
 * Load Grunt plugins
 */
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

/**
 * Default task
 * Run `grunt` on the command line
 */
grunt.registerTask('default', [
  'watch'
]);





};

module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		bower: {
			install: {
				options: {
					cleanup: true,
				},
			}
		},
		shower: {
			slides: {
                title: 'Presentation Template',
                src: 'src/slides.md',
				dest: 'html/slides/index.html'
			}
		},
		copy: {
			shower: {
				files: [
					{src: 'lib/shower-ribbon/screen.css', dest: 'html/slides/themes/ribbon/styles/screen.css'},
					{src: 'lib/shower-core/shower.min.js', dest: 'html/slides/shower/shower.min.js'},
				]
			}
		},
        markdown: {
            all: {
                files: [
                    {
                        expand: true,
                        src: 'src/doc.md',
                        dest: 'html/doc',
                        ext: '.html'
                    }
                ]
            }
        },
		graphviz: {
			slides: {
				files: {
                    'html/doc/dummy.svg': 'graphs/dummy.dot',
                    'html/slides/dummy.svg': 'graphs/dummy.dot'
				}
			}
		},
        markdownpdf: {
            options: {},
            files: {
                src: "src/doc.md",
                dest: "pdf"
            }
        },
		watch: {
			shower: {
				files: ['src/slides.md'],
				tasks: ['shower']
			},
            markdown: {
                files: ['src/doc.md'],
                tasks: ['markdownpdf']
            },
			graphviz: {
				files: ['graphs/*.dot'],
				tasks: ['graphviz']
			},
		},
		clean: ['html', 'pdf']
	});

	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-graphviz');
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-markdown-pdf');
	grunt.loadNpmTasks('grunt-shower-markdown');

	grunt.registerTask('build', ['bower', 'markdown', 'graphviz', 'markdownpdf', 'copy:shower', 'shower']);
	grunt.registerTask('default', ['clean', 'build']);
};

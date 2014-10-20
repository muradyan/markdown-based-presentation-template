
# Generating Markdown Based Specification

## How to build & run

This command will install all the dependencies.

```
npm install
```

*NOTE:* that you need to have npm, nodejs already installed.

This command will create the
    - html/slides/index.html - slides (can be converted to pdf from
      google-chrome)
    - html/doc/src/doc.html - the documentation
    - pdf/doc.pdf - the pdf version of the documentation

```
./node_modules/.bin/grunt
```

This command will watch and build if there are changes on either of the sources

```
./node_modules/.bin/grunt watch
```

## Contents

- graphs/ - contains *.dot file(s) if the presentation requires
- pdf/ - contains the pdf documetnation
- html/ - contains the html version of the documetnation
- package.json - dependency packages - required by npm

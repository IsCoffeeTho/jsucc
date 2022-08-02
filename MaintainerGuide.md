# jSUCC - Maintainer Guide

## Makefile
### Rules
* `all` - Runs `test`.
* `test` - Runs the unit tests adapted from the original repo to fit JavaScript.
* `declare` - Compiles the _index.d.ts_ file to help with development in tools
    > This rule requires you to edit the _index.d.ts_ file after to align it to standards.
* `re` - Runs `declare` then `test` consecutively.
# README

This is an approach recommended by Alessandro Rodi, https://dev.to/coorasse/rails-7-bootstrap-5-and-importmaps-without-nodejs-4g8

**Pluspoints**: no foreman, no node, css preprocessing (by sassc) out of the box
**Benchmark**:
**Purpose:** least weird
**Asset pipeline:** sprockets, importmaps
**Technologies:** bootstrap from gem (with customizable sass settings)

I am trying to choose the best of at least approproate Asset Pipeline for my apps.

The project is using Bootstrap 5, not so much for styles and perks, but mainly because it illustrates the use of external library with JS and CSS components. JS part has dependency on popper.js and CSS part has optional config for Sass.

| Technology      | Description |
| --------------- | ----------- |
| Asset Pipeline  | sprockets   |
| Bootstrap       | gem         |
| Sass processing | sprockets   |
| CSS minificaton | sprockets   |
| JS minification | sprockets   |
| Naming          | importmaps  |
| Bundling        | sprockets   |

### Basic needs for a quick start

- bundled and minified Bootstrap 5: use the minified version from the gem
- Sass compilation: sassc
- CSS and JS minification for production: sassc, JS is not minified and not bundled
- assets fingerprinting for production: sprockets

#### JS handling

Importmaps is included. It allows simpler reference providing a name to imported JS assets (whether CDN or gem or vendor folder or local folder). JS libraries have to be modularized. References can be quickly swapped (say, from gem to CDN) without changing a reference name.

#### Sass / CSS handling

There are essentially two libraries to handle Sass files - sassc and Dart Sass. So far I do not know what the advantage is to use Dart Sass.
See: [https://dev.to/coorasse/rails-7-bootstrap-5-and-importmaps-without-nodejs-4g8]


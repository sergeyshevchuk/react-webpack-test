Remove all other linters from sublime and from global

npm install --save-dev eslint@latest
npm install --save-dev babel-eslint@latest

Installing eslint and babel-eslint

Start by creating a file called .eslintrc

{
  // I want to use babel-eslint for parsing!
  "parser": "babel-eslint",
  "env": {
    // I write for browser
    "browser": true,
    // in CommonJS
    "node": true
  },
  // To give you an idea how to override rule options:
  "rules": {
    "quotes": [2, "single"],
    "eol-last": [0],
    "no-mixed-requires": [0],
    "no-underscore-dangle": [0]
  }
}

install SublimeLinter-contrib-eslint via Package Control

Install babel-sublime

Install oceanic-next-theme


Link to original source by Dan Abramov - https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48#.3dshpy3hj
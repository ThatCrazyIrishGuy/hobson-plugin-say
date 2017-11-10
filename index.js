exports = module.exports;
const hobsonResponseTypes = require('hobson-response-types');
const jsonfile = require('jsonfile');
const path = require('path');

const config = jsonfile.readFileSync(path.resolve(__dirname, 'config.json'));

exports.say = {
    this: {
      type: hobsonResponseTypes.text,
      execute: function(values, callback) {
        var response = values.join(' ');
        callback(response);
      }
    },
    lexify: {
        match: config.extractAfter, //any lexical pos tag
        extract: 'after' // match, before, after
    }
};

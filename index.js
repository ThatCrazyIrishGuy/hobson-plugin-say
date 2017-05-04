exports = module.exports;
const jsonfile = require('jsonfile');
const path = require('path');

exports.say = {
    this: function(values, callback) {
        var response = values.join(' ');
        callback(response);
    },
    lexify: {
        match: 'say', //any lexical pos tag
        extract: 'after' // match, before, after
    }
};

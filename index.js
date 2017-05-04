exports = module.exports;
const jsonfile = require('jsonfile');
const path = require('path');

const config = jsonfile.readFileSync(path.resolve(__dirname, 'config.json'));

exports.say = {
    this: function(values, callback) {
        var response = values.join(' ');
        callback(response);
    },
    lexify: {
        match: config.extractAfter, //any lexical pos tag
        extract: 'after' // match, before, after
    }
};

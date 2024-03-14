/*jslint node: true */
'use strict';

var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
var FN_ARG_SPLIT = /,/;
var FN_ARG = /^\s*(_?)(.+?)\1\s*$/;
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

module.exports = function(func) {

    return func.toString().replace(STRIP_COMMENTS, '').match(FN_ARGS)[1].split(FN_ARG_SPLIT).map(function(arg) {

        var argument;
        arg.replace(FN_ARG, function(all, underscore, name) {

            argument = name;
        });
        return argument;
    });
};

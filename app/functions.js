if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(args){
            return str + ', ' + args;
        };
    },

    makeClosures : function(arr, fn) {
        var result = [];
        function makeFunc(x){
            return function(){ return fn(x); };
        }
        for (var i = 0; i < arr.length; i++){
            result.push(makeFunc(arr[i]));
        }
        return result;
    },

    partial : function(fn, str1, str2) {

    },

    useArguments : function() {

    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});

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
        var args = Array.prototype.slice.call(arguments,1);
        return function(){
            return fn.apply(fn, args.concat(Array.prototype.slice.call(arguments)));
        };
    },

    useArguments : function() {
        var args = Array.prototype.slice.call(arguments);
        var sum = 0;
        for (var i = 0; i < args.length; i++){
            sum += args[i];
        }
        return sum;
    },

    callIt : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
        var args = Array.prototype.slice.call(arguments,1);
        return function(){
            return fn.apply(fn, args.concat(Array.prototype.slice.call(arguments)));
        };

    },

    curryIt : function(fn) {
        var expected = fn.length;
        var args = Array.prototype.slice.call(arguments, 1);
        return function(){
            console.log(arguments);
            console.log(args);
            return fn(args.concat(arguments));
        }
    }
  };
});

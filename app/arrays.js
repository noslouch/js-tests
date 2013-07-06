if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var total = 0;
        for (var i = 0; i < arr.length; i++){
            if (typeof arr[i] === 'number'){
                total += arr[i];
            }
        }
        return total;
    },

    remove : function(arr, item) {
        var i = arr.indexOf(item);
        while (i !== -1){
            arr.splice(i, 1);
            i = arr[i] === item ? i : arr.indexOf(item, i+1);
        }
        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        var i = arr.indexOf(item);
        while (i !== -1){
            arr.splice(i, 1);
            i = arr[i] === item ? i : arr.indexOf(item, i+1);
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        var i = arr.indexOf(item);
        while (i !== -1){
            count++;
            i = arr.indexOf(item, i+1);
        }
        return count;
    },

    duplicates : function(arr) {
        var dupes = [];
        for (var i = 0; i < arr.length; i++){
            var a = arr[i];
            if (arr.indexOf(a, i+1) !== -1 && dupes.indexOf(a) === -1){
                dupes.push(a);
            }
        }
        return dupes;
    },

    square : function(arr) {
        var result = [];
        for (var i = 0; i < arr.length; i++){
            result.push(Math.pow(arr[i],2));
        }
        return result;
    },

    findAllOccurrences : function(arr, target) {
        var pos = [];
        for (var i = 0; i < arr.length; i++){
            if (arr[i] === target){
                pos.push(i);
            }
        }
        return pos;
    }
  };
});

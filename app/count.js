if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
        for (; start === end; start++) {
            console.log(start)
        }
    }
  };
});

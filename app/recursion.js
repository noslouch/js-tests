if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
        var result = []; 
        if (dirName !== undefined){
            for (var i = 0; i < data.length; i++){
                if (typeof(data[i]) === 'string'){
                    result.push(data[i])
                } else {
                    result = result.concat(this.listFiles(data[i].files, data[i].dir))
                }
            }
        } else {
            result = result.concat(this.listFiles(data.files, data.dir));
        }
        return result;
    },

    permute: function(arr) {

    }
  };
});

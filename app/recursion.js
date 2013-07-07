if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
        //console.log(data);
        var result = []; 
        if (data.length === undefined){ 
            console.log('a directory')
            console.log(data)
            if (dirName && data.dir === dirName){ 
                console.log('found a match for', dirName)
                result = result.concat(this.listFiles(data.files))
            } else if (dirName){ 
                console.log('no match, check files object')
                result = result.concat(this.listFiles(data.files, dirName))
            } else { 
                console.log('not looking for a specific direcotry')
                result = result.concat(this.listFiles(data.files))
            }
        } else { 
            console.log('files array, checking for sub directories')
            console.log(data);
            for (var i = 0; i < data.length; i++){
                if (dirName) { 
                    console.log('dirName argument detected, only interested in finding a matching subdir')
                    if (typeof(data[i]) !== 'string'){
                        console.log('found a subdirectory, calling recursive case')
                        result = result.concat(this.listFiles(data[i], dirName))
                    }
                } else { 
                    console.log('looking at all files beneath current directory')
                    if (typeof(data[i]) === 'string'){ 
                        console.log('found a file, appending to results')
                        result.push(data[i])
                    } else { 
                        console.log('directory object, recursive case')
                        result = result.concat(this.listFiles(data[i].files))
                    }
                }
            }
        }
        console.log(result)
        return result;
    },

    permute: function(arr) {

    }
  };
});

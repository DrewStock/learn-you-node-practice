var fs = require('fs');

var path = require('path');

module.exports = function (dir, ext, callback) {

    fs.readdir(dir, function(err, files) {
        if (err) {
            callback(err, null);
        }

        else {
            results = [];

            for (i = 0; i < files.length; i++) {
                var extName = path.extname(files[i]);
                // console.log(extName);
                if (extName === ext) {
                    results.push(files[i]);
                }
            }
            //console.log(results);
            return callback(null, results);
        }
    });
}

// LEARNYOUNODE's solution
// var fs = require('fs')
// var path = require('path')
//
// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err)
//     }
//
//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })
//
//     callback(null, list)
//   })
// }

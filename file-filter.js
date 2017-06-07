var fs = require('fs');

var path = require('path');

//console.log(process.argv);

var dir = process.argv[2];

var ext = process.argv[3];

var extPeriod = '.' + ext;

// console.log(dir);
//
// console.log(ext);
//
// console.log(extPeriod);

var files = fs.readdir(dir, function(err, files) {
        if (err) {
            throw err;
        }
        //console.log(files);
        for (i = 0; i < files.length; i++) {
            var extName = path.extname(files[i]);
            // console.log(extName);
            if (extName === extPeriod) {
                console.log(files[i]);
            }
        }
    });

// LEARNYOUNODE's solution

// var fs = require('fs');
//
// var path = require('path');
//
// var folder = process.argv[2];
//
// var ext = '.' + process.argv[3];
//
// fs.readdir(folder, function (err, files) {
//  if (err) return console.error(err)
//  files.forEach(function (file) {
//    if (path.extname(file) === ext) {
//      console.log(file)
//    }
//  })
// })

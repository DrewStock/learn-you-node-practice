var fs = require('fs');

var file = process.argv[2];

var lines

var output = fs.readFile(file, 'utf8', function(err, data) {
        if (err) {
            throw err;
        }
        lines = data.split('\n');
        console.log(lines.length - 1);
    });

// LEARN YOU NODE's solution
// var fs = require('fs')
//    var file = process.argv[2]
//
//    fs.readFile(file, function (err, contents) {
//      if (err) {
//        return console.log(err)
//      }
//      // fs.readFile(file, 'utf8', callback) can also be used
//      var lines = contents.toString().split('\n').length - 1
//      console.log(lines)
//    })

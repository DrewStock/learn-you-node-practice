const http = require('http');

const bl = require('bl');

const address = process.argv[2];

http.get(address, function(res) {
    res.setEncoding('utf8');
    res.pipe(bl(function (err, data) {
        var output = data.toString();
        console.log(output.length);
        console.log(output);
    }));
    })
.on('error', function(e) {
  console.log("Got error: " + e.message);
});

//LEARNYOUDNODE's solution
// var http = require('http');
//
// var bl = require('bl');
//
// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })

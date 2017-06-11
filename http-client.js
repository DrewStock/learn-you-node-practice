const http = require('http');

const address = process.argv[2];

http.get(address, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(data) {
    console.log(data);
    });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});

//LEARNYOUNODE's solution
//var http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)

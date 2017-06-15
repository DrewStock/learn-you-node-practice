const http = require('http');

const bl = require('bl');

const async = require('async');

var urlList = process.argv.slice(2);

var resData = [];

function printResults() {
    urlList.forEach(function(url) {
        console.log(resData[url]);
    })
}

function getResults(url, callback) {

    http.get(url, function(res) {
        res.setEncoding('utf8');
        res.pipe(bl(function (err, data) {
            if (err) return callback(err);
            resData[url] = data.toString();
            return callback();
        }));
        })
}

async.each(urlList, getResults, function(err){
    if (err) return console.error(err);
    printResults();
});

// LEARNYOUNODE's solution
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0
//
// function printResults () {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }
//
// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }
//
//       results[index] = data.toString()
//       count++
//
//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }
//
// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }

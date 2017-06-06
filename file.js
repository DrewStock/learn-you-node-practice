var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var string = buffer.toString();

var subStrings = string.split('\n');

console.log(subStrings.length - 1);

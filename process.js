var selection = process.argv.slice(2);

var counter = 0;

for (i=0; i < selection.length; i++) {
    var integer = parseInt(selection[i]);
    counter += integer;
}

console.log(counter);

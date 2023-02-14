var fs = require('fs');

var reamMe = fs.readFileSync('readMe.txt' , 'utf-8');

fs.writeFileSync('writeMe.txt',readMe);

fs.readFile('readMe.txt', 'utf-8', function(err, data) {
  
    // Write the data read from readeMe.txt
    // to a file writeMe.txt
    if( !err )
        fs.writeFile('writeMe.txt', data, (err)=>{
            if( err ) {
                throw err;
            }
        });
    else
        throw err;
});
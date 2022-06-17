const fs = require('fs');

fs.readFile('./files_to_read/file1.txt', 'utf8', (err, data) => {
  if (err) {
    // throw an Error(err)
  } else {
    console.log(data);
  }
  // After first file is read, second will be read
  fs.readFile('./files_to_read/file2.txt', 'utf8', (err, data) => {
    if (err) {
      // throw an Error(err)
    } else {
      console.log(data);
    }
    // After second file is read, third will be read
    fs.readFile('./files_to_read/file3.txt', 'utf8', (err, data) => {
      if (err) {
        // throw an Error(err)
      } else {
        console.log(data);
      }
    })
  })
})

// This could get really messy, especially if the nested async functions are not similar (as it is in this example)
// It can also get very difficult to read all the lines and indented code with nested functions
// This is known as "callback hell"
// When handling errors in the exact same way, it could be difficult to keep track of where the error is happening

// As developers we need to write code that is easily maintained
// and callback hell is not easily maintained
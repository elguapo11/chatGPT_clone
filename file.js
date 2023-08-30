// import readline from 'readline';
import fs from 'fs';

// const userInterface = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

let data = 'This is an example on how a file is created';

fs.writeFile('test.txt', data, (err) => {
  if (err) console.log(err);
  else {
    console.log('File written successfully\n');
    console.log('The written has the following contents:');
    console.log(fs.readFileSync('test.txt', 'utf8'));
  }
});

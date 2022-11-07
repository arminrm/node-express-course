const {readFileSync, writeFileSync} = require('fs');
/* THIS IS EQUIVALENT TO:

const fs = require('fs')
fs.readFileSync()

*/

const first = readFileSync('./content/first.txt', 'utf-8');

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}`, {flag: 'a'}); //need to add flag if you would like to append
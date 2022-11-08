const {readFile, writeFile} = require('fs');

const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

//const {readFile, writeFile} = require('fs').promise -> method #4

const getText = (path) => {
    return new Promise((resolve, reject) =>{
        readFile(path, 'utf-8', (err, data) =>{
            //the eventual state of a pending promise can either be fufilled with a value or rejected with a reason (error)
            if (err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

//method #1
getText('./content/first.txt')
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })

//method #2
const start1 = async() => {

    try {
        const first = await getText('./content/first.txt');
        const second = await getText('./content/second.txt');
        console.log(` ${first} ${second}`);
    }
    catch (error){

        console.log(error);
    }
}

//method #3 (using promisify)

const start2 = async() => {

    try {
        const first = await readFilePromise('./content/first.txt', 'utf-8');
        const second = await readFilePromise('./content/second.txt', 'utf-8');
        await writeFilePromise('./content/result-mind-grenade.txt', `THIS IS AWESOME: ${first} ${second})`, {flag: 'a'})
    }
    catch (error){

        console.log(error);
    }
}
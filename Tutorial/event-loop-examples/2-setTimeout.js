// started operating system process
console.log('first')
setTimeout(() => {
  console.log('second') //offloaded, which causes subsequent code to run "goes to the back of the line"
}, 0)
console.log('third')
// completed and exited operating system process
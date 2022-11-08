const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request event')
  res.end('Hello World')
})

server.listen(5000, () => { //called once server is ready
  console.log('Server listening on port : 5000....')
})

//"offloading tasks -> once the data is back, then we invoke it -> in that way we are not blocking other processes (potentially for other users)"
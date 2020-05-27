/*const express = require('express')
const app = express()
const mainpage_path = ('/Users/mashenka/Documents/Curs/view/page11360025.html')
//const mainpage = require('./page11360025')



app.get('/', (req, res) => {
  res.send('Hi!')
})

app.listen(3000, () => console.log('Server ready'))*/


const https = require('https')
const options = {
  hostname: 'www.hackmap.tech',
  port: 443,
  path: '/todos',
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()

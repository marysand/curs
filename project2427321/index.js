/*const path = require('path');
const express = require('express');

//const api = require('./routes/api'); // импортируем роутер

const indexHTML = path.resolve(__dirname,'./project2427321/page11360025.html');
const app = express();

// все статические файлы в папку public
app.use('/', express.static('project2427321'));
// запросы к api выносите в отдельный файл и подключаете как миделвер
//app.use('/api', api);

// на все остальные запросы
//app.get('/*', (req, res) => res.sendFile(indexHTML));

app.listen(3000);*/


/*const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
    console.log(request.url)
    response.end(files/page11361023body.html)
}
const server = http.createServer(requestHandler)
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})*/


const express = require('express')
const app = express()
const port = 3000
app.get(‘/’, (request, response) => {
    response.send(files/page11361023body.html)
})
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})

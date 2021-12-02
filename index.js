// Node  Server
const http = require('http')
const url = require('url')

http.createServer((req, res) => {
    const pathname = '.'+url.parse(req.url).pathname;

    if (pathname==='./'){
        res.write('This is a Node-Home page');
        res.end();
    }

    if (pathname==='./node'){
        res.write('This is a Node page');
        res.end();
    }
}).listen(4000, () => console.log('This is a Node server running at 4000 port'))


// Express Server
const express = require('express')
const app = express()
 
app.get('/', (req, res) => {
    res.send('Express Server - Home page')
})

app.get('/express', (req, res) => {
    res.send('Express Server - page')
})
 
app.listen(3000, () => console.log('This is a Express server running at 3000 port'))
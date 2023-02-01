const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
app.get('/', (req, res) => {
    res.end('Here is a list of my favourite comics:');
  });
app.get("/list_comics", (req, res) => {
    fs.readFile(__dirname + '/' + 'webtoon.json', (err, data) => {
        res.end(data);
    });
});
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
    console.log('posts')
});

app.post('/posts', (req, res) => {
    console.log('posts')
});

app.listen(4002, () => {
    console.log('QUERY service running on http://localhost:4002')
})
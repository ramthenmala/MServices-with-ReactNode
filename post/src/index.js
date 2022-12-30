const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { randomBytes } = require('crypto');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts)
});

app.post('/posts', async (req, res) => {
    const id = randomBytes(4).toString('hex');

    const { title } = req.body;

    posts[id] = {
        id,
        title
    }

    try {
        await axios.post('http://localhost:4005/events', {
            type: 'PostCreated',
            data: {
                id,
                title
            }
        });
    } catch (error) {

    }

    res.status(201).send(posts[id])

});

app.post('/events', (req, res) => {
    console.log('created type', req.body.type)
    res.send({})
})

app.listen(4000, () => {
    console.log('app listening on POST http://localhost:4000')
});
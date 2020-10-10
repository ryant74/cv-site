const express = require('express');
const cors = require('cors');
const app = express()
app.use(cors());
app.use(express.static('res'))

app.get('/', (req, res) => {
    const options = {
        root: './res/'
    }
    res.sendFile('home.html', options)
})
app.get('/res/linkedin.png', (req, res) => {
    const options = {
        root: './res/'
    }
    res.sendFile('linkedin.png', options)
})
app.get('/res/github.png', (req, res) => {
    const options = {
        root: './res/'
    }
    res.sendFile('github.png', options)
})
app.get('/res/styles.css', (req, res) => {
    const options = {
        root: './res/'
    }
    res.sendFile('styles.css', options)
})
app.get('/res/scripts.js', (req, res) => {
    const options = {
        root: './res/'
    }
    res.sendFile('scripts.js', options)
})
app.get('/res/resume.pdf', (req, res) => {
    const options = {
        root: './res/'
    }
    res.sendFile('resume.pdf', options)
})
app.get('/favicon.ico', (req, res) => {
    const options = {
        root: './res/',
    }
    res.sendFile('favicon.ico', options)
})

app.listen(8080)
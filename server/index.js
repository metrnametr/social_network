const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

let todo = [
    {
        id: 0,
        text: 'Hello'
    }
]

app.get('/', (req, res) => {
    res.send(todo)
})


app.post('/', (req, res) => {
    todo = [ ...todo, req.body];
    res.send(todo)
})


app.delete('/', (req, res) => {
    console.log(req.body)
    todo = [ ...todo.filter(itm => itm.id !== req.body.id)];
    res.send(todo)
})

app.listen('3000', () => console.log('start'));
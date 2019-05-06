const express = require('express')
const axios = require('axios')
const mc = require('./controllers/message_controller');


const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));


app.get('/api/messages', mc.read )
app.post('/api/messages', mc.create )
app.put('/api/messages/:id', mc.update )
app.delete('/api/messages/:id', mc.delete )


const port = 3001;
app.listen(port, () => {
    console.log(`magic is happening on ${port}`)
})

const express = require('express');
const app = express();

app.use('/', (req,res) => {
    res.send("Hello world this is working")
})

app.listen(3001, () => {
    console.log('server started at 3001')
})
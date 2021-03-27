const express = require('express');
const test = require('./router/test')
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send("check")
})

app.use(cors());

app.use('/test', test);


app.listen(PORT, ()=> {
    console.log("server running on port 5000");
})
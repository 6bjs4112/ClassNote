const express = require('express')
const cors = require('cors');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    const jsonData = fs.readFileSync('../src/data.json')
    res.send( JSON.parse(jsonData) )
})
app.post('/insert',function(req,res){
    const jsonData = fs.writeFileSync( '../src/data.json',JSON.stringify(req.body) )
    res.send('성공');
})

app.listen(3030)
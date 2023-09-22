const express = require('express')
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser')
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    const jsonData = fs.readFileSync('../pokemon-quiz-battle/src/MyPkmData.json')
    res.send( JSON.parse(jsonData) )
})
app.get('/coin', function (req, res) {
    const jsonData = fs.readFileSync('../pokemon-quiz-battle/src/coinStorage.json')
    res.send( JSON.parse(jsonData) )
})


app.post('/addPokemon',function(req,res){
    //포켓몬 데이터는 누적되어야함
    const jsonData 
        = JSON.parse(fs.readFileSync( '../pokemon-quiz-battle/src/MyPkmData.json' ));
    
    let newPokemonData = req.body;
    jsonData.push(newPokemonData);
    
    fs.writeFileSync('../pokemon-quiz-battle/src/MyPkmData.json', JSON.stringify(jsonData));
    
    res.send(jsonData);
})
app.post('/addCoin',function(req,res){
    const jsonData 
    = JSON.parse(fs.readFileSync( '../pokemon-quiz-battle/src/coinStorage.json' ));

    let oldCoinAmount = parseInt(jsonData.coinAmount);
    let updateCoin = parseInt(req.body.coinAmount);

    let newCoinAmount = oldCoinAmount + updateCoin;

    jsonData.coinAmount = newCoinAmount;

    fs.writeFileSync('../pokemon-quiz-battle/src/coinStorage.json', JSON.stringify(jsonData));
    res.send(jsonData);
})
app.post('/useCoin',function(req,res){
    const jsonData 
    = JSON.parse(fs.readFileSync( '../pokemon-quiz-battle/src/coinStorage.json' ));

    let oldCoinAmount = parseInt(jsonData.coinAmount);
    let updateCoin = parseInt(req.body.coinAmount);

    let newCoinAmount = oldCoinAmount - updateCoin;

    jsonData.coinAmount = newCoinAmount;

    fs.writeFileSync('../pokemon-quiz-battle/src/coinStorage.json', JSON.stringify(jsonData));
    res.send(jsonData);
})

app.listen(3030)
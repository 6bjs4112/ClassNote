const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { MongoClient } = require('mongodb');
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// Connection URL
const url = 'mongodb+srv://Yoonha:gWfFWdqv3TtRUpXK@cluster0.hdeici6.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);

let collection;//전역변수로 꺼냄
const dbConnect = async function(){
    await client.connect();//db에 접속
    console.log('db접속성공');
    const db = client.db('test_project');//내 프로젝트명
    collection = db.collection('count_collection');//내 컬렉션명

    return '끝';
}
//가져오기
app.get('/api',async function(req,res){
    const result = await collection.find().toArray();
    res.send(result)
})
//저장하기
app.post('/api/insert',async function(req,res){
    await collection.insertOne(req.body);

    const result = await collection.find().toArray();
    res.send(result)
})
//삭제하기
// /api/delete?date==2332231 이런 형식의 url을 가진것을 삭제
app.delete('/api/delete',async function(req,res){
    const {date} = req.query//특정 date값 삭제
    await collection.deleteOne({date:Number(date)});

    const result = await collection.find().toArray();
    res.send(result)
})
//수정하기
app.put('/api/update',async function(req,res){
    const {date} = req.query//특정 date값 수정
    const {count} = req.body
    await collection.updateOne(
        {date:Number(date)},
        {$set:{count}}
    );
    const result = await collection.find().toArray();
    res.send(result)
})


app.listen(3000,dbConnect)



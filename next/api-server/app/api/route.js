//router.js
//컴포넌트가 아님. 대문자로 시작하지 않음
const fs = require('fs');

export async function GET(){

    const data = fs.readFileSync('./db/data.json')
    return Response.json( JSON.parse(data))
}

export async function POST(req){
    //req =>request를 뜻함
    let a = await req.json();

    const data = JSON.parse( fs.readFileSync('./db/data.json') );
    //데이터 받아서 parser로 object형태로 바꿔줌
    fs.writeFileSync('./db/data.json', JSON.stringify([...data, a]))
    
    return Response.json(a)
}
//이곳은 animation.js입니다
export const txt ={
    init:{scale:3, x:100, rotate:-5,opacity:0.5},
    play:{
        scale:1, x:0, opacity:1,
        transition:{duration:6, ease:'circOut'}
    }
}
export const txt2 ={
    init:{scale:5, rotate:360},
    play:{scale:1, rotate:0}
}
// export default txt;
//하나 export 할때는 default
// export {txt, txt2};
//여러개는 { }에 담아서 객체 타입으로
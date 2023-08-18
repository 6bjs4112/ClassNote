import {createContext, useReducer, useState} from 'react'
const MyContect = createContext();//상자 만들고~

const reducer = function(state, action){
    // console.log(action);//Write에서 dispatch로 보낸 값 오는지 확인
    // console.log(action.type);//insert라고 뜨나요

    switch(action.type){
        case 'insert' : return [...state, action.data];
        case 'delete' : return state.filter(obj=>(obj.id != action.id));
        //필터(괄호 내의 조건이 true인것만) 리턴(배열형태)으로 반환함
        default : return state; //케이스가 없을때 기존값을 리턴
    }
}

function Context({children}) {
    const [data, dispatch] = useReducer(reducer, []);
    // useState와 같이 값 변경되면 랜더링~
    // console.log(data);//누적되는 값
    return (
        //상자에 내용물 넣기~
        <MyContect.Provider value={ {data, dispatch} }>
            {children}
        </MyContect.Provider>
    )
}
export {MyContect, Context}
//상자 다른데로 옮기기~
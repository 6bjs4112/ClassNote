import { createContext, useEffect, useReducer } from 'react';
import axios from 'axios'
export const MyContext = createContext();

const reducer = function(state,action){
    switch(action.type){
        case 'post': return [...state, action.d];
        case 'put': return state.map(obj=>{
                            if(obj.id == action.d.id){
                                obj.price = action.d.price;
                                obj.msg = action.d.msg;
                                obj.date = action.d.date;
                                //obj.ㅇㅇ가 기존 데이터 action이 수정한 신규 데이터
                            }return obj;
                        });
        case 'del': return state.filter(obj=>obj.id != action.d);
        default: return action.d;
    }
}   

export default function Context({children}) {
    const [data, dispatch] = useReducer(reducer,[]);

    const instance = axios.create({
        //기본 베이스URL
        baseURL: 'http://localhost:3030/history'
    });

    //data.json에서 불러오기
    // const fetchFn = function(){
    //     instance.get('/')
    //     .then(res=>{
    //         dispatch({type:'get', d: res.data})
    //     })
    // }
    // async사용해서 코드 줄여보기
    const fetchFn = async (type, data)=>{    
        // let res = await instance.get('/');
        // dispatch({type:'get',d:res.data})

        let res;

        switch(type){
            case 'post': 
                res = await instance.post('/',data); break;
                //서버에서 데이터 가져왔어
            case 'put': 
                res = await instance.put(`/${data.id}`,data); break;
            case 'del':
                res = await instance.delete(`/${data}`);  
                res = {data};
                break;
            default: 
                res = await instance.get('/'); 
        }
        dispatch({type:type, d:res.data})
        //가져온 데이터를 변수에 저장했어
    }

    //한번만 실행시키기 위해 useEffect안에
    useEffect(function(){
        fetchFn('get')
    },[]) 

    console.log(data);

    return (
        <MyContext.Provider value={{data,fetchFn}}>
            {children}
        </MyContext.Provider>
    )
}

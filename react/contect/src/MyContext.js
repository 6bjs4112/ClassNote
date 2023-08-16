import {createContext, useState} from 'react'
export const DataContext = createContext(null);//함수를 정의

function MyContext({children}) {
    const [data, setData] = useState([]);

    [
        {name:'홍길동',email:'aa@gmail.com', txt:'당신을 채용합니다!'}
    ]

    return (
        <DataContext.Provider value={{data,setData}}>
            {children}
        </DataContext.Provider>
    )
}
export default MyContext
//default로 보낸 애들은 {중괄호} 없이 import할 수 있음
import React from 'react'
import { ty_Data } from './types'

type tyProps = {
    data:ty_Data
}

const Item:React.FC<tyProps> = ({data}):JSX.Element => {
    console.log(data);
    return (
        <>
            {
                data.map((obj)=>(
                    <p key={obj.id}> {obj.item[0].tit} </p>
                ))
            }
        </>
    )
}

export default Item
import React, { useRef } from 'react'
import { ts_sportsObj } from '../types'

type Props = {
    item:ts_sportsObj 
}

const item = ({item}: Props) => {
    const ele = useRef<HTMLLIElement|null>(null);

    const view = function(id:number){
        // alert(item.title)
        // console.log(ele)
        let str = `<div>${item.title}</div>`;

        if(ele.current){
            // ele.current.style.cssText='color:red';
            // ele.current.innerHTML=str;
            ele.current.classList.toggle('active');
        }
    }

    return (
        <>
            <li ref={ele} onClick={function(){view(item.id)}}>{item.title}</li>
        </>
    )
}

export default item
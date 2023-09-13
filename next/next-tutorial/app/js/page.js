//js폴더안에 page.js
"use client";//csr방식으로 바뀜
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function Page() {
    const router = useRouter();
    const [count, setCount] = useState(0);

    const move = function(){
        console.log('클릭!');
        // router.push('/');//홈으로 이동시키기
        router.push(`/js/${count}`);//특정 id값을 주고 이동시키기
    }

    return (
        <>  
            <span>page</span> 
            <button onClick={()=>{setCount(count+1)}}>{count}</button>
            으로 이동합니다! 
            <button onClick={move}>클릭 이벤트</button>
        </>
    )
}

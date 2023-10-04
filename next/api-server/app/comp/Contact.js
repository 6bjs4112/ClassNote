"use client"
//Contact.js 컴포넌트
import React, { useEffect } from 'react'

export default function Contact() {
    useEffect(()=>{

        // axois('/api',{b:3000}) axios에선 이렇게쓰던걸
        fetch('/api',{
            method:'post',
            body: JSON.stringify({b:3000}),
            
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
        })
    },[])

    return (
        <div>Contact</div>
    )
}

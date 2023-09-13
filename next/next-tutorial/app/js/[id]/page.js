//js폴더 안의 [id]폴더 안의 page.js
"use client"
import { useParams } from 'next/navigation'
import React from 'react'

export default function Page() {
    const param = useParams();
  return (
    <>
        <div>동적 라우팅!!!</div>
        <div>여기는 page {param.id}</div>
    </>
  )
}

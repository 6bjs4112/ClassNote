//test폴더의 page.js
import React from 'react'
import style from '../page.module.css'
import '../globals.css'//예전엔 layout에서만 쓸수있었대
import '../style.scss'

//↓ 컴포넌트 이름은 반드시 대문자로 시작
export default function Page() {
    return (
        <>
            <div className='txt'>글로벌 스타일 테스트</div>
            <div className={style.txt}>test page</div>
            <img src='./next.svg'></img>
            <button className='btn'>scss btn</button>
        </>
    )
}

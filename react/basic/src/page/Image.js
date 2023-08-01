// 자동완성 사용해봅시다 >확장 프로그램 > ES7+ React/Redux/React-Native snippets 설치
//rfc 타이핑 후 enter
import React from 'react' //있어도 없어도 상관없음
import logo from '../logo.svg';

function Image() {
    return (
        <>
        {/* 이미지 기존방식 사용 못함. 왜? 작업은 src에서하지만 실제 html은 public폴더 안에 있어서. 경로 바꿔주면 되긴함 */}
        * public 폴더안의 이미지 출력 <br />
            <img src="./logo512.png" alt='public폴더안에 있는거'/><br />

        * src 폴더안의 이미지 출력 {/*import해서 사용*/}<br />
            <img src={logo} alt='src폴더안에 있는거'/><br />
        </>
    )
}
export default Image

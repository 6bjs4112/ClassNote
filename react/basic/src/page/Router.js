import { useLocation, Link, useNavigate } from 'react-router-dom';


export default function Router() {

    const location = useLocation();
    console.log(location);//state들어온값 확인하기
    let {state, pathname} = location;
    console.log(state, pathname);

    const navigate = useNavigate();
    let move = ()=>{
        //css컴포넌트로 보내기
        navigate('/css');
    }

    return (
        <>
            <h2>Router</h2>
            * 새로운 페이지를 로드하지 않고 하나의 페이지 안에서 필요한 데이터만 가져오는 형태를 가진다. <br/>
            <br/>
            * 모듈 설치 ( npm i react-router-dom ) <br/>
            * import &#123; Link, BrowserRouter, Route, Routes &#125; from 'react-router-dom'; <br/>
            <hr />

            <h2>Link</h2>
            * 브라우저에 URL값을 전달하고 싶을때<br/>
                ㄴLink컨포넌트에 state 속성을 이용함 (state='값')<br/>
                <br/>
            * 브라우저에서 state값 받기<br/>
                ㄴreact-router-dom에 있는 useLocation hook를 사용함<br/>
                ㄴ사용방법: const 변수명 = useLocation();<br/>
            <hr />
            <br/><br/>

            <Link to='/'>Home</Link><br/>
            <button onClick={ move }>CSS 활용</button>

            <h2>useNavigate(이동, 값 전달) / useLocation(전달 값 확인)</h2>
            * import &#123; Link, useNavigate, useLocation &#125; from 'react-router-dom'; <br/>
            ㄴ 사용방법: const 변수명 = useNavigate();<br/>
            ㄴ 변수명('이동할url', state)<br/><br/>
            * Link는 태그를 활용하여 이동하지만 Navigate는 스크립트 프로그래밍을 통해 이동하고 싶을 때 주로 사용함<br/>
        </>
    )
}


function Css(){
    return(
        <>
            <h2> CSS </h2>
            * class => jsx문법에서는 className<br />
            * jsx문법에서 스크립트를 적용시키려면 {}기호를 반드시 이용<br />
            * style = {/*이게 화면상에 안보여서 옆에=>이걸로 표기 */} &#123;스크립트 기호 &#125; 
            &#123; border: '1px solid red'&#125;<br />
            * style = &#123; &#123; border: '1px solid red'&#125; &#125; <br />
            {/* {}가 여기선 스크립트라는 뜻이기 때문에 html유니코드 찾아서 씀? */}
            <hr />
            
            <h2>SCSS</h2>
            * sass install (npm install sass) <br />
            * js문서안에서 scss파일 호출 (import './App.scss') <br />
            * 작성방법은 기존과 동일 <br />
        </>
    );
}
export default Css;
import React, { useEffect } from 'react'

export default function Scroll() {
  let inter = ()=>{
    // console.log(window.pageYOffset);
    const elScroll = document.querySelector('.scroll');
    // console.log(elScroll.children);

    HTMLCollection.prototype.forEach = Array.prototype.forEach;  
    //forEach문 사용 가능해짐
    elScroll.children.forEach(function(el){
      // console.log(`이것은 ${el.offsetTop}`);
      if(el.offsetTop < window.pageYOffset + window.innerHeight){
        el.classList.add('active');
      }else if(el.offsetTop > window.pageYOffset){
        el.classList.remove('active');
      }
    })
  }

  useEffect(()=>{
    //mounting 되는 공간
    window.addEventListener('scroll',inter)
    //스크롤뿐만 아니라 다른 컴포넌트에서도 스크롤값이 뜨는것을 볼수있다
    //elScroll사용이후에는 다른 컴포넌트로 넘어가면 오류가 난다
    
    return()=>{
      console.log('unmounting');
      //다른 컴포넌트로 이동할 때 뜸. 
      //오 그럼 이 안에 스크롤값 죽이는거 넣으면 오류 해결~
      window.removeEventListener('scroll',inter)
    }
  },[])

  
  
  
  return (
    <>
      <article>
        <h2>Scroll</h2>
        <div className='scroll'>
          <figure>01</figure>
          <figure>02</figure>
          <figure>03</figure>
          <figure>04</figure>
          <figure>05</figure>
          <figure>06</figure>
        </div>
      </article>
    </>
  )
}

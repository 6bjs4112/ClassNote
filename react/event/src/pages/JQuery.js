import React, { useEffect } from 'react'
import $ from 'jquery';

export default function JQuery() {
  function test(){
    $('.txt').css('color','red');
  }
  useEffect(test,[])
  
  return (
    <>
      <article>
        <h2>JQuery</h2>
        <div className='txt'>
          npm install jquery <br/>
          ㄴ이후 사용하는 js문서 상단에 import $ from 'jquery';<br/>
        </div>
      </article>
    </>
  )
}

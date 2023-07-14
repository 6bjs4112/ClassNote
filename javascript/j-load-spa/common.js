// $('main').load('./main.html')
//↑항상 로드 실행되야 하니 함수(dataChange)로 만듬↓

function dataChange(pageUrl){
    $('main').removeClass('active');//초기화

    //로드 완료되면 실행할 함수
    setTimeout(()=>{
        $('main').load(pageUrl, function(){
                $('main').addClass('active')
        });
    },1000)
}
dataChange('./main.html')

//url이 바뀌지도 않는데 페이지는 이동함
$('header a').on('click',function(e){
    e.preventDefault();
    dataChange($(this).attr('href'))

    let url = $(this).attr('href');
    history.pushState({num:$(this).index()},'',url);
    //히스토리에 내역좀 남겨줘
    dataChange(url)
})

$(window).on('popstate',function(){
    //뒤로가기 눌렀을 때 실행됨
    let num = history.state?.num || 0;
    //ooo?xxx 형태: ooo이 null,undefind,false등이면 xxx는 실행하지 않음 ooo까지만 실행함,
    let url = $('header a').eq(num).attr('href');
    dataChange(url);
})

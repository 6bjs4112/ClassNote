// append(앞으로 내용 추가)
// prepend(뒤로 내용 추가)

$('body').prepend('<header></header>');
$('header').load('./inc.html nav', menu);

function menu(){
    localStorage.num && $('header nav a').eq(localStorage.num).css('color','red');//메뉴에 불들어와라
    //(여기있는게 true일때) && (얘를 실행함)
    $('header nav a').on('click',function(e){
        e.preventDefault();
        localStorage.setItem('num',$(this).index());

        location.href = $(this).attr('href');
    })
}


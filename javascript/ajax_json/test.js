$.ajax({
    // $ =>선택자가 없을때 사용가능, 제이쿼리.아작스?
    url:"./data.json",
    success:function(data){
        console.log(data);
        //data.json에 있는 아이템들이 객체 형식으로 불러와져 있음. 변환이 필요없음
        console.log(data.items);//이런식으로 선택해서 가져오기 가능

        //이제 넣어주기. forEach문하고 비슷함 ↓기본형태↓
        // $('다중선택자').each(function(){        }); 
        let tag='';
        $.each(data.items,function(key,value){
            console.log(value);//사진 소스는 이렇구나
            tag += `
            <div class="thumb">
                <a href="${value.detail}" class="image">
                    <img src="${value.thumb}">
                </a>
                <h2>${value.name}</h2>
            </div>
            `;
        })
        $('#main').html(tag);//사진추가하기

        $('.thumb').on('click',function(e){
            e.preventDefault();
            $('.poptrox-overlay').show();
            //.show() =>css의 display: block과 같음. 팝업~
            //근데 계속 같은 사진만 나옴. 바꾸자

            //data change 데이터 바꿔치기?
            //클릭한 아이템의 값을 가져오기
            let detail = $(this).find('>a').attr('href');
            let name = $(this).find('h2').text();

            //팝업창 안의 정보를 바꾸기
            $('.pic img').attr('src',detail);
            $('.caption').text(name);
        });

        //닫기버튼
        $('.closer').on('click', function(e){
            e.preventDefault();
            $('.poptrox-overlay').hide();//팝업 숨기기
        })
        //next prev 버튼만들때 필요한거?
        let idx = $(this).index();
        console.log(idx);
            $('.thumb').eq(idx)
    },
    error:function(){ },
})
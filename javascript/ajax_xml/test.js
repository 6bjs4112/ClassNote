$.ajax({
    url:"./data.xml",
    beforeSend:function(){ console.log('로딩중') },
    complete:function(){ console.log('로딩 끝내기') },
    success:function(data){
        console.log('데이터 받았음')
        let detail, thumb, name, tag;
        $(data).find('item').each(function(key,ele){
            //xml에선 .name 같은 방식으로 찾는거 못함
            // console.log(key);
            // console.log(ele);
            // console.log( $(ele).find('name').text() );
            // console.log( $(ele).find('div').html() );
            detail = $(ele).find('detail').text();
            thumb = $(ele).find('thumb').text();
            name = $(ele).find('name').text();

            tag = `
                <div class="thumb">
                    <a href="${detail}" class="image">
                        <img src="${thumb}" alt="" />
                    </a>
                    <h2>${name}</h2>
                </div>
            `;
            $('#main').append(tag);
        })
        //팝업 뜨게하기
        let indexNum = 0;
        $('.thumb').on('click',function(e){
            e.preventDefault();
            indexNum = $(this).index();
            popup(indexNum);
        });

        //닫기 버튼
            $('.closer').on('click', function(e){
                e.preventDefault();
                $('.poptrox-overlay').hide();
            })
        //prev 버튼
            $('.nav-previous').on('click', function(){
                indexNum--; 
                popup(indexNum);
                console.log(indexNum);
            })
        //next 버튼
            $('.nav-next').on('click', function(){
                indexNum++;
                popup(indexNum);
                console.log(indexNum); 
            })
        //팝업 함수
        function popup(n){
            let detailSrc = $('.thumb').eq(n).find('>a').attr('href');
            let nameSrc = $('.thumb').eq(n).find('h2').text();
            
            $('.pic img').attr('src',detailSrc);
            $('.caption').text(nameSrc);

            $('.poptrox-overlay').show();
        }
    },
    error:function(){ }
})
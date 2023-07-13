const elNav = document.querySelectorAll('nav a');

let pageNum = localStorage.pageNum;
if(pageNum){elNav[pageNum].style.color = 'red';}

console.log(typeof localStorage.obj);//string타입입니다~
console.log(localStorage.obj);//string타입입니다~
console.log(
    JSON.parse(localStorage.obj)
    );//문자를 오브젝트 타입으로 다시 변환했답니다~

elNav.forEach(function(menu,key){
    menu.onclick = function(e){
        localStorage.pageNum = key;

        let objStr = {num:key, name:this.innerText};
        localStorage.obj = JSON.stringify(objStr);//( 괄호 안의 것을 )문자로 변환하기
        // localStorage.obj = {num:key, name:this.innerText };
    }
})

// switch(0){
//     case '0':main(); break;
//     case '1':about(); break;
//     case '2':board(); break;
//     default : /*케이스에 해당되지 않는다면 디폴트를 실행;*/
// }
// function main(){return 'main'}
// function about(){return 'about'}
// function board(){return 'board'}

// //==========이 문서에서 배운거========================
// localStorage.키 = 값(문자, 숫자, 객체, 배열); //값을 주세요
// localStorage.키 //값을 갱신

// JSON.parse(객체형식의 문자)//문자->객체로 변형
// JSON.stringify(문자)      //객체->문자로 변형

// switch(값){
//     case:값:실행문; break;
//     case:값2:실행문2; break;
//     default: 값이 없을 경우 실행문;
// }

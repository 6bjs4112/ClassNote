<template>
    <section :class="classname">
        <article class="title">
            <h1 class="titleName darkText">Skills</h1>
            <div class="decoLine"></div>
        </article>

        <article class="imgSkill">
            <ul class="imgWrap">
                <li class="eachSkillBg" v-for="(obj, k) in logoImgdata" :key="k">
                    <img :src="obj.src" :alt="obj.name">
                </li>
            </ul>
        </article>

        <article class="skillText">
            <div class="decoLineBlue"></div>
            <div class="textWrap">
                <h2 class="bigText">What I can do with</h2>
                <p class="longText darkText">
                    예시) 웹표준을 준수하며 시맨틱 마크업을 작성합니다.
                    SASS를 활용하여 컴포넌트화 되고 유지보수에 최적화된 코딩을 지향하며, 
                    각종 jQuery 플러그인을 활용 및 커스터마이징 하여 여러가지 동적 효과를 구현합니다.
                    Gulp로 각종 pre process와 빌드의 자동화를 구현하고 Git으로 소스의 형상관리를 합니다.
                </p>
            </div>
        </article>
    </section>
</template>

<script>
import data from "/public/assets/logoImgs.json"
const logoImgdata = data;
export default {

    data(){
        return{
            pathname:this.$route.name,
            classname:'skills',
            logoImgdata
        }
    },

    mounted(){
        setTimeout(() => {
            this.tabChange();
        }, 100);
    },

    methods:{
    //탭 스타일 변경
        tabChange(){
            if(this.pathname == this.classname){
                const tabs = document.querySelectorAll('.tabs');
                tabs.forEach(tab => {
                    tab.classList.remove('colorTab');
                });
                document.querySelector(`#${this.classname}`).classList.add('colorTab');
            }
        }
    }
}
</script>
<style scoped lang="scss">
.skills{
    width: 100%; height: 100%;
    position: absolute; top: 15%; left: 30%;
    transform: translate(-30%,-15%);
    padding: 5%;

    .title{
        .titleName{
            color: #000;
            font-family: ONE Mobile POP;
            font-size: 52px;
            font-weight: 400;
            line-height: normal;
        }
        .decoLine{
            width: 200px;height: 15px; 
            background-color: rgba(167, 129, 231, 0.69);
            transform: translate(0%,-90%);
        }
    }
    .imgSkill{
        margin-top: 20px;
        .imgWrap{
            padding: 5%;
            display: flex; flex-wrap: wrap;
            justify-content: flex-start; align-items: center;

            .eachSkillBg{
                width: 120px; height: 120px;
                border-radius: 25px;
                border: 2px solid #C1A7EE;
                background: #FDFEFF;
                box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
                display: flex; justify-content: center; align-items: center;
                margin: 1% 0.5%;
                img{width: 100px;}
            }
        }
    }
    .skillText{
        margin-top: 20px;
        display: flex; align-items: center; justify-content: center;
        .decoLineBlue{
            width: 27px; height: 170px;
            background:linear-gradient(180deg, #8F94FF 0%, #9AE2FF 100%);
        }
        .textWrap{
            height: 170px;
            display: flex; flex-direction: column;
            justify-content: space-evenly; align-items: flex-start; 
            margin-left: 20px;
            .bigText{
                font-family: ONE Mobile POP;
                font-size: 40px; font-weight: 400;
                background: linear-gradient(270deg, #9AE2FF 50%, #7B81FE 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            .longText{
                margin-top: 5px;
                color: #000;
                font-family: Noto Sans KR;
                font-size: 16px;
                line-height: normal;
            }
        }
    }
}
</style>
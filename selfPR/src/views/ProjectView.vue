<template>
    <section :class="classname">
        <article class="title">
            <h1 class="titleName darkText">Project</h1>
            <div class="decoLine"></div>
        </article>

        <article class="prjData" 
            v-for="(obj,jsonK) in projectData" :key="jsonK">
            <div class="leftPic">
                <ul class="imgSlide swiper mySwiper">
                    <li class="eachImg swiper-wrapper" 
                        v-for="(img,imgK) in obj.imgs" :key="imgK">
                        <img class="swiper-slide" :src="img" >
                    </li>
                    <div class="swiper-pagination"></div>
                </ul>

                <ul class="link">
                    <li class="linkBox">
                        <img src="../../public/assets/img/linkImg.png" alt="링크 아이콘">
                        <p>project</p>
                    </li>
                    <li class="linkBox">
                        <img src="../../public/assets/img/githubLogoDark.svg" alt="깃허브 아이콘">
                        <p>github</p>
                    </li>
                </ul>
            </div>
            <div class="rightTexts">
                <h3 class="prjTitle">{{ obj.name }}</h3>
                <p class="prjDate">{{ obj.date }}</p>
                <b class="guideText">Planning the road</b>
                <p class="prjPlan">{{ obj.plan }}</p>
                <b class="guideText">Description</b>
                <p class="prjDesc">{{ obj.desc }}</p>
                <b class="guideText">Make Language</b>
                <div class="prjLang"
                    v-for="(lang,imgL) in obj.lang" :key="imgL">
                    <p class="eachLang">{{ lang }}</p>
                </div>
            </div>
        </article>
    </section>
</template>

<script>
// import data from "../../public/assets/projectData.json";
import data from "../../public/assets/testData.json";
const projectData = data;

import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
SwiperCore.use([Pagination]);

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup(){
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [ Pagination,Autoplay],
        };
    },

    data(){
        return{
            pathname:this.$route.name,
            classname:'project',
            projectData,
            swiperOptions: { pagination: true,}
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
.project{
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
}
</style>
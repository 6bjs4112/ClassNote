<template>
    <section :class="classname">
        <article class="title">
            <h1 class="titleName darkText">Project</h1>
            <div class="decoLine"></div>
        </article>

        <article class="prjData">
            <dl class="wrapLR"
                v-for="(obj,jsonK) in projectData" :key="jsonK"
            >
                <div class="wrapMain">
                    <div class="leftPic">
                        <ul class="imgSlide">
                            <swiper 
                                :modules="modules" 
                                :pagination="true"
                                class="mySwiper slideWrap" 
                            >
                                <swiper-slide
                                    v-for="(img,imgK) in obj.imgs" 
                                    :key="imgK"
                                >
                                    <img class="eachImg" :src="img" >
                                </swiper-slide>
                            </swiper>
                        </ul>

                        <ul class="link">
                            <a :href="obj.link[0]" class="linkBox" target="_blank">
                                <span></span>
                                <img class="iconimg" src="../../public/assets/img/linkImg.png" alt="링크 아이콘">
                                <p class="iconText">project</p>
                            </a>
                            <a :href="obj.link[1]" class="linkBox" target="_blank">
                                <span></span>
                                <img class="iconimg" src="../../public/assets/img/githubLogoDark.svg" alt="깃허브 아이콘">
                                <p class="iconText">github</p>
                            </a>
                        </ul>
                    </div>
                    <div class="rightTexts">
                        <h3 class="prjTitle darkText">{{ obj.name }}</h3>
                        <p class="prjDate darkText">{{ obj.date }}</p>
                        <b class="guideText">Planning the road</b>
                        <p class="prjPlan darkText">{{ obj.plan }}</p>
                        <b class="guideText">Description</b>
                        <p class="prjDesc darkText">{{ obj.desc }}</p>
                        <b class="guideText">Make Language</b>
                        <div class="wrapLang">
                            <div class="prjLang"
                                v-for="(lang,imgL) in obj.lang" :key="imgL"
                            >
                                <p class="eachLang">{{ lang }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="decoLinePurple"></div>
            </dl>
        </article>
        
    </section>
</template>

<script>
import data from "../../public/assets/projectData.json";
const projectData = data;

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    data(){
        return{
            pathname:this.$route.name,
            classname:'project',
            projectData,
            modules: [Pagination],
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
<style lang="scss">
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
    .prjData{
        width: 100%; height: 85%;
        overflow: hidden;
        overflow-y: scroll;
        margin-top: 30px;
        .wrapLR{
            display: flex; flex-direction: column;
            justify-content: center; align-items: center;
            margin-top: 50px;
            .wrapMain{
                display: flex; 
                justify-content: space-between; align-items: center;
                padding: 5%;
                .leftPic{
                    width: 50%;
                    
                    display: flex; flex-direction: column;
                    justify-content: center; align-items: center;
                    .imgSlide{
                        margin-bottom: 10px;
                        width: 100%; height: 440px;
                        .slideWrap{
                            width: 340px; height: 440px;
                            border-radius: 10px;
                            swiper-slide{
                                width: 100%; height: 100%;
                            }
                        }
                    }
                    .link{
                        display: flex; justify-content: center; align-items: center;
                        .linkBox{
                            position: relative;
                            z-index: 1;
                            width: 120px; height: 35px;
                            background-color: #4E5197;
                            display: flex; justify-content: space-evenly; align-items: center;
                            cursor: pointer;
                            transition: .3s ease-in;
        
                            &:hover span::after{opacity: 1;}
                            &:nth-child(2){margin-left: 10px;}
                            
                            span{
                                position: absolute;
                                left: 0;top: 0;
                                width: 100%; height: 100%;
                            }
                            span::after{
                                content: '';
                                background: linear-gradient(90deg, #8F94FF 45%, #9AE2FF 100%);
                                opacity: 0; display: block;
                                width: 100%; height: 100%;
                                transition: .3s ease-in;
                            }
                            .iconimg{
                                z-index: 2;
                                width: 20px; height: 20px; 
                            }
                            .iconText{
                                z-index: 2;
                                color: #FFF;
                                text-align: center;
                                font-family: Noto Sans KR;
                                font-size: 20px;
                                font-weight: 700;
                            }
                        } 
                    }
                }
                .rightTexts{
                    width: 45%;
                    color: #000;
                    .prjTitle{
                        font-family: ONE Mobile POP;
                        font-size: 36px;
                        font-weight: 400;
                        margin-bottom: 10px;
                        text-align: center;
                    }
                    .prjDate{
                        font-family: Noto Sans KR;
                        font-size: 12px;
                        font-weight: 700;
                        margin-bottom: 35px;
                        text-align: center;
                    }
                    .guideText{
                        font-family: ONE Mobile POP;
                        font-size: 16px;
                        font-weight: 700;
                        line-height: normal;
                        
                        background: linear-gradient(270deg, #9AE2FF 50%, #7B81FE 100%);
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                    .prjPlan, .prjDesc{
                        font-family: Noto Sans KR;
                        font-size: 12px;
                        font-weight: 400;
                        line-height: normal;
                        margin: 15px 0;
                    }
                    .wrapLang{
                        display: flex; flex-wrap: wrap;
                        margin-top: 15px;
                        .prjLang{
                            display: flex; text-align: center;
                            justify-content: center; align-items: center;
                            margin: 3px 0 3px 5px;
                            .eachLang{
                                width: 100%;
                                border-radius: 50px;
                                background: #8F94FF;
        
                                color: #FFF;
                                font-family: Noto Sans KR;
                                font-size: 12px;
                                font-style: normal;
                                font-weight: 500;
                                padding: 7px 18px;
                                
                            }
                        }
                    }
                }
            }
            .decoLinePurple{
                width: 50%; height: 3px;
                border-radius: 25px;
                background: rgba(167, 129, 231, 0.69); 
                margin-top: 50px;
            }
        }
    }
    ::-webkit-scrollbar{
        width: 10px;
        background-color: #AAADF9; 
    }
    ::-webkit-scrollbar-thumb{
        width: 4px;
        height: 30px;
        background-color: #5F50BC;
        background-clip: padding-box;
        border: 3px solid transparent;
    }
}
.eachImg{width: 100%; height: 100%; object-fit: cover}
.swiper-pagination-bullet{
    background-color: #D9D9D9;
    width: 20px;
    height: 20px;
    opacity: 0.6;
}
.swiper-pagination-bullet-active{
    background-color: #A7AAFF;
    opacity: 1;
}
</style>
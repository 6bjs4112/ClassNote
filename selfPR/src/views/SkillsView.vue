<template>
    <div :class="classname">
        <article class="title">
            <h1>Skills</h1>
            <div class="decoLine"></div>
        </article>
    </div>
</template>

<script>

export default {


    data(){
        return{
            pathname:this.$route.name,
            classname:'skills'
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
        h1{
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
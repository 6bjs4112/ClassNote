<template lang="">
    <h2>뉴스 리스트</h2>
    <div>
        <ul v-if="mode==='list'">
            <li v-for="item in newsData" :key="item.id"
                @click="detail(item.contents)"
            >
                {{item.subject}}
                <button @click.stop="deleteNews(item.id)" >삭제</button>
            </li>
        </ul>
        <NewsWrite v-else-if="mode==='write'" @parent="insert"/>
        <NewsDetail v-else :content="content"/>
    </div>
    <button class="btn-w" @click="modeChange('write')">글쓰기</button>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import NewsWrite from './NewsWrite.vue'
import NewsDetail from './NewsDetail.vue'

export default {

    data(){
        return{content:''}
    },
    name:'App',
    components:{
        NewsWrite,
        NewsDetail
    },

    computed:{
        ...mapState(['newsData','mode']),  
    },

    methods:{
        ...mapMutations(['modeEdit','insertNews','deleteNews']),

        modeChange(str){
            this.modeEdit(str)
        },
        insert(v){
            this.modeChange(v.mode)
            this.insertNews(v.value)
            console.log(v);
        },
        detail(str){
            this.content = str;
            this.modeChange('detail')
        }
    }
}
</script>
<style lang="scss">
    *{box-sizing: border-box;}
    div{width:500px; margin:0 auto;}
    ul{
        list-style: none; margin:0;  text-align:left; padding:0;
        li{padding:10px 0; border-bottom:1px solid #ddd}
    }
    .btn-w{
        
        background: black;
        color:white;
        width:80px; height:80px;
        border-radius: 100%;
        position:fixed;
        right:5%; top:5%;
    }
    input,
    textarea{padding:15px; width:100%; margin:10px 0;}
    .view{
        border:1px solid #ddd;
        padding:60px;
        text-align: left;
        border-radius: 20px;
    }
    
</style>
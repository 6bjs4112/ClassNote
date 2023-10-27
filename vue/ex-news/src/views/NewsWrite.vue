<template lang="">
    <h2>글쓰기</h2>
    <div class="form">
        <form @submit="datasave">
            <input type="text" name="username" v-model="username" placeholder="이름을 입력해 주세요"/>
            <input type="text" name="subject" v-model="subject" placeholder="제목을 입력해 주세요"/>
            <textarea name="contents" v-model="contents" placeholder="내용을 입력해 주세요"></textarea>
            <input type="submit" value="저장"/>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:'',
            subject:'',
            contents:''
        }
    },
    methods:{
        datasave(e){
            e.preventDefault();
            this.$emit("parent",{
                mode:'list',
                value:{
                    id:Date.now(),
                    name:this.username, 
                    subject:this.subject, 
                    contents:this.contents
                }
            })
        }
    }   
}
</script>


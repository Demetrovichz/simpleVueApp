<template>
  <div class="postCreator" id="postCreator">
    <div class="title_creator">
       <my-input type="text" v-model="post.title" placeholder="Введите заголовок"> </my-input>
    </div>
        <div class="discription">
      <my-input type="text" v-model="post.discription" placeholder="Укажите новость"></my-input>
    </div>
    <my-button  v-on:click.stop.prevent="CreatePost">Добавить</my-button>
  </div>
</template>

<script>
export default {
  name:'Post-Create-Page',
  data(){
    return{
      post:{
        title:'',
        body:'', 
        likes:'',
        id:''
      }
    }
  },
  watch:{
    post(){
      console.log(this.PostTitle)
    }
  },
  methods: {
    CreatePost(){
      let a  =  {title: this.post.title,body:this.post.discription, likes:0,isLiked:false,id:Date.now()}
      this.$emit('addPost', a)
    }
  },
  mounted(){
  }
}
</script>

<style>
.postCreator{
  display:flex;
  justify-content:row;
}

</style>
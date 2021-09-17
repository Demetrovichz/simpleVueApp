<template>
  <div class="card_post" v-if="data.length>0">
    <transition-group name="post-list">
      <div class="card_title" v-for="(serch,index) in data" :key="index">
      <h1>{{serch.title}}</h1>
       <p>{{serch.body}}</p>
        <my-button  v-on:click.stop.prevent="DeletePost(serch.id)">Удалить</my-button>
       <div class="cardInfo">
       </div>
    </div>
    </transition-group>
  </div>

  <div class="card_post" v-else>
    <div class="card_empty">
        <h1 class="card_empty_text">Список постов пуст!</h1>
    </div>
  </div>
</template>

<script>
export default {
  name:'Post-List',
  props:{
    data:{
      type:Array,
      required:true
    }
  },
  data(){
   return{
   }
  },
  methods:{
    Info(event){
     this.$emit('setLike', event)
    },
    DeletePost(event){
      this.$emit('deletePost',event)
    }
}
}
</script>

<style scoped>
.card_post{
  z-index: 1;
}
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 1s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.card_empty{
  text-align: center;
  margin-top: 20px;
  border: 5px solid rgb(110, 226, 154);
  border-radius: 0px 40px 0px 15px;
}
.card_empty_text{
  color: rgb(110, 226, 154);

}

.cardInfo{
  color: rgb(110, 226, 154);
  float:left;
}
.card_post{
  display: flex;
  flex-direction: column;
}
p{
  margin-bottom:15px;
  margin-left:15px
}
h1{
  margin-left:15px;

}
.card_title{
  border: 5px solid rgb(110, 226, 154);
  border-radius: 0px 40px 0px 15px;
  margin-top: 20px ;
  margin-left: 15px;
}

</style>
<template>
  <div>
    <Post-Create-Page @addPost="addPost"/>
    <Post-List v-bind:data="posts" @setLike="setLike" @deletePost="deletePost" v-if="isPostLoading"/>
    <div class="info" v-else>Загрузка пользовательей.</div>
    </div>
</template>

<script>
import PostList from './components/PostList.vue'
import PostCreatePage from './components/PostCreatePage.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    PostList,PostCreatePage,
  },
  data(){
    return {
      sortedLikes: '',
      posts: [],
      isPostLoading: false,
       options: {
            mouseControls: true,
            touchControls: true,
            minHeight: 900.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00
        }
    }
  },
  methods:{
    addPost(data){
      this.posts.push(data)
    },
    setLike(event){
      console.log(event)
      return this.sortedLikes = this.posts.filter(post => post.id === event) 
    },
    deletePost(event){
      this.posts = this.posts.filter(post => post.id !== event) 
    },
    async fetchUsers(){
      try {
        this.isPostLoading = true;
        setTimeout (async() => { 
          const response =  await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
          this.isPostLoading = true;
        this.posts = response.data;
        }, 1000);
        this.isPostLoading = false;
      } catch (e) {
        console.log(e)
      }
    }
  },
  mounted(){
    this.fetchUsers();
  },
  watch:{
    sortedLikes(){
      if(this.sortedLikes[0].isLiked == true){
        this.sortedLikes[0].likes--;
        this.sortedLikes[0].isLiked=false;

      }else{
          this.sortedLikes[0].likes++
          this.sortedLikes[0].isLiked = true;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

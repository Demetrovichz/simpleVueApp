<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name:'my-button'
}
</script>

<style scoped>
button{
  width:300px;
  padding: 10px 15px;
  background: none;
  border-radius: 0px 25px 0 10px;
  border:1px solid rgb(51, 153, 153);
}
</style>
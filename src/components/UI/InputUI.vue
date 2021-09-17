<template>
  <input :value="modelValue" @input="updateInput" type="text">
</template>

<script>
export default {
  name:'my-input', 
  props:{modelValue:[String,Number]}, 
  methods:{
    updateInput(event){
  this.$emit('update:modelValue', event.target.value);
  }
}
}
</script>

<style scoped>
input{
  width:300px;
  height:50px;
  border:1px solid green;
  margin-right:15px ;
}
</style>
<script>
  import input from './components/input.vue';
  import buttons from './components/buttons.vue';

  export default{
    data(){
      return{

      }
    },
    components : {
      "Input" : input,
      "Buttons" : buttons
    }
  }
</script>

<template>
  <div class="boxing">
    <Input/>
    <Buttons/>
  </div>
</template>

<style scoped>
  .boxing{
    width: 375px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    height: auto;
    background-color: orangered;
    border-radius: 0.5rem;
  }
</style>
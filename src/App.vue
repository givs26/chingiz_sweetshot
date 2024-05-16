<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<div style="margin: 50px">
  <PictureSweetshot />
</div>

<!--  <div style="margin-top: 5px; ">-->
<!--  <CardVar/>-->
<!--  </div>-->
</template>

<script>

//import HelloWorld from './components/HelloWorld.vue';
import PictureSweetshot from "@/components/PictureSweetshot";

//import HorizontalBar from "@/components/HorizontalBar";
//import CardVar from "@/components/CardVar";
export default {
  name: 'App',
  components: {
   // CardVar,
    //HorizontalBar,
   // HelloWorld,
    PictureSweetshot,

  }
}
</script>

<style>



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style>
  @import './css/main.css';
</style>

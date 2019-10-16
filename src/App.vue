<template>
  <div id="app">
    <div class="header">人工智能 <span>急诊预检</span></div>

    <router-view></router-view>

    <div class="footer">奕诊智能 <span>提供技术支持</span></div>

  </div>
</template>
<script>
export default {
  name: 'app'
  
}
</script>


<style>
*{
  margin: 0;
  padding: 0;
}
.header{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 25px;
  color: white;
  background-color:rgba(0, 0, 0, .5);
}
.footer{
  position: absolute;
  bottom: 0;
  left: 0;
  height: 60px;
  line-height: 60px;
  width: 100%;
  font-size: 10px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color:black; 
  background-color: lightgray;
  opacity: 0.7;
}
.header span{
  font-size: 30px;
}
.footer span{
  font-weight: bold;
  font-size: 15px;
}

</style>

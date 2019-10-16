<template>
    <div id="login">
      <div id="login-input">
      <form>
        <div class="label">护士工号</div>
        <div class="text">
          <input type="text" id="name" style="width:250px;height:25px">
        </div>
        <br><br>
        <div class="label">密码</div>
        <div class="text">
          <input type="password" id="password" style="width:250px;height:25px">
        </div>
        <br><br><br>
        <div class="button">
          <button v-on:click="login">登录</button>
        </div>
       </form>
       </div>
    </div>   
</template>

<script>

export default {
    name: 'Login',
    data(){
      return{}
      },
     methods: {
       login(){
           this.$router.push({path:'List'})
       }
     } 
}
</script>


<style scoped>
#login{
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  width: 300px;
  height: 250px;
  margin: 100px auto;
  padding: 50px;
  border-radius: 15px;
  background-color:rgba(0, 0, 0, .5);
}

#login-input{
  width: 250px;
  margin: 30px auto;
}

.label{
  font-size: 20px;
  font-weight: bold;
  color: white;
}

button{
  width: 150px;
  height: 30px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: white;
  border: 1px solid white;
  outline: none;
  background-color: transparent;
  letter-spacing: 5px;
  display: block;
  margin: 0 auto;
}

button:hover{
  background-color: rgba(0, 0, 0, .2);
}
</style>


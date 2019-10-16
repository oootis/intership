<template>
  <div class="List">
      <div class="input">
         <input type="text" name="patient" placeholder="请输入患者姓名">
         <input type="text" placeholder="到院时间" name="arriveTime">
         <div id="line">--</div>
         <input type="text" placeholder="出院时间" name="leaveTime">
         <button>搜索</button>
         
      </div>
      <div class="table">
         <table>
           <tr>
            <th>检伤级别</th>
            <th>门诊号</th>
            <th>病人</th>
            <th>性别</th>
            <th>年龄</th>
            <th>到院时间</th>
            <th>分诊时间</th>
            <th>去向</th>
            <th>分级护士</th>
            <th>来院方式</th>
            <th>备注</th>
           </tr> 
         </table>
       </div>
  </div>
</template>  

<script>
export default {
  name: 'List',
  data(){
    return{}
  }
  
}
</script>


<style scoped>
.input{
  margin: 30px 10px;
}
input[name="patient"]{
  width: 300px;
  height: 30px;
  margin:0 15px;
  border:1px solid #eeeeee;
}
input[name="arriveTime"]{
  margin:0 15px;
  height: 30px;
  border:1px solid #eeeeee;
}
input[name="leaveTime"]{
  margin:0 15px;
  height: 30px;
  border:1px solid #eeeeee;
}
button{
  width: 60px;
  height: 35px;
  border-radius: 6px;
  border: none;
  vertical-align: middle;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 15px;
  text-align: center;
  color: white;
  background-color: #22a7f0;
  letter-spacing: 5px;
}
button :hover{
  background-color: lightskyblue;
}
#line{
  display: inline-block;
}
table{
  margin: 30px 0 0 15px;
}
th{
  height: 40px;
  line-height: 40px;
  font-weight: normal;
  font-size: 13px;
  background-color:lightskyblue;
  padding: 0 40px;
}

</style>

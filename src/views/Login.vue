<template>
  <div class="page">
    <div class="login-dialog">
      <div class="login-box">
        <div class="user">
          <span>用户名</span>
          <input type="text" class="username" placeholder="请输入用户名" name="username">
        </div>
        <div class="psw">
          <span>密&emsp;码</span>
          <input type="password" class="password" placeholder="请输入密码" name="password">
        </div>
        <button class="login-btn">登录</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  border: none;
}
.page{
  display: flex;
  height:500px;
  justify-content: center; /* 垂直居中 */
  align-items: center;   /* 水平居中 */
}
.login-dialog{
    width:360px;
    height:250px;
    background-color: white;
    border-radius: 10px;
    /* x轴阴影段长度 ,y轴阴影段长度,往四周阴影段长度,阴影段颜色 */
    box-shadow:2px 2px 10px #909090; 
    background-color: #f5f5f5;
}
/* 登录框 */
.login-box{
    width: 300px;
    height:200px;
    padding-top:20px;
    margin:0 auto;
}
/* 用户名,密码 */
.user , .psw{
  margin-top:20px;
  border-radius: 5px;
}
.user span,.psw span{
  display:inline-block;
  width:70px;
  height: 32px;
  line-height: 32px;
  color: white;
  background-color: #4daf7c;
}
.login-box input{
  width:200px;
  height: 30px;
  text-indent: 5px;
  border: none;
  /* box-shadow: 1px 1px 1px #909090; */
  /* input向内阴影 */
  /* box-shadow: 0px 0px 1px #909090 inset; */
}
.login-btn{
  width: 270px;
  height: 32px;
  margin-top:30px;
  cursor: pointer;
  background-color: #e9c85d;
  color: white;
  border: none;
  border-radius: 2px;
}
</style>
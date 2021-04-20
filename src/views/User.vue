<template>
  <div>
    <div class="title">用户登录</div>
    <van-form @submit="onSubmit">
      <van-field v-model="username" label="用户名" left-icon="user-o" placeholder="请输入用户名/邮箱" :rules="[{ required: true, message: '用户名不能为空' }]"/>
      <van-field v-model="password" label="密码" left-icon="smile-o" placeholder="请输入密码" type="password"  :rules="[{ required: true, message: '密码不能为空' }]"/>
      <div class="btn-group">
        <van-button class="btn" round block type="danger" native-type="submit">登录</van-button>
        <van-button class="btn" round block plain type="danger">注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<style scoped>
  .title {
    text-align: center;
    font-size: large;
    font-weight: bold;
    color: #e60001;
    margin-top: 60px;
    margin-bottom: 20px;
  }

  .btn-group {
    display: flex;
    margin-top: 30px;
  }

  .btn {
    margin-left: 10px;
    margin-right: 10px;
  }
</style>

<script>
  export default {
    name: "User",
    data() {
      return {
        username: "",
        password: ""
      }
    },
    methods: {
      onSubmit() {

      }
    }
  }
</script>


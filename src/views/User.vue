<template>
  <div>
    <div class="title">用户登录</div>
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="用户名" label="用户名" :rules="[{ required: true, message: '请填写用户名' }]"/>
      <van-field v-model="password" type="password" name="密码" label="密码" :rules="[{ required: true, message: '请填写密码' }]"/>
      <div class="btn-group">
        <van-button class="btn" round block type="danger" native-type="submit">登录</van-button>
        <van-button class="btn" round block plain type="danger" native-type="submit">注册</van-button>
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


<template>
  <div>
    <div class="nav-bar">
      <van-icon name="edit" />
      <span class="nav-title">用户注册</span>
    </div>
    <div class="title">Sign Up</div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username" name="username"
        label="用户名" placeholder="请输入用户名"
        left-icon="user-o"
        :rules="[{ required: true, message: '用户名不能为空' }]"
      />
      <van-field
        v-model="password" name="password"
        label="密码" placeholder="请输入密码"
        left-icon="smile-o" type="password"
        :rules="[{ required: true, message: '密码不能为空' }]"
      />
      <van-field
        v-model="passwordConfirm" name="passwordConfirm" label="确认密码" placeholder="请输入密码"
        left-icon="smile-o" type="password"
        :rules="[{ required: true, message: '确认密码不能为空' }]"
      />
      <div class="btn-group">
        <van-button class="btn" native-type="submit" type="danger" round block>立即注册</van-button>
        <van-button class="btn" @click="onReturn" type="danger" plain round block>返回</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data() {
      return {
        username: "",
        password: "",
        passwordConfirm: ""
      }
    },
    methods: {
      onSubmit(form) {
        console.log(form);
        this.$router.push("/login");
      },
      onReturn() {
        this.$router.push("/login")
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    align-items: center;
    padding: 15px 10px 15px;
    background-color: #e60001;
    font-size: large;
    font-weight: bold;
    color: white;
  }

  .nav-title {
    margin-left: 5px;
  }

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
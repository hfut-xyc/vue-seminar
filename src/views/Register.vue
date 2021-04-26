<template>
  <div>
    <div class="title">用户注册</div>
    <van-form>
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
        :rules="[{ required: true, message: '密码不能为空' }]"
      />
    </van-form>
    <div class="btn-group">
      <van-button class="btn" @click="onSubmit" type="danger" round block>立即注册</van-button>
    </div>
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
      onSubmit() {
        this.$router.replace("/login")
      }
    }
  }
</script>

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
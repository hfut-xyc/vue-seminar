<template>
  <div>
    <div class="title">用户登录</div>
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
      <div class="btn-group">
        <van-button class="btn" native-type="submit" type="danger" round block>登录</van-button>
        <van-button class="btn" @click="onReset" type="danger" round block plain>重置</van-button>
      </div>
    </van-form>

    <div class="register-link">
      <a @click="onJump" href="javascript:void(0)" style="color: orangered; font-weight: bold">没有账户？先去注册</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        username: "",
        password: ""
      }
    },
    methods: {
      onSubmit(form) {
        console.log(form);
        this.$router.replace("/home");
      },

      onReset() {
        this.username = "";
        this.password = "";
      },

      onJump() {
        this.$router.push("/register")
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

  .register-link {
    margin-top: 10px;
    text-align: center;
  }

</style>
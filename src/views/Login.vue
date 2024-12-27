<template>
  <div class="body">
    <el-form ref="loginForm" :model="loginForm" :rules="rules" @keyup.enter.native="login()" class="login-box"
      status-icon>
      <h3 class="login-title">仓库管理员登录</h3>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" prefix-icon="el-icon-user" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" show-password prefix-icon="el-icon-lock" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" @click="login()" type="primary" icon="el-icon-s-promotion">登录</el-button>
        <el-button class="login-btn" @click="reset()" type="primary" plain icon="el-icon-refresh-right">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js';
import { postRequest } from "@/utils/api";
import { setToken } from '@/utils/token'

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "账号不能为空", trigger: "blur" }],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
      }
    };
  },
  mounted() {
    this.refreshCaptcha();
  },
  methods: {
    login() {
      this.$refs["loginForm"].validate(async (valid) => {
        if (!valid) {
          return false
        }
        const res = await postRequest('/login', {
          username: this.loginForm.username,
          password: CryptoJS.SHA256(this.loginForm.password).toString()
        })
        if (res.data.code === 0) {
          const token = res.data.data
          setToken(token)
          this.$message.success(res.data.message)
          this.$router.replace("/home")
        } else {
          this.$message.error(res.data.message)
        }
      });
    },
    reset() {
      this.loginForm.username = "";
      this.loginForm.password = "";
    }
  }
};
</script>

<style>
.body {
  width: 100%;
  height: 100%;
  background: url(../assets/bg.png) no-repeat;
  background-size: cover;
  position: fixed;
}

.login-box {
  border: 1px solid #dcdfe6;
  width: 300px;
  margin: 100px auto;
  padding: 35px 30px 15px 30px;
  border-radius: 10px;
  box-shadow: 0 0 25px #909399;
}

.login-title {
  text-align: center;
  font-size: 20px;
  margin: 0 auto 40px auto;
  color: #00aaff;
}

.login-btn {
  width: 45%;
  border-radius: 5px;
}

</style>
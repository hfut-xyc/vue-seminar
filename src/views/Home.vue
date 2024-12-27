<template>
  <el-container>
    <el-aside width="220px">
      <el-menu router :default-active="this.$route.path" text-color="#fff" active-text-color="#ffd04b"
      background-color="rgb(48,65,86)">
        <h3 class="logo">仓库信息管理系统</h3>
        <el-menu-item index="/home/warehouse">
          <i class="el-icon-s-home"></i>仓库管理
        </el-menu-item>
        <el-menu-item index="/home/product">
          <i class="el-icon-coin"></i>产品管理
        </el-menu-item>
        <el-menu-item index="/home/user">
          <i class="el-icon-user"></i>用户管理
        </el-menu-item>
        <el-menu-item index="/home/order">
          <i class="el-icon-money"></i>订单列表
        </el-menu-item>
        <el-menu-item index="/home/chart">
          <i class="el-icon-data-line"></i>数据统计
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header height="60px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item v-text="this.$route.name"></el-breadcrumb-item>
        </el-breadcrumb>
        <el-dropdown @command="logout">
          <div>
            <el-avatar src="" style="margin-right: 5px"></el-avatar>
            <label style="font-weight: bold">{{
              this.$store.state.currentUser
            }}</label>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <i class="el-icon-delete"></i>退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <!-- show components here-->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import {removeToken} from '@/utils/token'

export default {
  name: "Home",
  methods: {
    logout() {
      removeToken()
      this.$router.replace("/login");
      this.$message.success("注销成功");
      console.log("test");
      
      // let that = this;
      // this.$axios
      //   .get("/logout")
      //   .then((res) => {
      //     if (res.data === "success") {
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     that.$message.error("注销失败");
      //   });
    },
  },
};
</script>

<style>
.el-aside {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
}

.el-aside::-webkit-scrollbar {
  display: none;
}

.el-menu {
  height: 100vh;
}

.logo {
  color: white;
  text-align: center;
}

.el-header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ededed;
}

.el-dropdown {
  cursor: pointer;
  margin-left: auto;
}

</style>
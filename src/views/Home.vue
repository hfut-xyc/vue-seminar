<template>
  <div>
    <div class="nav-bar">
      <span class="title">报告汇</span>
    </div>
    <router-view></router-view>
    <div style="height: 3rem;"></div>
    <van-tabbar v-model="active" route active-color="red" inactive-color="grey">
      <van-tabbar-item to="/home/index" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/home/category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/home/notice" icon="bell">消息</van-tabbar-item>
      <van-tabbar-item to="/home/mine" icon="friends">我的</van-tabbar-item>
    </van-tabbar>
  </div>

</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        active: 0
      }
    },
    created() {
      this.$store.dispatch('user/info').then(() => {
        console.log('userinfo success')
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    align-items: center;
    padding: 15px 10px;
    background-color: #e60001;
    font-size: large;
    font-weight: bold;
    color: white;
  }

  .title {
    margin-left: 5px;
  }
</style>
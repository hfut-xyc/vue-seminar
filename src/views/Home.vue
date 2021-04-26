<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active" route active-color="red" inactive-color="grey" >
      <van-tabbar-item to="/home/index" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/home/category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/home/notify" icon="bell" badge="66">消息</van-tabbar-item>
      <van-tabbar-item to="/home/profile" icon="friends">我的</van-tabbar-item>
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
    }
  }
</script>

<style scoped>

</style>
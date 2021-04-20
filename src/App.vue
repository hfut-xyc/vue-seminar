<template>
  <div>
    <div class="nav-bar"><van-icon name="search" />报告汇</div>
    <router-view/>
    <van-tabbar v-model="active" route active-color="red" inactive-color="grey" >
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/recommend" icon="aim">推荐</van-tabbar-item>
      <van-tabbar-item to="/sort" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/user" icon="friends">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss">
  .nav-bar {
    display: flex;
    align-items: center;
    padding: 15px 10px 15px;
    background-color: #e60001;
    font-size: large;
    font-weight: bold;
    color: white;
  }
</style>

<script>

  export default {
    name: 'App',
    data() {
      return {
        active: 0
      }
    }
  }
</script>
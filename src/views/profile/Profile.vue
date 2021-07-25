<template>
  <div>
    <div class="user-info">
      <img class="avatar" :src="avatar" alt="404"/>
      <span class="username">{{username}}</span>
      <van-tag class="uid" type="danger" round size="large">UID: {{id}}</van-tag>
    </div>
    <van-grid clickable :column-num="3">
      <van-grid-item icon="star-o" text="报告收藏" to="/fav/report"/>
      <van-grid-item icon="location-o" text="城市关注" to="/fav/city"/>
      <van-grid-item icon="flag-o" text="学科关注" to="/fav/subject"/>
    </van-grid>
    <van-cell-group>
      <van-cell title="设置" size="large" icon="setting" is-link/>
      <van-cell title="关于" size="large" icon="info" is-link/>
      <van-cell title="退出登录" size="large" icon="delete" @click="doLogout" is-link/>
    </van-cell-group>
  </div>
</template>

<script>
  import { Dialog } from 'vant';

  export default {
    name: "Profile",
    data() {
      return {
        id: this.$store.getters.id,
        username: this.$store.getters.name,
        avatar: require("../../assets/logo.png")
      }
    },
    methods: {
      doLogout() {
        Dialog.confirm({
          title: '提示',
          message: '是否退出登录'
        }).then(() => {
          // on confirm
          this.$store.dispatch('user/logout').then(res => {
            console.log(res)
            this.$router.replace("/login")
          }).catch(err => {
            console.log(err)
          })
        }).catch(() => {
          // on cancel
        });
      }
    }
  }
</script>

<style scoped>
  .user-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
    margin-left: 15px;
    margin-bottom: 20px;
  }

  .avatar {
    border: 1px solid #aaaaaa;
    border-radius: 50%;
    height: 60px;
    width: 60px;
  }

  .username {
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
  }

  .uid {
    margin-left: 10px;
  }
</style>
<template>
  <div>
    <div class="user-info">
      <img class="avatar" :src="avatar" alt="404"/>
      <span class="username">{{username}}</span>
      <van-tag class="uid" type="danger" round size="large">UID: {{id}}</van-tag>
    </div>
    <van-cell-group>
      <van-cell title="关注城市" to="/fav/city" is-link size="large" icon="location-o" />
      <van-cell title="关注学科" to="/fav/subject" is-link size="large" icon="aim" />
      <van-cell title="收藏报告" to="/fav/report" is-link size="large" icon="star-o" />
      <van-cell title="设置" center is-link size="large" icon="setting-o"/>
      <van-cell title="注销" center is-link size="large" icon="delete-o"/>
      <van-cell title="关于" center is-link size="large" icon="info-o"/>
    </van-cell-group>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    data() {
      return {
        id: "1000",
        username: "测试用户",
        avatar: "/avatar.png"
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
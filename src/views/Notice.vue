<template>
  <div>
    <van-notice-bar left-icon="volume-o" text="本功能尚在开发中，均为演示数据"/>
    <message v-for="item in messageList" :key="item.id" :message="item"/>
  </div>
</template>

<script>
  import Message from "../components/Message";

  export default {
    name: "Notify",
    components: {
      "message": Message
    },
    data() {
      return {
        keyword: "",
        messageList: [
          {
            id: 1,
            icon: require("@/assets/logo.png"),
            title: "系统通知",
            detail: "您收藏的报告即将开始",
            time: "05-09"
          },
          {
            id: 2,
            icon: require("@/assets/logo.png"),
            title: "系统通知",
            detail: "您关注的学科有新的报告",
            time: "05-11"
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
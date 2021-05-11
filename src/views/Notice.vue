<template>
  <div>
    <van-search v-model="keyword" placeholder="请输入搜索关键词"/>
    <van-notice-bar left-icon="volume-o" text="您有3条新的消息"/>
    <message v-for="item in messageList" :message="item"/>
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
            icon: "/icon1.png",
            title: "系统通知",
            detail: "您收藏的报告即将开始",
            time: "05-09"
          },
          {
            icon: "/icon2.png",
            title: "系统通知",
            detail: "您关注的城市有新的报告",
            time: "05-10"
          },
          {
            icon: "/icon3.png",
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
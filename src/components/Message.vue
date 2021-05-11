<template>
  <div class="message-container">
    <img class="message-icon" :src="message.icon">
    <div class="message-title-detail">
      <div class="message-title">{{message.title}}</div>
      <div class="message-detail">{{message.detail}}</div>
    </div>
    <div class="message-time">{{message.time}}</div>
  </div>
</template>

<script>
  export default {
    name: "Message",
    props: {
      message: Object
    }
  }
</script>

<style scoped>
  .message-container {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ededed;
    padding: 10px 8px;
  }

  .message-icon {
    height: 50px;
    width: 50px;
    border: 1px solid #cccccc;
    border-radius: 50%;
  }

  .message-title-detail {
    margin-left: 10px;
  }

  .message-title {
    font-weight: bold;
    font-size: 15px;
  }

  .message-detail {
    color: #787878;
    font-size: 12px;
  }

  .message-time {
    margin-left: auto;
    font-size: 13px;
  }
</style>
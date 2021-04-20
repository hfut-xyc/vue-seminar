<template>
  <div class="report-container">
    <div class="report-title">{{content.title}}</div>
    <div class="report-info"><van-icon name="manager"/>汇报人：{{content.speaker}}</div>
    <div class="report-info"><van-icon name="clock"/>时间：{{content.time}}</div>
    <div class="report-info"><van-icon name="location"/>地点：{{content.location}}</div>
    <div class="action-container">
      <div class="action-item"><van-icon name="star-o" color="orange" size="22px"/>收藏</div>
      <div class="action-item"><van-icon name="share-o" color="#ff0e00" size="22px"/>分享</div>
      <div class="action-item"><van-icon name="eye-o" color="#00a2ff" size="22px"/>浏览量：{{content.view}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Report",
    props: ['content']
  }
</script>

<style scoped>
  .report-container {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    border-bottom: 2px solid #ededed;
  }

  .report-title {
    display: flex;
    font-size: 16px;
    font-weight: bolder;
    margin-left: 15px;
    margin-bottom: 8px;
    color: #ef3e34;
  }

  .report-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 15px;
    margin-left: 15px;
    margin-bottom: 10px;
  }

  .action-container {
    display: flex;
    flex-direction: row;
    margin-left: 15px;
    margin-bottom: 10px;
  }

  .action-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 20px;
    color: #818081;
  }
</style>
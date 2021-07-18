<template>
  <div class="report-container">
    <div class="report-title">{{report.title}}</div>
<!--    -->
    <div class="report-key-value">
      <van-icon name="chat-o" color="red"/>
      <span class="report-key">汇报人：</span>
      <span>{{report.speaker}}</span>
    </div>
    <div class="report-key-value">
      <van-icon name="clock-o" color="red"/>
      <span class="report-key">时间：</span>
      <span>{{report.time}}</span>
    </div>
    <div class="report-key-value">
      <van-icon name="location-o" color="red"/>
      <span class="report-key">地点：</span>
      <span>{{report.location}}</span>
    </div>
<!--    -->
    <div class="report-action">
      <div class="action-item">
        <van-icon name="star-o" color="orange" size="22px" />
        <span>收藏量：--</span>
      </div>
      <div class="action-item">
        <van-icon name="eye-o" color="#409eff" size="22px"/>
        <span>浏览量：--</span>
      </div>
      <div class="action-item">
        <van-icon name="share-o" color="#ff0e00" size="22px"/>
        <span>分享</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Report",
    props: {
      report: Object
    },
    data() {
      return {

      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style scoped>
  .report-container {
    display: flex;
    flex-direction: column;
    margin: 10px 8px;
    padding: 10px;
    border: 1px solid #ededed;
    border-radius: 10px;
    box-shadow: 1px 1px 1px #cccccc;
    background-color: white;
  }

  .report-title {
    display: flex;
    font-size: 16px;
    font-weight: bolder;
    margin-bottom: 8px;
    color: #e00600;
  }

  .report-key-value {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 15px;
    margin-bottom: 10px;
    flex-wrap: wrap;
  }

  .report-key {
    font-weight: bold;
    margin-left: 3px;
  }

  .report-action {
    display: flex;
    flex-direction: row;
  }

  .action-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 20px;
    color: #818081;
  }
</style>
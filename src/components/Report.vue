<template>
  <div class="report-container">
    <div class="report-title">{{report.title}}</div>
    <div class="report-info">
      <van-icon name="manager"/>
      <span>汇报人：{{report.speaker}}</span></div>
    <div class="report-info">
      <van-icon name="clock"/>
      <span>时间：{{report.time}}</span></div>
    <div class="report-info">
      <van-icon name="location"/>
      <span>地点：{{report.location}}</span></div>
    <div class="action-container">
      <div class="action-item" v-if="star">
        <van-icon name="star" color="orange" size="22px" @click="starReport"/>
        <span>取消收藏</span>
      </div>
      <div class="action-item" v-else>
        <van-icon name="star-o" color="orange" size="22px" @click="starReport"/>
        <span>收藏</span>
      </div>
      <div class="action-item">
        <van-icon name="share-o" color="#ff0e00" size="22px"/>
        <span>分享</span></div>
      <div class="action-item">
        <van-icon name="eye-o" color="#00a2ff" size="22px"/>
        <span>浏览量：--</span>
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
        star: false
      }
    },
    mounted() {
      this.$axios.get("/user/1/report/" + this.report.id)
      .then(res => {
        this.star = res.data.data !== null
      })
    },
    methods: {
      starReport() {
        this.star = !this.star;
        if (this.star) {
          this.$axios.post("/user/1/report/fav?rid=" + this.report.id).then(res => {
            this.$toast.success(res.data.message)
          })
        } else {
          this.$axios.delete("/user/1/report/fav?rid=" + this.report.id).then(res => {
            this.$toast.success(res.data.message)
          })
        }
      }
    }
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
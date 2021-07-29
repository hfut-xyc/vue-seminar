<template>
  <div class="report-container">
    <div class="report-title">{{title}}</div>
    <div class="report-key-value">
      <van-icon name="chat-o" color="red"/>
      <span class="report-key">汇报人：</span>
      <span>{{speaker}}</span>
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
    <div class="report-action-container">
      <div class="report-action">
        <van-icon name="eye-o" color="#409eff" size="22px"/>
        <span>浏览量：{{report.view}}</span>
      </div>
      <div class="report-action">
        <van-icon name="share-o" color="#ff0e00" size="22px"/>
        <span>分享</span>
      </div>
      <div class="report-more">
        <van-popover
          v-model="showPopover"
          :actions="actions"
          @open="onOpen"
          @select="onSelect"
          theme="dark"
          trigger="click"
          placement="left-start"
        >
          <template #reference>
            <van-icon name="weapp-nav" color="#676767" size="20px"/>
          </template>
        </van-popover>
      </div>
    </div>
  </div>
</template>

<script>
  import {getRequest, postRequest, deleteRequest} from "@/utils/request";

  export default {
    name: "Report",
    props: {
      report: Object
    },
    data() {
      return {
        showPopover: false,
        isCollected: false,
        action1: [{text: '收藏', icon: 'star-o'}],
        action2: [{text: '取消收藏', icon: 'star'}],
        id: this.$store.getters.id
      }
    },
    computed: {
      title: function () {
        const title = this.report.title
        return title.length > 40 ? title.slice(0, 40).concat('...') : title
      },
      speaker: function () {
        const speaker = this.report.speaker
        return speaker.length > 15 ? speaker.slice(0, 15).concat('...') : speaker
      },
      actions: function () {
        return this.isCollected ? this.action2 : this.action1
      }
    },
    methods: {
      onOpen() {
        getRequest(`/user/${this.id}/report/collect?rid=${this.report.id}`).then(res => {
          this.isCollected = res.data.data
        }).catch(err => {
          console.log(err)
        })
      },
      onSelect(action) {
        if (action.text === "收藏") {
          postRequest(`/user/${this.id}/report/fav?rid=${this.report.id}`).then(res => {
            this.$toast(res.data.message)
          }).catch(err => {
            this.$toast.fail("请求异常")
          })
        } else {
          deleteRequest(`/user/${this.id}/report/fav?rid=${this.report.id}`).then(res => {
            this.$toast(res.data.message)
          }).catch(err => {
            this.$toast.fail("请求异常")
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
    margin: 10px 8px;
    padding: 10px;
    border: 1px solid #ededed;
    border-radius: 10px;
    box-shadow: 1px 1px 1px #cccccc;
    background-color: white;
  }

  .report-container:active {
    opacity: 0.8;
    background: #e8e8e8;
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
    /*flex-wrap: wrap;*/
  }

  .report-key {
    font-weight: bold;
    margin-left: 3px;
  }

  .report-action-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .report-action {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 20px;
    color: #818181;
  }

  .report-more {
    margin-left: auto;
    margin-right: 10px;
  }
</style>
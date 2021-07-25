<template>
  <div>
    <van-nav-bar :title="title" @click-left="onClickLeft" left-text="返回" left-arrow />
    <report v-for="item in reportList" :key="item.id" :report="item" />
  </div>
</template>

<script>
  import Report from "../../components/Report"
  import {getRequest} from '@/utils/request'

  export default {
    name: "City",
    components: {
      "report": Report
    },
    data() {
      return {
        reportList: [],
        cid: this.$route.params.id,
        title: this.$route.query.name
      }
    },
    mounted() {
      getRequest(`/report/list?cid=${this.cid}`).then(res => {
        this.reportList = res.data.data;
        this.$toast(res.data.message)
      }).catch(err => {
        this.$toast.fail("请求异常")
      })
    },

    methods: {
      onClickLeft() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>

</style>
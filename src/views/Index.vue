<template>
  <div class="container">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <report v-for="item in reportList" :key="item.id" :report="item"/>
    </van-pull-refresh>
  </div>
</template>

<script>
  import Report from "../components/Report";

  export default {
    name: 'Index',
    components: {
      "report": Report
    },
    data() {
      return {
        isLoading: false,
        reportList: []
      }
    },

    mounted() {
      this.getReportList(false);
    },

    methods: {
      getReportList(refresh) {
        this.$axios.get("/report/list").then(res => {
          if (refresh) {
            this.shuffle(res.data.data)
          }
          this.reportList = res.data.data;
          this.$toast(res.data.message)
        }).catch(err => {
          this.$toast.fail("请求已超时")
        })
      },

      onRefresh() {
        this.getReportList(true);
        this.isLoading = false;
      },

      shuffle(array) {
        let len = array.length
        while (len) {
          let cur = Math.floor(Math.random() * len--);
          let pre = array[len];
          array[len] = array[cur];
          array[cur] = pre;
        }
      }
    }
  }
</script>

<style>
  .container {
    background-color: #ededed;
  }
</style>

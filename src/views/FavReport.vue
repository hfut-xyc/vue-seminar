<template>
  <div>
    <van-nav-bar title="我的收藏" @click-left="onClickLeft" left-text="返回" left-arrow />
    <report v-for="item in reportList" :key="item.id" :report="item"/>
  </div>
</template>

<script>
  import Report from "../components/Report";

  export default {
    name: "FavReport",
    components: {
      "report": Report
    },
    data() {
      return {
        reportList: []
      }
    },
    mounted() {
      this.getReportList();
    },

    methods: {
      getReportList() {
        this.$axios.get("/user/1/report/fav").then(res => {
          console.log(res)
          this.reportList = res.data.data;
          this.$toast(res.data.message)
        }).catch(err => {

        })
      },
      onClickLeft() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>


</style>
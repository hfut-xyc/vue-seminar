<template>
  <div>
    <van-nav-bar title="我的收藏" @click-left="onClickLeft" left-text="返回" left-arrow />
    <report v-for="item in favList" :key="item.id" :report="item" :star="true"/>
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
        favList: []
      }
    },
    mounted() {
      this.getFavReportList();
    },

    methods: {
      getFavReportList() {
        this.$axios.get("/user/1/report/fav").then(res => {
          console.log(res)
          this.favList = res.data.data;
          this.$toast(res.data.message)
        }).catch(err => {
          this.$toast.fail("请求已超时")
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
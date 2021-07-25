<template>
  <div>
    <van-nav-bar title="我的收藏" @click-left="onClickLeft" left-text="返回" left-arrow />
    <report v-for="item in favList" :key="item.id" :report="item" :star="true"/>
  </div>
</template>

<script>
  import Report from "../../components/Report"
  import {getRequest} from '@/utils/request'

  export default {
    name: "FavReport",
    components: {
      "report": Report
    },
    data() {
      return {
        favList: [],
        id: this.$store.getters.id
      }
    },
    mounted() {
      getRequest(`/user/${this.id}/report/fav`).then(res => {
        this.favList = res.data.data;
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
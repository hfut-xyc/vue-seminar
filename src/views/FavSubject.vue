<template>
  <div>
    <van-nav-bar title="我关注的学科" @click-left="onClickLeft" left-text="返回" left-arrow />
  </div>
</template>

<script>
  export default {
    name: "FavSubject",
    data() {
      return {

      }
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
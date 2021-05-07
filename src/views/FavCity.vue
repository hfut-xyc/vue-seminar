<template>
  <div>
    <van-nav-bar title="我关注的城市" @click-left="onClickLeft" left-text="返回" left-arrow />

  </div>
</template>

<script>
  export default {
    name: "FavCity",
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
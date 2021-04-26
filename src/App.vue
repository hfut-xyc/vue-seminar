<template>
  <div>
    <div class="nav-bar"><van-icon name="search" />报告汇</div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  .nav-bar {
    display: flex;
    align-items: center;
    padding: 15px 10px 15px;
    background-color: #e60001;
    font-size: large;
    font-weight: bold;
    color: white;
  }
</style>

<script>

  export default {
    name: 'App',
    data() {
      return {
        active: 0
      }
    }
  }
</script>
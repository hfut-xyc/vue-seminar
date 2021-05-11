<template>
  <div>
    <van-nav-bar title="城市关注" @click-left="onClickLeft" left-text="返回" left-arrow/>
    <van-checkbox-group v-model="favList">
      <van-cell-group>
        <van-cell v-for="item in cityList" :key="item.id" :title="item.name" clickable>
          <template #right-icon>
            <van-checkbox :name="item.id" ref="checkboxes" @click="onToggle(item)" checked-color="red"/>
          </template>
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>
  </div>
</template>

<script>
  export default {
    name: "FavCity",
    data() {
      return {
        cityList: [],
        favList: []
      }
    },

    mounted() {
      this.$axios.get("/city/list").then(res => {
        this.cityList = res.data.data
        this.$toast(res.data.message)
      })
      this.$axios.get("user/1/city/fav").then(res => {
        this.favList = res.data.data
      })
    },

    methods: {
      onClickLeft() {
        this.$router.back()
      },

      onToggle(item) {
        let flag = this.favList.indexOf(item.id)
        if (flag !== -1) {
          this.$axios.post("/user/1/city/fav?cid=" + item.id).then(res => {
            this.$toast(res.data.message)
          })
        } else {
          this.$axios.delete("/user/1/city/fav?cid=" + item.id).then(res => {
            this.$toast(res.data.message)
          })
        }
      }
    }
  }
</script>

<style scoped>
  .city-container {
    display: flex;
    flex-direction: row;
    padding: 20px 10px;
  }
</style>
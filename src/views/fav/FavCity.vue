<template>
  <div>
    <van-nav-bar title="我关注的城市" @click-left="onClickLeft" left-text="返回" left-arrow/>
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
  import {getRequest, postRequest, deleteRequest} from '@/utils/request'

  export default {
    name: "FavCity",
    data() {
      return {
        cityList: [],
        favList: [],
        id: this.$store.getters.id
      }
    },

    mounted() {
      getRequest("/city/list").then(res => {
        this.cityList = res.data.data
        this.$toast(res.data.message)
      }).catch(err => {
        this.$toast.fail("请求异常")
      })

      getRequest(`/user/${this.id}/city/fav`).then(res => {
        this.favList = res.data.data
      }).catch(err => {
        this.$toast.fail("请求异常")
      })
    },

    methods: {
      onToggle(item) {
        let flag = this.favList.indexOf(item.id)
        let url = `/user/${this.id}/city/fav?cid=${item.id}`
        if (flag !== -1) {
          postRequest(url).then(res => {
            this.$toast(res.data.message)
          })
        } else {
          deleteRequest(url).then(res => {
            this.$toast(res.data.message)
          })
        }
      },

      onClickLeft() {
        this.$router.back()
      },
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
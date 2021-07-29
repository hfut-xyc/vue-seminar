<template>
  <div>
    <van-tabs v-model="activeTab">
      <van-tab title="城市导航">
        <van-index-bar>
          <van-cell v-for="item in cityList" :key="item.id" :title="item.name" @click="onCityClick(item)" is-link />
        </van-index-bar>
      </van-tab>
      <van-tab title="学科分类">
        <van-collapse v-model="activePanel">
          <van-collapse-item
            v-for="parent in subjectList"
            :key="parent.id"
            :name="parent.id"
            :title="parent.name"
            icon="bars"
          >
            <van-cell
              v-for="child in parent.children"
              :key="child.id"
              :title="child.name"
              @click="onSubjectClick(child)"
              is-link icon="award-o"
            />
          </van-collapse-item>
        </van-collapse>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import {getRequest} from '@/utils/request'

  export default {
    name: "Category",
    data() {
      return {
        activeTab: 0,
        activePanel: ["0", "1"],
        cityList: [],
        subjectList: []
      }
    },
    mounted() {
      getRequest("/city/list").then(res => {
        this.cityList = res.data.data
      }).catch(err => {
        this.$toast.fail("请求异常")
      })

      getRequest("/subject/list").then(res => {
        this.subjectList = res.data.data
      }).catch(err => {
        this.$toast.fail("请求异常")
      })
    },
    methods: {
      onCityClick(item) {
        this.$router.push({
          path: `/city/${item.id}`,
          query: {name: item.name}
        })
      },

      onSubjectClick(item) {
        this.$router.push({
          path: `/subject/${item.id}`,
          query: {name: item.name}
        })
      }
    }
  }
</script>

<style scoped>

</style>
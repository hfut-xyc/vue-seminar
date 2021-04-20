<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="城市导航">
        <van-index-bar highlight-color="blue">
          <van-index-anchor index="B"/>
          <van-cell title="北京"/>
          <van-index-anchor index="C"/>
          <van-cell title="成都"/>
          <van-cell title="重庆"/>
          <van-index-anchor index="D"/>
          <van-cell title="大连"/>
          <van-index-anchor index="F"/>
          <van-cell title="福州"/>
          <van-index-anchor index="G"/>
          <van-cell title="广州"/>
          <van-index-anchor index="H"/>
          <van-cell title="哈尔滨"/>
          <van-cell title="杭州"/>
          <van-cell title="合肥"/>

        </van-index-bar>
      </van-tab>
      <van-tab title="学科分类">
        <van-collapse v-model="activeCategory">
          <van-collapse-item title="人工智能" name="0">
            <van-grid :gutter="10">
              <van-grid-item icon="photo-o" text="机器学习"/>
              <van-grid-item icon="photo-o" text="数据挖掘"/>
              <van-grid-item icon="photo-o" text="计算机视觉"/>
              <van-grid-item icon="photo-o" text="信息检索"/>
            </van-grid>
          </van-collapse-item>
          <van-collapse-item title="计算机系统" name="1">
            <van-grid :gutter="10">
              <van-grid-item icon="photo-o" text="计算机体系结构"/>
              <van-grid-item icon="photo-o" text="计算机网络"/>
              <van-grid-item icon="photo-o" text="数据库"/>
              <van-grid-item icon="photo-o" text="操作系统"/>
              <van-grid-item icon="photo-o" text="嵌入式系统"/>
              <van-grid-item icon="photo-o" text="软件工程"/>
            </van-grid>
          </van-collapse-item>
          <van-collapse-item title="交叉领域" name="2">
            <van-grid :gutter="10">
              <van-grid-item icon="photo-o" text="计算机图形学"/>
              <van-grid-item icon="photo-o" text="计算生物学"/>
            </van-grid>
          </van-collapse-item>
        </van-collapse>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  export default {
    name: "Sort",
    data() {
      return {
        active: 0,
        activeCategory: ['0'],
        cities: [
          {
            text: '直辖市', children: [
              {
                text: '北京',
                id: 0
              },
              {
                text: '上海',
                id: 1
              },
              {
                text: '天津',
                id: 2
              },
              {
                text: '重庆',
                id: 3
              }]
          },
          {
            text: '安徽省', children: [
              {
                text: '合肥',
                id: 0
              },
              {
                text: '芜湖',
                id: 1
              }]
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="城市导航">
        <van-index-bar>
          <van-index-anchor index="B"/>
          <van-cell title="北京"/>
          <van-index-anchor index="C"/>
          <van-cell title="成都"/>
          <van-cell title="重庆"/>
          <van-cell title="长沙"/>
          <van-cell title="长春"/>
          <van-index-anchor index="D"/>
          <van-cell title="大连"/>
          <van-index-anchor index="F"/>
          <van-cell title="福州"/>
          <van-index-anchor index="G"/>
          <van-cell title="广州"/>
          <van-cell title="桂林"/>
          <van-index-anchor index="H"/>
          <van-cell title="哈尔滨"/>
          <van-cell title="杭州"/>
          <van-cell title="合肥"/>
          <van-index-anchor index="J"/>
          <van-cell title="济南"/>
          <van-index-anchor index="K"/>
          <van-cell title="昆明"/>
          <van-index-anchor index="N"/>
          <van-cell title="南京"/>
          <van-cell title="南昌"/>
          <van-index-anchor index="S"/>
          <van-cell title="上海"/>
          <van-cell title="深圳"/>
          <van-cell title="苏州"/>
          <van-index-anchor index="T"/>
          <van-cell title="天津"/>
          <van-cell title="太原"/>
          <van-index-anchor index="W"/>
          <van-cell title="武汉"/>
          <van-cell title="无锡"/>
          <van-cell title="威海"/>
          <van-index-anchor index="X"/>
          <van-cell title="西安"/>
          <van-cell title="厦门"/>
        </van-index-bar>
      </van-tab>
      <van-tab title="学科分类">
        <van-collapse v-model="activeCategory">
          <van-collapse-item title="人工智能" name="0">
            <van-grid :gutter="10">
              <van-grid-item icon="photo-o" text="机器学习"/>
              <van-grid-item icon="photo-o" text="数据挖掘"/>
              <van-grid-item icon="photo-o" text="计算机视觉"/>
              <van-grid-item icon="photo-o" text="自然语言处理"/>
            </van-grid>
          </van-collapse-item>
          <van-collapse-item title="计算机系统" name="1">
            <van-grid :gutter="10">
              <van-grid-item icon="photo-o" text="计算机体系结构"/>
              <van-grid-item icon="photo-o" text="操作系统"/>
              <van-grid-item icon="photo-o" text="计算机网络"/>
              <van-grid-item icon="photo-o" text="数据库"/>
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
      }
    }
  }
</script>

<style scoped>

</style>
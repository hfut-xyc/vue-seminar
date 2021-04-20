<template>
  <div>
    <report v-for="item in reportList" v-bind:content="item"/>
  </div>
</template>

<script>

  import Report from "../components/Report";
  export default {
    name: 'Home',
    components: {Report},
    data() {
      return {
        reportList: [
          {
            "title": "基于生成对抗网络的目标分割",
            "speaker": "李四教授",
            "time": "2021-04-30 14:00-16:00",
            "location": "中国科大东校区报告厅",
            "view": 200
          },
          {
            "title": "基于卷积神经网络的目标检测",
            "speaker": "张三教授",
            "time": "2021-04-30 14:00-16:00",
            "location": "合肥工业大学屯溪路校区报告厅",
            "view": 300
          },
          {
            "title": "基于卷积神经网络的目标检测",
            "speaker": "张三教授",
            "time": "2021-04-30 14:00-16:00",
            "location": "合肥工业大学屯溪路校区报告厅",
            "view": 300
          },
          {
            "title": "基于生成对抗网络的目标分割",
            "speaker": "李四教授",
            "time": "2021-04-30 14:00-16:00",
            "location": "中国科大东校区报告厅",
            "view": 200
          }
        ]
      }
    }
  }
</script>

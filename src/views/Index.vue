<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <report v-for="item in reportList" :key="item.id" v-bind:content="item"/>
    </van-pull-refresh>
  </div>
</template>

<script>
  import Report from "../components/Report";
  import Toast from "vant/lib/toast";

  export default {
    name: 'Index',
    components: {
      "report": Report
    },
    methods: {
      onRefresh() {
        this.isLoading = true;
        Toast('刷新成功');
        this.isLoading = false;
      }
    },
    data() {
      return {
        isLoading: false,
        reportList: [
          {
            "id": 1,
            "title": "基于生成对抗网络的目标分割",
            "speaker": "李四教授",
            "time": "2021-04-30 14:00-16:00",
            "location": "中国科大东校区报告厅",
            "view": 200
          },
          {
            "id": 2,
            "title": "基于卷积神经网络的目标检测",
            "speaker": "张三教授",
            "time": "2021-04-30 14:00-16:00",
            "location": "合肥工业大学屯溪路校区报告厅",
            "view": 300
          },
          {
            "id": 3,
            "title": "基于卷积神经网络的目标检测",
            "speaker": "张三教授",
            "time": "2021-04-30 14:00-16:00",
            "location": "合肥工业大学屯溪路校区报告厅",
            "view": 300
          }
        ]
      }
    }
  }
</script>

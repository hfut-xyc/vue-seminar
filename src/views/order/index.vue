<template>
  <el-container>
    <div>
      <el-date-picker v-model="date" value-format="yyyy-MM-dd" placeholder="请选择订单日期"></el-date-picker>
      <el-button @click="searchOrder()" type="primary" icon="el-icon-search">按订单日期查询</el-button>
      <el-button @click="isDialogVisible = true" type="success" icon="el-icon-plus" plain>创建订单</el-button>
    </div>

    <el-table :data="orderList" v-loading="loading" stripe>
      <el-table-column prop="id" label="订单编号" sortable fixed></el-table-column>
      <el-table-column prop="eid" label="操作用户" sortable width="120"></el-table-column>
      <el-table-column prop="wid" label="仓库编号" sortable></el-table-column>
      <el-table-column prop="pid" label="产品编号" sortable></el-table-column>
      <el-table-column prop="amount" label="订单数量" sortable></el-table-column>
      <el-table-column prop="createTime" label="创建时间" sortable width="100"></el-table-column>
      <el-table-column label="操作" width="150" >
        <template slot-scope="scope">
          <el-button @click="deleteOrder(scope.row)" size="mini" icon="el-icon-delete" type="danger" plain>删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-footer>
      <el-pagination layout="total, sizes, prev, pager, next, jumper" background style="margin-top: 10px;" :total="total"
        :current-page="page"></el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
import { getRequest, postRequest, deleteRequest } from "@/utils/api"

export default {
  name: "OrderList",
  data() {
    return {
      orderList: [],
      total: 0,     // 查询到的订单总数
      page: 1,      // 当前页码
      date: '',
      loading: false,
      isDialogVisible: false, 
    }
  },

  mounted() {
    this.loadOrderList("/order/list")
  },

  methods: {
    /**
     * 加载仓库列表
     */
    async loadOrderList(url) {
      const res = await getRequest(url)
      console.log(res)
      this.loading = true
      if (res.data.code === 0) {
        this.total = res.data.data.total
        this.orderList = res.data.data.orderList
        this.$message.success(res.data.message)
      } else {
        this.$message.error(res.data.message)
      }
      this.loading = false
    },

    searchOrder() {
      if (this.date === "") {
        this.$message.warning("请输入查询区间")
      } else {
        let url = `/order/list?page=${this.page}&date=${this.date}`
        this.loadOrderList(url)
      }
    },

    onPageChange(val) {
      this.page = val;
      let url = `/order/list?page=${this.page}&pageSize${this.pageSize}`
      if (this.date.length !== 0) {
        url += "&date=${this.date}";
      }
      this.loadOrderList(url);
    },

    deleteOrder(row) {
      this.$confirm("是否删除该订单", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        let that = this;
        let url = "/order/" + row.id;
        this.$axios.post(url, {}).then(res => {
          if (res.status === 200) {
            if (res.data === 1) {
              that.$message.success("订单删除成功");
              that.loadOrderList("/order/list?page=" + this.page + "&pageSize=" + this.pageSize);
            } else {
              that.$message.warning("订单删除失败");
            }
          }
        }).catch(err => {
          console.log(err);
          that.$message.error("服务器异常");
        });
      });
    },
  }
}
</script>

<style scoped>

</style>
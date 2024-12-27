<template>
  <el-container>
    <div>
      <el-input v-model="keyword" placeholder="按产品名搜索" prefix-icon="el-icon-search"></el-input>
      <el-button @click="searchProduct()" type="primary" icon="el-icon-search">查询</el-button>
    </div>

    <el-table :data="productList" v-loading="loading" stripe border>
      <el-table-column type="expand">
        <template slot-scope="scope">
          <el-table :data="scope.row.warehouseList" stripe style="margin-left: 50px">
            <el-table-column prop="id" label="仓库ID" width="200" sortable ></el-table-column>
            <el-table-column prop="name" label="仓库名" width="200"></el-table-column>
            <el-table-column prop="count" label="存放数量" width="100"></el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="产品编号" sortable></el-table-column>
      <el-table-column prop="name" label="产品名"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="updateRow(scope.row)" size="mini" icon="el-icon-edit">修改</el-button>
          <el-button @click="deleteRow(scope.row)" size="mini" icon="el-icon-delete" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-footer>
      <el-pagination layout="total, sizes, prev, pager, next, jumper" background style="margin-top: 10px;" :total="total"
        :current-page="page" :page-size="pageSize" @current-change="onPageChange"></el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
import {getRequest, postRequest, deleteRequest} from "@/utils/api"

export default {
  name: "Product",
  data() {
    return {
      productList: [],
      total: 0,     // 查询到的产品总数
      page: 1,      // 当前页码
      pageSize: 10, // 当前页面大小
      keyword: "",
      loading: true,
      isDialogVisible: false, 
    }
  },

  mounted() {
    this.loadProductList("/product/list");
  },

  methods: {
    async loadProductList(url) {
      const res = await getRequest(url)
      // console.log(res)
      this.loading = true
      if (res.data.code === 0) {
        this.total = res.data.data.total
        this.productList = res.data.data.productList
        this.$message.success(res.data.message)
      } else {
        this.$message.error(res.data.message)
      }
      this.loading = false;
    },

    searchProduct() {
      if (this.keyword.trim() === "") {
        this.$message.warning("请输入关键字");
      } else {
        let url = "/products?page=" + this.page + "&pageSize=" + this.pageSize + "&keyword=" + this.keyword.trim();
        this.loadProductList(url);
      }
    },

    onPageChange(val) {
      this.page = val;
      this.loading = true;
      let url = "/products?page=" + this.page + "&pageSize=" + this.pageSize;
      if (this.keyword !== "") {
        url += "&keyword=" + this.keyword.trim();
      }
      this.loadProductList(url);
    },

    onPageSizeChange(val) {
      this.pageSize = val;
      if (this.pageSize * (this.page - 1) >= this.total) {
        this.page = 1;
        this.pageSize = 10;
      }
      this.loading = true;
      let url = "/products?page=" + this.page + "&pageSize=" + this.pageSize;
      if (this.keyword !== "") {
        url += "&keyword=" + this.keyword.trim();
      }
      this.loadProductList(url);
    },
  }
};
</script>

<style>

</style>

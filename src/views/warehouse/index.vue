<template>
  <el-container>
    <div>
      <el-input v-model="keyword" placeholder="按仓库名搜索" prefix-icon="el-icon-search"></el-input>
      <el-button @click="searchWarehouse()" type="primary" icon="el-icon-search">查询</el-button>
      <el-button @click="isDialogVisible = true" type="success" icon="el-icon-plus" plain>添加新仓库</el-button>
    </div>

    <el-table :data="warehouseList" v-loading="loading" stripe border>
      <el-table-column type="expand">
        <template slot-scope="scope">
          <el-table :data="scope.row.productList" stripe style="margin-left: 50px">
            <el-table-column prop="id" label="产品ID" width="200" sortable ></el-table-column>
            <el-table-column prop="name" label="产品名" width="200"></el-table-column>
            <el-table-column prop="count" label="存放数量" width="100"></el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="仓库ID" sortable width="150"></el-table-column>
      <el-table-column prop="name" label="仓库名" width="250"></el-table-column>
      <el-table-column prop="createUserName" label="创建人"  width="100"></el-table-column>
      <el-table-column prop="createTime" label="创建时间" sortable width="110"></el-table-column>
      <el-table-column prop="updateUserName" label="更新人"  width="100"></el-table-column>
      <el-table-column prop="updateTime" label="修改时间" sortable width="110"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="updateRow(scope.row)" size="mini" icon="el-icon-edit">修改</el-button>
          <el-button @click="deleteRow(scope.row)" size="mini" icon="el-icon-delete" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-footer>
      <el-pagination layout="total, sizes, prev, pager, next, jumper" background style="margin-top: 10px;"
        @size-change="onPageSizeChange" @current-change="onPageChange" :page-sizes="[5, 10, 15, 20, 25]"
        :page-size="pageSize" :current-page="page" :total="total"></el-pagination>
    </el-footer>

    <el-dialog title="添加新仓库" :visible.sync="isDialogVisible">
      <el-form ref="addForm" :model="addForm" :rules="rules" status-icon label-width="120px">
        <el-form-item label="仓库名" prop="name">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="addWarehouse()" type="primary">添加</el-button>
        <el-button @click="isDialogVisible = false">取消</el-button>
      </div>
    </el-dialog>

  </el-container>
</template>

<script>
import { getRequest, postRequest, deleteRequest } from "@/utils/api"

export default {
  name: "Warehouse",
  data: function () {
    return {
      total: 0, // 查询到的用户总数
      page: 1, // 当前页码
      pageSize: 10, // 当前页面大小
      keyword: "", // 查询仓库名的关键字
      warehouseList: [], // 获得的查询结果
      loading: true, // 页面表格是否处于加载状态
      isDialogVisible: false,
      addForm: {
        name: ''
      },
      rules: {
        name: [{ required: true, message: "仓库名称不能为空", trigger: "blur" }],
      }

    };
  },
  
  mounted: function () {
    this.loadWarehouseList("/warehouse/list");
  },

  methods: {
    async loadWarehouseList(url) {
      const res = await getRequest(url)
      // console.log(res)
      this.loading = true
      if (res.data.code === 0) {
        this.total = res.data.data.total
        this.warehouseList = res.data.data.warehouseList
        this.$message.success(res.data.message)
      } else {
        this.$message.error(res.data.message)
      }
      this.loading = false;
    },

    searchWarehouse() {
      if (this.keyword.trim() === "") {
        this.$message.warning("请输入关键字");
      } else {
        let url = `/warehouse/list?page=${this.page}&pageSize=${this.pageSize}&keyword=${this.keyword.trim()}`
        this.loadWarehouseList(url);
      }
    },

    onPageChange(val) {
      this.page = val;
      this.loading = true;
      let url = `/warehouse/list?page=${this.page}&pageSize=${this.pageSize}`
      if (this.keyword !== "") {
        url += "&keyword=" + this.keyword.trim();
      }
      this.loadWarehouseList(url);
    },

    onPageSizeChange(val) {
      this.pageSize = val;
      if (this.pageSize * (this.page - 1) >= this.total) {
        this.page = 1;
        this.pageSize = 10;
      }
      let url = `/warehouse/list?page=${this.page}&pageSize=${this.pageSize}`
      if (this.keyword !== "") {
        url += "&keyword=" + this.keyword.trim();
      }
      this.loadWarehouseList(url);
    },

    addWarehouse() {
      this.$refs["addForm"].validate(async valid => {
        if (!valid) {
          return false
        }
        const res = await postRequest('/warehouse', this.addForm)
        if (res.data.code === 0) {
          this.$message.success(res.data.message)
          this.isDialogVisible = false
        } else {
          this.$message.error(res.data.message)
        }
      })
    },
  }
};
</script>

<style>

</style>

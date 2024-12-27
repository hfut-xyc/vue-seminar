<template>
  <el-container>
    <div style="display: flex;">
      <el-input v-model="keyword" placeholder="通过用户名搜索" prefix-icon="el-icon-search"></el-input>
      <el-button @click="searchUser()" type="primary" icon="el-icon-search" >查询</el-button>
      <el-button @click="isDialogVisible = true" type="success" icon="el-icon-plus" plain>添加新用户</el-button>
    </div>

    <el-table :data="userList" v-loading="loading" stripe>
      <el-table-column prop="id" label="用户ID" sortable width="200"></el-table-column>
      <el-table-column prop="username" label="用户名" sortable width="200"></el-table-column>
      <el-table-column prop="role" label="用户角色" width="200">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.role === 1">管理员</el-tag>
          <el-tag type="primary" v-else>普通用户</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" sortable width="100"></el-table-column>
      <el-table-column prop="updateTime" label="修改时间" sortable width="100"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="updateRow(scope.row)" size="mini" icon="el-icon-edit">修改</el-button>
          <el-button @click="deleteRow(scope.row)" size="mini" icon="el-icon-delete" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-footer>
      <el-pagination layout="total, sizes, prev, pager, next, jumper" background style="margin-top: 10px" :total="total"
        :current-page="page" @current-change="onPageChange"></el-pagination>
    </el-footer>

    <!-- 添加用户对话框 -->
    <el-dialog title="创建新用户" :visible.sync="isDialogVisible">
      <el-form ref="addForm" :model="addForm" :rules="rules" status-icon label-width="120px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="addForm.username" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="addForm.password" show-password prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input v-model="addForm.confirmPassword" show-password prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="addUser()" type="primary">添加</el-button>
        <el-button @click="isDialogVisible = false">取消</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
import { getRequest, postRequest, deleteRequest } from "@/utils/api"
// 二次密码校验
const validatorPassword = (rule, value, callback) => {
  if (value === '')
    callback(new Error('请再次输入密码'))
  else if (value !== this.addForm.password)
    callback(new Error('两次输入密码不一致'))
  else
    callback()
}

export default {
  name: "User",
  data() {
    return {
      userList: [], // 获得的查询结果
      total: 0, // 查询到的用户总数
      page: 1, // 当前页码
      keyword: "", // 查询用户名的关键字
      loading: false, // 页面表格是否处于加载状态
      isDialogVisible: false,   // 添加用户的对话框是否可见
      addForm: {    // 添加用户表单
        username: "",
        password: "",
        confirmPassword: "",
      },
      rules: {
        username: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
        confirmPassword: [{ required: true, validator: validatorPassword, trigger: "blur" }],
      }
    }
  },

  mounted: function () {
    this.loadUserList("/user/list")
  },

  methods: {
    async loadUserList(url) {
      const res = await getRequest(url)
      this.loading = true
      if (res.data.code === 0) {
        this.total = res.data.data.total
        this.userList = res.data.data.userList
        this.$message.success(res.data.message)
      } else {
        this.$message.error(res.data.message)
      }
      this.loading = false
    },

    searchUser() {
      if (this.keyword.trim() === "") {
        this.$message.warning("请输入关键字")
      } else {
        let url = `/user/list?page=${this.page}&keyword=${this.keyword.trim()}`
        this.loadUserList(url)
      }
    },

    onPageChange(val) {
      this.page = val
      let url = `/user/list?page=${this.page}`
      if (this.keyword !== "") {
        url += "&keyword=" + this.keyword.trim()
      }
      this.listUser(url)
    },

    addUser() {
      this.$refs["addForm"].validate(valid => {
        if (!valid) {
          return false
        }

        this.$axios.post("/user", {
          username: this.addForm.username,
          password: this.addForm.password,
        }).then(res => {
          if (res.status === 200) {
            if (res.data === 1) {
              this.$message.success("用户添加成功")
              this.isDialogVisible = false
              this.addForm = { username: "", password: "" }
              this.listUser("/user/list")
            } else {
              this.$message.warning("用户添加失败, 用户名可能已存在")
            }
          }
        }).catch(err => {
          if (err.toString().includes("403")) {
            this.$message.error("权限不足，请联系管理员")
          } else {
            this.$message.error("服务器异常")
          }
        })
      })
    },

    deleteRow(row) {
      this.$confirm("是否删除该用户?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {

        this.$axios.delete("/user?" + row.id).then(res => {
          this.$message.success("用户已删除")
          this.loadUserList("/user/list")
        })
      })
    }
  }
}
</script>

<style>

</style>

## 介绍
- 本项目是 2020 年 HFUT-CS 数据库课设的前端部分，后端部分代码位于[warehouse-server](https://github.com/hfut-xyc/warehouse-server)
- 本项目现阶段已停止维护
  
## 项目运行
先确保安装了 [Node.js](https://nodejs.org/en/) 最新版本
```
# npm 换源
npm config set registry https://registry.npmmirror.org

# 安装项目依赖
npm install

# 运行项目
npm run serve
```

## 项目部署
这里只在 Ubuntu 虚拟机上演示如何部署前端项目
```
# 打包项目
npm run build
```
## 技术栈

| 技术       | 说明                         | 官网                              |
| ---------- | ---------------------------- | --------------------------------- |
| Vue        | 前端框架                     | https://cn.vuejs.org/             |
| Vue-Router | 路由框架                     | https://router.vuejs.org/zh/      |
| Vuex       | 全局状态管理框架             | https://vuex.vuejs.org/zh/        |
| Element-ui | 前端UI组件框架               | https://element.eleme.cn          |
| Axios      | AJAX请求框架                 | https://github.com/axios/axios    |
| v-charts   | 基于Echarts的图表框架        | https://v-charts.js.org/          |
| Nginx      | 反向代理服务器，前端部署工具 | http://nginx.org/en/download.html |

## 项目运行界面
### 登录界面
![登录界面](/screenshot/login.png)

### 仓库信息
![仓库信息](/screenshot/warehouse.png)

### 库存清单
![库存清单](/screenshot/inventory.png)

### 订单记录
![订单记录](/screenshot/order-list.png)

### 创建旧产品订单
![创建旧产品订单](/screenshot/order-add-old.png)

### 创建新产品订单
![创建新产品订单](/screenshot/order-add-new.png)

### 订单回收站
![订单回收站](/screenshot/order-dustbin.png)

### 数据统计图
![数据统计图](/screenshot/chart.png)

### 员工列表
![员工列表](/screenshot/employee.png)

### 编辑员工信息
![编辑员工信息](/screenshot/employee-edit.png)

### 后台用户
![后台用户](/screenshot/user.png)


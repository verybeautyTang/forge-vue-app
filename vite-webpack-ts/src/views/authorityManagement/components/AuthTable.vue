<template>
  <!-- 表格 -->
  <div>
    <div class="add-authority">
      <el-button class="add-list" type="primary" @click="handleClick"
        >添加权限</el-button
      >
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="邮箱" width="180" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="address" label="所属项目" />
      <el-table-column prop="date" label="权限" width="180" />
      <el-table-column prop="name" label="语种类型" />
      <el-table-column fixed="right" label="操作" width="180">
        <template #default>
          <el-button link type="primary" size="small">权限变更</el-button>
          <el-button link type="primary" size="small">删除用户</el-button>
        </template>
      </el-table-column>
    </el-table>
    <auth-drawer :isShow="showDrawer" title="添加权限" />
  </div>
</template>
<script lang="ts" setup>
import AuthDrawer from "./AuthDrawer.vue";
const showDrawer = ref(false);

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
const handleClick = () => {
  showDrawer.value = true;
};
</script>
<style lang="scss">
.add-authority {
  display: flex;
  padding-bottom: 2rem;
  justify-content: end;
}
</style>

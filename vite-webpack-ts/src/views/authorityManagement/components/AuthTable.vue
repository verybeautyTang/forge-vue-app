<template>
  <!-- 表格 -->
  <div>
    <div class="add-authority">
      <el-button class="add-list" type="primary" @click="addUser"
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
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="editUser(scope.row)"
            >权限变更</el-button
          >
          <el-button
            link
            type="primary"
            size="small"
            @click="deleteUser(scope.row)"
            >删除用户</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <auth-drawer
      :isShow="state.showDrawer"
      :title="state.isEdit ? '修改权限' : '添加权限'"
      :form="state.isEdit ? state.form : {}"
      @updateDialog="updateDialog"
    />
  </div>
</template>
<script lang="ts" setup>
import AuthDrawer from "./AuthDrawer.vue";
import type { Action } from "element-plus";

interface TableInterface {
  date: string;
  name: string;
  address: string;
}

const state = reactive({
  showDrawer: false,
  isEdit: false,
  form: {},
});

const tableData: TableInterface[] = [
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
// 添加权限
const addUser = () => {
  state.isEdit = false;
  state.showDrawer = true;
};
// 删除事件
const deleteUser = (row: TableInterface) => {
  ElMessageBox.confirm("您确定要删除数据吗？", "警告", {
    distinguishCancelAndClose: true,
    confirmButtonText: "确定",
    cancelButtonText: "取消",
  })
    .then(() => {
      ElMessage({
        type: "info",
        message: "删除成功",
      });
    })
    .catch((action: Action) => {
      ElMessage({
        type: "info",
        message:
          action === "cancel" ? "取消删除" : "删除失败，请稍后重试或联系管理员",
      });
    });

  console.log(row);
};
// 编辑权限
const editUser = (row: TableInterface) => {
  console.log("执行了");
  state.isEdit = true;
  state.showDrawer = true;
  state.from = row;
};

const updateDialog = (row: TableInterface) => {
  console.log(row);
  state.showDrawer = false;
};
</script>
<style lang="scss">
.add-authority {
  display: flex;
  padding-bottom: 2rem;
  justify-content: end;
}
</style>

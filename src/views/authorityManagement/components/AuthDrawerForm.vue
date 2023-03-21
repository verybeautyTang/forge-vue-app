<template>
  <el-form class="drawer-container">
    <el-form-item label="邮箱号">
      <el-input v-model="formInline.email" placeholder="请输入邮箱" />
    </el-form-item>
    <el-form-item label="选择项目">
      <el-select v-model="formInline.project" placeholder="选择项目" multiple>
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="选择权限">
      <el-select v-model="formInline.region" placeholder="选择权限">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="选择语种">
      <el-select v-model="formInline.language" placeholder="选择语种" multiple>
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const formInline = reactive({
  email: "",
  project: [],
  language: [],
  region: "",
});

const onSubmit = () => {
  console.log("submit!");
  console.log(formInline);
};
</script>
<style lang="scss" scoped>
.drawer-container {
  .ep-select {
    width: 100%;
  }
}
</style>

<template>
  <div class="auth-form-container">
    <el-form :inline="true" :model="formInline" class="auth-form-inline">
      <el-form-item label="">
        <el-input v-model="formInline.user" placeholder="请输入关键字" />
      </el-form-item>
      <el-form-item>
        <el-button @click="onSubmit">搜索</el-button>
      </el-form-item>
      <el-form-item label="选择项目">
        <el-select v-model="formInline.region" placeholder="选择项目">
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
        <el-select v-model="formInline.region" placeholder="选择语种">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";

const formInline = reactive({
  user: "",
  region: "",
});

const onSubmit = () => {
  console.log("submit!");
  // @emit
};
</script>
<style lang="scss">
.auth-form-container {
  width: 100%;
  padding: 2rem 0;
  .auth-form-inline {
    width: 100%;
    display: flex;
  }
}
</style>

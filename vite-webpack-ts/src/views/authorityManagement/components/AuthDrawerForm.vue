<template>
  <el-form>
    <el-form-item label="邮箱号">
      <el-input v-model="formInline.user" placeholder="请输入邮箱" />
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
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const formInline = reactive({
  user: "",
  region: "",
});

const onSubmit = () => {
  console.log("submit!");
};
</script>

<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="0">
      <el-icon><setting /></el-icon>
      <span>主页</span>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>订单管理</span>
      </template>
      <el-menu-item index="1-1">发起订单</el-menu-item>
      <el-menu-item index="1-2">所有订单</el-menu-item>
      <el-menu-item index="1-3">待处理订单</el-menu-item>
      <el-menu-item index="1-4">草稿</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><document /></el-icon>
        <span>文本库管理</span>
      </template>
      <el-menu-item index="2-1">发起订单</el-menu-item>
      <el-menu-item index="2-2">所有订单</el-menu-item>
      <el-menu-item index="2-3">待处理订单</el-menu-item>
      <el-menu-item index="2-4">草稿</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span>需求管理</span>
      </template>
      <el-menu-item index="3-1">需求列表</el-menu-item>
      <el-menu-item index="3-2">源文本审核</el-menu-item>
      <el-menu-item index="3-3">需求处理</el-menu-item>
      <el-menu-item index="3-4">文本验收</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="4">
      <template #title>
        <el-icon><setting /></el-icon>
        <span>后台管理</span>
      </template>
      <el-menu-item index="4-1">权限管理</el-menu-item>
      <el-menu-item index="4-2">译者管理</el-menu-item>
      <el-menu-item index="4-3">其他设置</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

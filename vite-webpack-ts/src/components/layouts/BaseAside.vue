<template>
  <el-menu
    :default-active="$route.path"
    router
    class="el-menu-container"
    @open="handleOpen"
    @close="handleClose"
  >
    <nav-list :navMenus="routes" />
  </el-menu>
</template>

<script lang="ts" setup>
import { routes } from "@/router/index";

console.log(routes);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<style lang="scss" scoped>
.el-menu-container {
  height: 100%;
}
</style>

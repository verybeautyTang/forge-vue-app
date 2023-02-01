<template>
  <el-menu
    :default-active="$route.path"
    router
    class="aside-container"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-image
      src="../../../public/img/logo.jpg"
      fit="fill"
      class="aside-avatar"
    />
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
.aside-container {
  height: 100%;
  .aside-avatar {
    padding: 20px;
  }
}
</style>

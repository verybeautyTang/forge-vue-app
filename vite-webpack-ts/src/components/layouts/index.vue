<template>
  <el-config-provider namespace="ep" locale="locale">
    <el-container class="layout_container">
        <el-aside width="180px"> <base-aside /></el-aside>
        <el-container>
          <el-header class="layout_header"><base-header /></el-header>
          <el-main>
            <breadcrumb></breadcrumb>
            <router-view />
          </el-main>
          <!-- <el-footer><footer-list /></el-footer> -->
        </el-container>
      </el-container>
  </el-config-provider>
</template>

<style lang="scss" scoped>
.layout_container {
  height: 100%;
  .layout_header {
    padding: 0;
    margin: 0;
  }
}

</style>

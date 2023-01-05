<template>
  <el-config-provider namespace="ep" locale="locale">
    <el-container>
      <el-header class="header"><BaseHeader /></el-header>
      <el-container>
        <el-aside width="180px"> <BaseSide /></el-aside>
        <el-container>
          <el-main><router-view /></el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </el-config-provider>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  text-align: center;
  color: var(--ep-text-color-primary);
  color: #2c3e50;
}
.header {
  padding: 0;
  margin: 0;
}
</style>

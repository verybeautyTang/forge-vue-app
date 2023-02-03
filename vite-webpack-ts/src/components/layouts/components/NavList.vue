<template>
  <div class="navMenu">
    <label v-for="navMenu in props.navMenus" :key="navMenu.path">
      <!--只有一级菜单-->
      <el-menu-item
        v-if="!navMenu.children && navMenu?.meta.title && !navMenu?.meta.hidden"
        :index="navMenu.path"
        :route="navMenu.path"
      >
        <!--图标-->
        <i :class="navMenu.meta.icon"></i>
        <!--标题-->
        <template v-slot:title>
          <span>{{ generateTitle(navMenu?.meta?.title) }}</span>
        </template>
        <!-- <span slot="title">{{ navMenu?.meta.title }}</span> -->
      </el-menu-item>
      <!--有多级菜单-->
      <el-sub-menu
        v-if="navMenu.children"
        :key="navMenu.path"
        :index="navMenu.path"
      >
        <template v-slot:title>
          <i :class="navMenu.meta.icon"></i>
          <span> {{ generateTitle(navMenu?.meta?.title) }}</span>
        </template>
        <!--递归组件，把遍历的值传回子组件，完成递归调用-->
        <nav-list :navMenus="navMenu.children"></nav-list>
      </el-sub-menu>
    </label>
  </div>
</template>

<script setup lang="ts">
import { generateTitle } from "@/utils/i18n";
interface Params {
  path: string;
  name: string;
  meta: {
    title: string;
    showType: Array<string>;
    icon: string;
    hidden?: boolean;
  };
  redirect?: string;
  children?: Params[];
}

interface Menu {
  navMenus: Params[];
}

const props = defineProps<Menu>();
console.log("sssss", props.navMenus);
</script>

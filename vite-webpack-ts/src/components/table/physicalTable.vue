<!-- 属性 -->
<script lang="ts" setup>
import { type } from "os";

/**
 * 属性
 * 多选框
 * 顺序排列index
 * 是否显示分页
 *  分页属性
 *    是否显示背景
 *    是否显示禁用
 *    一共多少页
 *    当前页数
 *    当前显示条数
 *  分页事件
 *    清空条数和页码
 *    换页
 *    换行
 */

const handleClick = () => {
  console.log("click");
};
type IProps = {
  /** 多选框 */
  isShowCheckboxes?: boolean;
  /** 顺序排列index */
  isShowIndex?: boolean;
  /** 是否可编辑 */
  isEditable?: boolean;
  /** 数据 */
  date: any;
  /** 表头 */
  header: any;
};
const props = withDefaults(defineProps<IProps>(), {
  isShowCheckboxes: false,
  isShowIndex: false,
  isEditable: false,
});
</script>
<template>
  <el-table :data="date" style="width: 100%" empty-text="暂无数据">
    <template v-for="(col, index) in props.header" :key="index">
      <el-table-column :prop="col.name" :label="col.label" width="150" />
    </template>
    <el-table-column fixed="right" label="操作" width="200">
      <template #default>
        <el-button link type="primary" size="small" @click="handleClick"
          >Detail</el-button
        >
        <el-button link type="primary" size="small">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

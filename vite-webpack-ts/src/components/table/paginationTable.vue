<template>
  <div class="demo-pagination-block">
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[5, 10, 20, 50, 100]"
      :disabled="props.disabled"
      :background="props.isShowBackground"
      layout="total, sizes, prev, pager, next, jumper"
      :total="+props.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

export interface PaginationProps {
  /** 是否显示背景 */
  isShowBackground?: boolean;
  /** 是否显示禁用 */
  disabled?: boolean;
  /** 一共多少页 */
  total: number | string;
  /** 当前页数 */
  currentPage?: number | string;
  currentSize?: number | string;
}

export interface PaginationEmit {
  /** 页数大小改变 */
  (e: "handleSizeChange", val: number): void;
  /** 分页 */
  (e: "handleCurrentChange", val: number): void;
  /** 清空条数和页码 */
  (e: "clearAll"): void;
}

const props = withDefaults(defineProps<PaginationProps>(), {
  currentSize: 10,
  currentPage: 1,
  isShowBackground: true,
  disabled: false,
});
console.log(props);

const emits = defineEmits<PaginationEmit>();

const currentPage = ref(props.currentPage);

const pageSize = ref(props.currentSize);

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
  emits("handleSizeChange", val);
};

const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
  emits("handleCurrentChange", val);
};

const clearAll = () => {
  emits("clearAll");
};
</script>
<style scoped>
.demo-pagination-block {
  margin-top: 16px;
}
</style>

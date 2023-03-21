<!-- 属性： 操作名称/id/ 方法 -->
<template>
  <div v-for="item in VirtualOperationStatus[props.type]" :key="item.name">
    <el-button
      @click="operationClick(item.clickFunction, item)"
      v-if="item.isShow"
      link
      type="primary"
      class="operation_container"
      >{{ item.name }}
    </el-button>
  </div>
</template>
<script lang="ts">
// 使用普通的 <script> 来声明选项
export default {
  inheritAttrs: false,
};
</script>
<script lang="ts" setup>
import {
  VirtualOperationStatus,
  VirtualOperationStatusEnmu,
  IVirtualOperationProps,
} from "@/types/virtual-operation";

import type { Column } from "element-plus";

type Props = {
  item?: Column<any>[] | Column<any>;
  type: VirtualOperationStatusEnmu;
};

type EmitProps = {
  /** 修改 */
  (e: "updateData", id?: IVirtualOperationProps | string): void;

  /** 添加备注 */
  (e: "addRemark", id?: IVirtualOperationProps | string): void;

  /** 保存 */
  (e: "saveData", id?: IVirtualOperationProps | string): void;

  /** 取消 */
  (e: "cancelData", id?: IVirtualOperationProps | string): void;
};

const props = defineProps<Props>();

const emits = defineEmits<EmitProps>();

const selected = ref<IVirtualOperationProps>();

const operationClick = (functionName: string, item: IVirtualOperationProps) => {
  selected.value = item;
  ClickFunction[functionName]();
};

/** 修改 */
const updateData = () => {
  console.log("我执行了");
  emits("updateData", selected.value);
};

/** 添加备注 */
const addRemark = () => {
  emits("addRemark", selected.value);
};
/** 保存 */
const saveData = () => {
  console.log("first");
  emits("saveData", selected.value);
};
/** 取消保存 */
const cancelData = () => {
  console.log("first");
  emits("cancelData", selected.value);
};

const ClickFunction = {
  updateData,
  addRemark,
  cancelData,
  saveData,
};
</script>
<style lang="scss" scoped>
// .operation_container {
//   margin-bottom: 1%;
//   color: #ffffff !important;
//   width: 20%;
//   &:hover {
//     color: #ffffff;
//   }
// }
</style>

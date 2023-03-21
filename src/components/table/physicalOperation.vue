<!-- 属性： 操作名称/id/ 方法 -->
<template>
  <div v-for="item in OperationStatus[props.type]" :key="item.name">
    <el-button
      :color="item.color"
      @click="operationClick(item.clickFunction, item)"
      class="operation_container"
      >{{ item.name }}</el-button
    >
  </div>
</template>
<script lang="ts" setup>
import {
  OperationStatus,
  OperationStatusEnmu,
  IOperationProps,
} from "@/types/operation";

type Props = {
  id?: string[];
  type: OperationStatusEnmu;
};

type EmitProps = {
  /** 导出结算单 */
  (e: "exportPay", id?: IOperationProps | string): void;

  /** 停用账户 */
  (e: "closeAccount", id?: IOperationProps | string): void;

  /** 修改账户 */
  (e: "changeAccount", id?: IOperationProps | string): void;

  /** 查看详情 */
  (e: "seeDetail", id?: IOperationProps | string): void;

  /** 通过并入库 */
  (e: "passAndReturn", id?: IOperationProps | string): void;

  /** 通过审核 */
  (e: "passAudit", id?: IOperationProps | string): void;

  /** 驳回 */
  (e: "rejectOrder", id?: IOperationProps | string): void;

  /** 撤销驳回 */
  (e: "cancelRejectOrder", id?: IOperationProps | string): void;

  /** 指派任务 */

  (e: "assignTask", id?: IOperationProps | string): void;

  /** 完成翻译 */
  (e: "finishTranslation", id?: IOperationProps | string): void;

  /** 完成订单 */
  (e: "finishOrder", id?: IOperationProps | string): void;

  /** 回复订单 */
  (e: "replyOrder", id?: IOperationProps | string): void;

  /** 关闭订单 */
  (e: "closeOrder", id?: IOperationProps | string): void;

  /** 修改订单 */
  (e: "cancelOrder", id?: IOperationProps | string): void;

  /** 查看词条 */
  (e: "seeText", id?: IOperationProps | string): void;

  /** 仅我完成 */
  (e: "onlyMyFinish", id?: IOperationProps | string): void;
};

const props = defineProps<Props>();

const emits = defineEmits<EmitProps>();

const selected = ref<IOperationProps>();

const operationClick = (functionName: string, item: IOperationProps) => {
  selected.value = item;
  ClickFunction[functionName]();
};

const seeOrdertListDetail = () => {};

/** 修改账户 */
const changeAccount = () => {
  emits("changeAccount", selected.value);
};

/** 停用账户 */
const closeAccount = () => {
  emits("closeAccount", selected.value);
};

/** 导出结算单 */
const exportPay = () => {
  console.log("first");
  emits("exportPay", selected.value);
};

const ClickFunction = {
  seeOrdertListDetail: seeOrdertListDetail,
  exportPay: exportPay,
  changeAccount: changeAccount,
  closeAccount: closeAccount,
};
</script>
<style lang="scss" scoped>
.operation_container {
  margin-bottom: 1%;
  color: #ffffff !important;
  width: 20%;
  &:hover {
    color: #ffffff;
  }
}
</style>

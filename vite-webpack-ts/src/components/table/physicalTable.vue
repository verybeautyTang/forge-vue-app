<!-- 属性 -->
<script lang="ts" setup>
import { IOperationProps, OperationStatusEnmu } from "@/types/operation";
import operation from "./physicalOperation.vue";

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
  /** 显示操作 */
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

const props = withDefaults(defineProps<IProps>(), {
  isShowCheckboxes: false,
  isShowIndex: false,
  isEditable: false,
});

const emits = defineEmits<EmitProps>();
</script>
<template>
  <el-table :data="date" style="width: 100%" empty-text="暂无数据">
    <template v-for="(col, index) in props.header" :key="index">
      <el-table-column :prop="col.name" :label="col.label" />
    </template>
    <el-table-column fixed="right" label="操作" width="200">
      <template #default>
        <operation
          :type="props.type"
          @exportPay="(item?:IOperationProps | string) => emits('exportPay', item)"
          @closeAccount="(item?:IOperationProps | string) => emits('closeAccount', item)"
          @changeAccount="(item?:IOperationProps | string) => emits('changeAccount', item)"
          @seeDetail="(item?:IOperationProps | string) => emits('seeDetail', item)"
          @passAndReturn="(item?:IOperationProps | string) => emits('passAndReturn', item)"
          @passAudit="(item?:IOperationProps | string) => emits('passAudit', item)"
          @rejectOrder="(item?:IOperationProps | string) => emits('rejectOrder', item)"
          @cancelRejectOrder="(item?:IOperationProps | string) => emits('cancelRejectOrder', item)"
          @assignTask="(item?:IOperationProps | string) => emits('assignTask', item)"
          @finishTranslation="(item?:IOperationProps | string) => emits('finishTranslation', item)"
          @finishOrder="(item?:IOperationProps | string) => emits('finishOrder', item)"
          @replyOrder="(item?:IOperationProps | string) => emits('replyOrder', item)"
          @closeOrder="(item?:IOperationProps | string) => emits('closeOrder', item)"
          @cancelOrder="(item?:IOperationProps | string) => emits('cancelOrder', item)"
          @seeText="(item?:IOperationProps | string) => emits('seeText', item)"
          @onlyMyFinish="(item?:IOperationProps | string) => emits('onlyMyFinish', item)"
        ></operation>
      </template>
    </el-table-column>
  </el-table>
</template>

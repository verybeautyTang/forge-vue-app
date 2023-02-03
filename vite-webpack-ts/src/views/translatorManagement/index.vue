<template>
  <div class="translator-container">
    <div class="translator-header mb-4">
      <el-button type="primary">导出结算单</el-button>
      <el-button type="primary">创建译者</el-button>
    </div>
    <div class="translator-content">
      <physical-table
        i18prefix="translatorManager"
        :header="TranslatorManagementTableHeader"
        :date="Translator"
        :type="OperationStatusEnmu.Translation"
        @exportPay="(item:string | IOperationProps) => exportPay(item)"
        @changeAccount="(item:string | IOperationProps) => changeAccount(item)"
        @closeAccount="(item:string | IOperationProps) => closeAccount(item)"
      ></physical-table>
      <virtual-table
        :isShowCheckBox="true"
        :fixed="true"
        :type="VirtualOperationStatusEnmu.TextAndProjectOperations"
      ></virtual-table>
      <!-- <pagination-table
        :total="Translator.length"
        @handleCurrentChange="(item:number) => handleCurrentChange(item)"
        @handleSizeChange="(item:number) => handleSizeChange(item)"
      ></pagination-table> -->
    </div>
  </div>
</template>
<script lang="ts" setup>
import physicalTable from "@/components/table/physicalTable.vue";
import paginationTable from "@/components/table/paginationTable.vue";
import virtualTable from "@/components/table/virtualTable.vue";
import { VirtualOperationStatusEnmu } from "@/types/virtual-operation";
import {
  TranslatorManagementTableHeader,
  Translator,
} from "@/types/fixed-table";
import { IOperationProps, OperationStatusEnmu } from "@/types/operation";
const exportPay = (item: IOperationProps | string) => {
  console.log(item);
};
const changeAccount = (item: IOperationProps | string) => {
  console.log("我是改变数据", item);
};
const closeAccount = (item: IOperationProps | string) => {
  console.log("我是关闭数据", item);
};

const handleCurrentChange = (item: number) => {
  console.log(item);
};

const handleSizeChange = (item: number) => {
  console.log(item);
};
</script>

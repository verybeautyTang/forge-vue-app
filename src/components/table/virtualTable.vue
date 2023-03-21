<template>
  <el-table-v2
    :columns="columns"
    :data="data"
    :height="400"
    :fixed="props.fixed"
    :width="800"
  />
  <el-dialog v-model="dialogVisible" title="Tips" width="30%">
    >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="tsx" setup>
import {
  isProjectHeader,
  tableBeforeHeader,
  tableAfterHeader,
} from "@/types/virtual-table";
import { ref, unref, FunctionalComponent } from "vue";
import { ElCheckbox, TableV2FixedDir } from "element-plus";
import VirtualOperation from "./virtualOperation.vue";
import type { Column, CheckboxValueType } from "element-plus";

import { VirtualOperationStatusEnmu } from "@/types/virtual-operation";

const dialogVisible = ref(false);
// 选择多选框类型
type SelectionCellProps = {
  value: boolean;
  intermediate?: boolean;
  onChange: (value: CheckboxValueType) => void;
};

type ITableProps = {
  /** 是否显示checkbox以及checkbox的名称 */
  isShowCheckBox?: boolean;

  /** 是否固定 */
  fixed: boolean;

  /** 表头 */
  column?: Column<any>[];

  /** 数据 */
  data?: any[];

  /** 操作数据类型 */
  type: VirtualOperationStatusEnmu;
};

const props = defineProps<ITableProps>();

const generateData = (columns: Column<any>[], length = 200, prefix = "row-") =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.key] = `Row ${rowIndex} - Col ${columnIndex}`;
        return rowData;
      },
      {
        id: `${prefix}${rowIndex}`,
        checked: false,
        parentId: null,
      }
    );
  });

const operationColumn: Column<any> = {
  key: "operations",
  title: "操作",
  fixed: TableV2FixedDir.RIGHT,
  cellRenderer: (cellData: any) => (
    <>
      <VirtualOperation
        type={props.type}
        item={cellData}
        addRemark={() => addRemark(cellData)}
        updateData={() => updateData(cellData)}
        saveData={() => saveData(cellData)}
        cancelData={() => cancelData(cellData)}
      ></VirtualOperation>
    </>
  ),
  width: 150,
};
const addRemark = (cellData: any) => {
  console.log(cellData);
  dialogVisible.value = true;
};
const updateData = (cellData: any) => {
  console.log(cellData);
};
const saveData = (cellData: any) => {
  console.log(cellData);
};

const cancelData = (cellData: any) => {
  console.log(cellData);
};

const columns = [
  isProjectHeader,
  ...tableBeforeHeader,
  ...tableAfterHeader,
  operationColumn,
];

const SelectionCell: FunctionalComponent<SelectionCellProps> = ({
  value,
  intermediate = false,
  onChange,
}) => {
  return (
    <ElCheckbox
      onChange={onChange}
      modelValue={value}
      indeterminate={intermediate}
    />
  );
};

// key: string;
//   title: string;
//   dataKey: string;
//   width: number;
if (props.isShowCheckBox) {
  columns.unshift({
    key: "selection",
    dataKey: "index",
    width: 50,
    cellRenderer: ({ rowData }) => {
      const onChange = (value: CheckboxValueType) => (rowData.checked = value);
      return <SelectionCell value={rowData.checked} onChange={onChange} />;
    },
    headerCellRenderer: () => {
      const _data = unref(data);
      const onChange = (value: CheckboxValueType) =>
        (data.value = _data.map(row => {
          row.checked = value as boolean;
          return row;
        }));
      // 全选
      const allSelected = _data.every(row => row.checked);
      const containsChecked = _data.some(row => row.checked);

      return (
        <SelectionCell
          value={allSelected}
          intermediate={containsChecked && !allSelected}
          onChange={onChange}
        />
      );
    },
  });
}

const data = ref(generateData(columns, 10));
</script>

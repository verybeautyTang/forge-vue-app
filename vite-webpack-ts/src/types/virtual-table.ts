import type { Column } from "element-plus";
import { TableV2FixedDir } from "element-plus";

export const isProjectHeader: Column<any> = {
  key: "version",
  dataKey: "version",
  title: "版本号",
  width: 150,
};

export const notProjectHeader: Column<any> = {
  key: "version",
  dataKey: "version",
  title: "词条号",
  width: 150,
};

export const tableBeforeHeader: Column<any>[] = [
  {
    key: "maxLength",
    dataKey: "maxLength",
    title: "最大字符",
    width: 150,
  },
  {
    key: "textType",
    dataKey: "textType",
    title: "文本类型",
    width: 150,
  },
  {
    key: "key",
    dataKey: "key",
    title: "键值",
    width: 150,
  },
];
export const tableAfterHeader: Column<any>[] = [
  {
    key: "projectRemark",
    dataKey: "projectRemark",
    title: "项目组备注",
    width: 150,
    fixed: TableV2FixedDir.RIGHT,
  },
  {
    key: "managerRemark",
    dataKey: "managerRemark",
    title: "管理员备注",
    fixed: TableV2FixedDir.RIGHT,
    width: 150,
  },
];

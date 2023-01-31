export type TableHeader = {
  name: string;
  label: string;
};

/** 订单表头 */
export const OrderTableHeader: TableHeader[] = [
  {
    name: "orderId",
    label: "订单号",
  },
  {
    name: "projectName",
    label: "项目名称",
  },
  {
    name: "requirementType",
    label: "需求类型",
  },
  {
    name: "founder",
    label: "创建人",
  },
  {
    name: "version",
    label: "版本号",
  },
  {
    name: "requirementFile",
    label: "需求文件/文本",
  },
  {
    name: "sourceLanguage",
    label: "源语种",
  },
  {
    name: "targetLanguage",
    label: "目标语种",
  },
  {
    name: "createTime",
    label: "创建时间",
  },
  {
    name: "endTime",
    label: "截止时间",
  },
  {
    name: "commitTime",
    label: "完成时间",
  },
  {
    name: "process",
    label: "当前处理人",
  },
  // {
  //   name: "operation",
  //   label: "操作",
  // },
];

/** 文本库表头 */
export const TextLibraryTableHeader: TableHeader[] = [
  {
    name: "taskType",
    label: "任务类别",
  },
  {
    name: "chooseRows",
    label: "选中行数",
  },
  {
    name: "chooseColumn",
    label: "选中列",
  },
  {
    name: "sourceLanguage",
    label: "源语种",
  },
  {
    name: "targetLanguage",
    label: "目标语种",
  },
  {
    name: "createdDate",
    label: "创建时间",
  },
  {
    name: "endDate",
    label: "截止时间",
  },
  {
    name: "tasks",
    label: "任务单",
  },
  {
    name: "status",
    label: "状态",
  },
  {
    name: "operations",
    label: "操作",
  },
];

/** 文本验收 */
export const TextCceptanceTableHeader: TableHeader[] = [
  {
    name: "all",
    label: "全选",
  },
  {
    name: "version",
    label: "版本号",
  },
  {
    name: "maxNumber",
    label: "最大字符串",
  },
  {
    name: "taskType",
    label: "对接人",
  },
  {
    name: "textType",
    label: "文本类型",
  },
  {
    name: "keys",
    label: "键值",
  },
  {
    name: "oldVersion",
    label: "历史版本",
  },
  {
    name: "newVersion",
    label: "新编辑版本",
  },
  {
    name: "editor",
    label: "编辑者",
  },
  {
    name: "Project_Notes",
    label: "Project_Notes",
  },
  {
    name: "LPM_Notes",
    label: "LPM_Notes",
  },
  {
    name: "operation",
    label: "操作",
  },
];

/** 人员权限管理 */
export const PersonnelManagementTableHeader: TableHeader[] = [
  {
    name: "email",
    label: "邮箱",
  },
  {
    name: "userName",
    label: "姓名",
  },
  {
    name: "projectList",
    label: "所属项目",
  },
  {
    name: "authority",
    label: "权限",
  },
  {
    name: "languageType",
    label: "语种类型",
  },
  {
    name: "operation",
    label: "操作",
  },
];

/** 译者管理 */
export const TranslatorManagementTableHeader: TableHeader[] = [
  {
    name: "userCode",
    label: "账号",
  },
  {
    name: "company",
    label: "公司",
  },
  {
    name: "userName",
    label: "姓名",
  },
  {
    name: "translationLanguage",
    label: "翻译语种",
  },
  {
    name: "translationPrice",
    label: "翻译单价",
  },
  {
    name: "proofreadPrice",
    label: "校对单价",
  },
  {
    name: "operation",
    label: "操作",
  },
];

/** 操作类型定义 */

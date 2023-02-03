export type IVirtualOperationProps = {
  name: string;
  id: string;
  isShow?: boolean;
  clickFunction: string;
};

/** 文本库 */
export const TextAndProjectOperations: IVirtualOperationProps[] = [
  {
    name: "修改",
    id: "update",
    isShow: true,
    clickFunction: "updateData",
  },
  {
    name: "添加备注",
    id: "addRemark",
    isShow: true,
    clickFunction: "addRemark",
  },
  {
    name: "保存",
    id: "saveData",
    isShow: false,
    clickFunction: "saveData",
  },
  {
    name: "取消",
    id: "cancelData",
    isShow: false,
    clickFunction: "cancelData",
  },
];

export enum VirtualOperationStatusEnmu {
  TextAndProjectOperations = "TextAndProjectOperations",
}

export const VirtualOperationStatus = {
  TextAndProjectOperations: TextAndProjectOperations,
};

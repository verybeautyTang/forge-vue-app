export enum OperationBackgroundColor {
  "Success" = "#03C316",
  "Detail" = "#027DB4",
  "Change" = "#F59A23",
  "Cancel" = "#AAAAAA",
  "Close" = "#03C316",
}

export type IOperationProps = {
  name: string;
  id: string;
  clickFunction: string;
  color: string;
};

export type EmitProps = {
  /** 导出结算单 */
  exportPay?: (id: string) => void;

  /** 停用账户 */

  closeAccount?: (id: string) => void;

  /** 修改账户 */
  changeAccount?: (id: string) => void;

  /** 查看详情 */
  seeDetail?: (id: string) => void;

  /** 通过并入库 */
  passAndReturn?: (id: string) => void;

  /** 通过审核 */
  passAudit?: (id: string) => void;

  /** 驳回 */
  rejectOrder?: (id: string) => void;

  /** 撤销驳回 */
  cancelRejectOrder?: (id: string) => void;

  /** 指派任务 */
  AssignTask?: (id: string) => void;

  /** 完成翻译 */
  finishTranslation?: (id: string) => void;

  /** 完成订单 */
  finishOrder?: (id: string) => void;

  /** 回复订单 */
  replyOrder?: (id: string) => void;

  /** 关闭订单 */
  closeOrder?: (id: string) => void;

  /** 修改订单 */
  cancelOrder?: (id: string) => void;

  /** 查看词条 */
  seeText?: (id: string) => void;

  /** 仅我完成 */
  onlyMyFinish?: (id: string) => void;
};

/** 订单中心操作 */

/** 订单管理 */
export const OrderListOperations: IOperationProps[] = [
  {
    name: "查看详情",
    id: "detail",
    clickFunction: "seeDetail",
    color: OperationBackgroundColor.Detail,
  },
  {
    name: "通过并入库",
    id: "detail",
    clickFunction: "passAndReturn",
    color: OperationBackgroundColor.Detail,
  },
  {
    name: "通过审核",
    id: "detail",
    clickFunction: "passAudit",
    color: OperationBackgroundColor.Success,
  },
  {
    name: "驳回",
    id: "detail",
    clickFunction: "rejectOrder",
    color: OperationBackgroundColor.Cancel,
  },
  {
    name: "撤销驳回",
    id: "detail",
    clickFunction: "cancelRejectOrder",
    color: OperationBackgroundColor.Cancel,
  },
  {
    name: "指派任务",
    id: "detail",
    clickFunction: "AssignTask",
    color: OperationBackgroundColor.Detail,
  },
  {
    name: "完成翻译",
    id: "detail",
    clickFunction: "finishTranslation",
    color: OperationBackgroundColor.Detail,
  },
  {
    name: "完成订单",
    id: "detail",
    clickFunction: "finishOrder",
    color: OperationBackgroundColor.Detail,
  },
  {
    name: "回复订单",
    id: "detail",
    clickFunction: "replyOrder",
    color: OperationBackgroundColor.Detail,
  },
  {
    name: "关闭",
    id: "detail",
    clickFunction: "closeOrder",
    color: OperationBackgroundColor.Detail,
  },
];

/** 我的订单 */
export const MyOrder: IOperationProps[] = [
  {
    name: "查看详情",
    id: "detail",
    clickFunction: "seeDetail",
    color: OperationBackgroundColor.Detail,
  },
  {
    name: "修改订单",
    id: "detail",
    clickFunction: "changeOrder",
    color: OperationBackgroundColor.Detail,
  },
  {
    name: "撤销订单",
    id: "detail",
    clickFunction: "cancelOrder",
    color: OperationBackgroundColor.Detail,
  },
  {
    name: "查看词条",
    id: "detail",
    clickFunction: "seeText",
    color: OperationBackgroundColor.Detail,
  },
  {
    name: "仅我完成",
    id: "detail",
    clickFunction: "onlyMyFinish",
    color: OperationBackgroundColor.Detail,
  },
  {
    name: "完成翻译",
    id: "detail",
    clickFunction: "finishTranslation",
    color: OperationBackgroundColor.Detail,
  },
  {
    name: "确认完成订单",
    id: "detail",
    clickFunction: "finishOrder",
    color: OperationBackgroundColor.Detail,
  },
];

/** 后台管理 */

export const AuthorityManager: IOperationProps[] = [
  {
    name: "修改",
    id: "detail",
    clickFunction: "changeAccount",
    color: OperationBackgroundColor.Change,
  },
  // {
  //   name: "停用",
  //   id: "detail",
  //   clickFunction: "closeAccount",
  //   color: OperationBackgroundColor.Cancel,
  // },
];

/** 翻译员管理 */
export const TranslationManager: IOperationProps[] = [
  {
    name: "导出结算单",
    id: "detail",
    clickFunction: "exportPay",
    color: OperationBackgroundColor.Detail,
  },
  {
    name: "修改",
    id: "detail",
    clickFunction: "changeAccount",
    color: OperationBackgroundColor.Change,
  },
  // {
  //   name: "停用",
  //   id: "detail",
  //   clickFunction: "closeAccount",
  //   color: OperationBackgroundColor.Cancel,
  // },
];

export enum OperationStatusEnmu {
  OrderList = "OrderList",
  MyOrder = "MyOrder",
  Authority = "Authority",
  Translation = "Translation",
}

export const OperationStatus = {
  OrderList: OrderListOperations,
  MyOrder: MyOrder,
  Authority: AuthorityManager,
  Translation: TranslationManager,
};

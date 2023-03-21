export enum PendingType {
  Special = "issueOrder.SpecialDemand",
  Project = "issueOrder.ProjectDemand",
  Text = "issueOrder.TextDemand",
}

export enum PendingDetailType {
  Special = "issueOrder.SpecialDetail",
  Project = "issueOrder.ProjectDetail",
  Text = "issueOrder.TextDetail",
}

export enum PendingUploadName {
  Special = "上传需求文件",
  Project = "上传需求文本包（.csv文件）",
  Text = "填写需求详情(Details)",
}

/**上传需求文本类型 */

export type TextContent = {
  /** 源文本 */
  content: string;

  /** 最大字数限制，不填表示无限制 */
  maxLength?: number;

  /** 备注 */
  remark?: string;
};

/** 发起订单表单配置 */

export type BasicPendingForm = {
  /** 发起人 */
  username: string;

  /** 所属项目【项目需求可选，其他可选】 */
  project: string;

  /** 源语种 */
  sourceLanguage: string;

  /** 目标语种 */
  targetLanguage: string[];

  /** 版本号 */
  version: number | string;

  /** 截止日期 */
  expirationDate: string;

  /** 备注信息或参考附件 */
  remark?: string;

  /** 上传需求名称 */
  uploadName: PendingUploadName;

  /** 需求类型 */
  Pendingtype: PendingType | string;

  /** 上传需求文件 */
  uploadFlie?: string | TextContent[];

  /** 文本需求类型 */
  textType?: string;
};

export enum chooseTypeListType {
  project = "project",
  text = "text",
  special = "special",
}

// 默认时间选择类型
export enum chooseType {
  Special = "issueOrder.SpecialDemand",
  Project = "issueOrder.ProjectDemand",
  Text = "issueOrder.TextDemand",
}

// 数据类型
export type chooseTypeItemType = {
  value: chooseTypeListType;
  label: chooseType;
};

export type chooseTypeProps = {
  /** 传入的数据 */
  list?: chooseTypeItemType[];

  /** 选择框的大小 */
  width?: number | string;

  /** 选择框的尺寸 */
  size?: "large" | "medium" | "default";

  /**  当前默认选择的数据  */
  selected?: string;

  /** 展位字符   */
  placeholder?: string;

  /**  是否可多选  */
  multiple?: boolean;

  /**  是否可清除  */
  clearable?: boolean;

  /**  自定义css  */
  style?: string;

  /** 自定义类   */
  class?: string;
};

export type chooseTypeEmits = {
  /**  选中值时发生变化  */
  change?: (selected: string) => void;

  /**  失焦发生变化  */
  blur?: (event: FocusEvent) => void;
};

// 默认数据
const list: chooseTypeItemType[] | never = [];

for (const key in chooseTypeListType) {
  list.push({
    value: chooseTypeListType[key],
    label: chooseType[chooseTypeListType[key]],
  });
}

export default chooseType;

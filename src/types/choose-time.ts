export enum chooseTimeListType {
  thisWeek = "thisWeek",
  thisMonth = "thisMonth",
  thisThreeMonth = "thisThreeMonth",
  thisSixMonth = "thisSixMonth",
  thisYear = "thisYear",
  otherTime = "otherTime",
}

// 默认时间选择类型
export enum chooseTimeType {
  thisWeek = "最近一周",
  thisMonth = "最近一个月",
  thisThreeMonth = "最近三个月",
  thisSixMonth = "最近半年",
  thisYear = "最近一年",
  otherTime = "其他时间",
}

// 数据类型
export type chooseTimeItemType = {
  value: chooseTimeListType;
  label: chooseTimeType;
};

export type chooseTimeProps = {
  /** 传入的数据 */
  list?: chooseTimeItemType[];

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

export type chooseTimeEmits = {
  /**  选中值时发生变化  */
  change?: (selected: string) => void;

  /**  失焦发生变化  */
  blur?: (event: FocusEvent) => void;
};

// 默认数据
const chooseTime: chooseTimeItemType[] | never = [];

for (const key in chooseTimeListType) {
  chooseTime.push({
    value: chooseTimeListType[key],
    label: chooseTimeType[chooseTimeListType[key]],
  });
}

export default chooseTime;

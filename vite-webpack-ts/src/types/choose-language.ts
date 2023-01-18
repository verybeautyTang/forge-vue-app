// 数据类型
export type LanguageType = {
  value: string;
  label: string;
};

export type LanguageProps = {
  /** 传入的数据 */
  projects: LanguageType[];

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

export type LanguageEmits = {
  /**  选中值时发生变化  */
  change?: (selected: string) => void;
};

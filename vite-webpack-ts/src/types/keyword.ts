export type keywordType = {
  /**占位符 */
  placeholder?: string;
  /**是否加载本地数据*/
  remoteOption?: string[];
  /** 默认选中数据 */
  value?: string;
  /** 大小 */
  size?: "large" | "medium" | "default";
  /** 是否可清除 */
  clear?: boolean;
  /** 是否显示前缀的按钮 */
  icon?: string;
};

export type keywordEmitType = {
  /** 点击事件以及是否显示按钮 */
  click?: () => void;
  /**  */
  blur?: () => void;
};

export interface PaginationProps {
  /** 是否显示背景 */
  isShowBackground?: boolean;
  /** 是否显示禁用 */
  disabled?: boolean;
  /** 一共多少页 */
  total: number | string;
  /** 当前页数 */
  currentPage: number | string;
  /** 当前显示条数 */
  currentSize: number | string;
}
export interface PaginationEmit {
  /** 页数大小改变 */
  handleSizeChange?: (val: number) => void;
  /** 分页 */
  handleCurrentChange?: (val: number) => void;
  /** 清空条数和页码 */
  clearAll?: () => void;
}

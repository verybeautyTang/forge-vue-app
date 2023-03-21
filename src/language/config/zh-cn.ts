export default {
  // 路由国际化
  route: {
    Home: "主页",
    OrderList: "订单管理",
    IssueOrder: "发起订单申请",
    CreateOrder: "发起订单申请",
    PendingOrder: "待处理订单",
    Myorder: "我的全部订单",
    OrderManager: "订单管理",
    QuantityMangement: "需求管理",
    QuantityList: "需求列表",
    SourceTextAudit: "源文本审核",
    QuantityDispose: "需求处理",
    TextAcceptance: "文本验收",
    BackMangement: "需求管理",
    AuthorityManagement: "人员管理",
    TranslatorManagement: "译者管理",
    OtherManagement: "其他管理",
  },
  issueOrder: {
    ProjectDemand: "项目需求",
    ProjectDetail: "含键值的游戏内文本翻译",
    TextDemand: "文本需求",
    TextDetail: "运营公告、社媒文案等纯文本翻译",
    SpecialDemand: "特殊需求",
    SpecialDetail: "含图片的PR稿、PPT、Excel等文件翻译",
  },
  createOrder: {
    Presenter: "发起人",
    RequirementType: "需求类型",
    SourceLanguage: "源语种",
    TargetLanguage: "目标语种",
    Project: "所属项目",
    Details: "填写需求详情",
    Remarks: "备注信息",
    Attachment: "参考附件",
    CurrentProject: "当前项目",

    DetailsTypes: "填写需求类型",
    CutOffTime: "截止日期",
  },

  /** 权限管理 */
  authManager: {
    "userId": "用户Id",
    "userName": "用户名",
    "name":"姓名",
    "authToken": "权限",
    "project":"所属项目",
    "language": "语言种类",
    "userType":"用户状态",    
  },
  /** 译者管理 */
  translatorManager: {
    "translatorId": "译者id",
    "translatorName": "账号",
    "company":"公司",
    "name": "姓名",
    "phone":"手机号",
    "language": "语言种类",
    "translationUnitPrice":"翻译单价", 
    "checkUnitPrice":"校对单价", 
    "CurrencyOfSettlement":"结算币种", 
  },
  /** 其他设置 */
  otherSettings: {
    title: "预警系统设置",
    newProjectReminder: "新项目需求提醒",
    newTextReminder: "新文本需求提醒",
    newSpecialReminder: "新特殊需求提醒",
    orderDeley: " 订单延期提醒",
    updateTime: "延期后每隔",
    remindTime: "提醒一次",
    updateButton: "更新设置",
  },

  // 登录页面国际化
  login: {
    title: "vue3-element-admin",
    username: "用户名",
    password: "密码",
    login: "登 录",
    code: "请输入验证码",
    copyright: "",
    icp: "",
    thirdPartyLogin: "第三方登录",
  },
  navbar: {
    dashboard: "首页",
    logout: "注销",
  },
};

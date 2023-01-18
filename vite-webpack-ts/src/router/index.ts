import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

// 订单管理
const orderManagement: Array<RouteRecordRaw> = [
  {
    path: "/order-management",
    name: "orderManagement",
    meta: {
      title: "订单管理",
      showType: [],
      icon: "home",
    },
    redirect: "/order-management/issue-order",
    children: [
      {
        path: "/issue-order",
        name: "issueOrder",
        meta: {
          title: "发起订单",
          showType: [],
        },
        component: () => import("../views/issueOrder/index.vue"),
      },
      {
        path: "/order-list",
        name: "orderList",
        meta: {
          title: "订单列表",
          showType: [],
        },
        component: () => import("../views/orderList/index.vue"),
      },
      {
        path: "/pending-order",
        name: "pendingOrder",
        meta: {
          title: "待处理订单",
          showType: [],
        },
        component: () => import("../views/pendingOrder/index.vue"),
      },
      {
        path: "/draft-order",
        name: "draftOrder",
        meta: {
          title: "草稿箱",
          showType: [],
        },
        component: () => import("../views/draftsOrder/index.vue"),
      },
    ],
  },
];
// 需求管理
const quantityMangement: Array<RouteRecordRaw> = [
  {
    path: "/quantity-mangement",
    name: "quantityMangement",
    meta: {
      title: "需求管理",
      showType: [],
      icon: "home",
    },
    redirect: "/quantity-mangement/quantity-list",
    children: [
      {
        path: "/quantity-list",
        name: "quantityList",
        meta: {
          title: "需求列表",
          showType: [],
        },
        component: () => import("../views/quantityList/index.vue"),
      },
      {
        path: "/source-ext-audit",
        name: "sourceTextAudit",
        meta: {
          title: "源文本审核",
          showType: [],
        },
        component: () => import("../views/sourceTextAudit/index.vue"),
      },
      {
        path: "/quantity-dispose",
        name: "quantityDispose",
        meta: {
          title: "需求处理",
          showType: [],
        },
        component: () => import("../views/quantityDispose/index.vue"),
      },
      {
        path: "/text-acceptance",
        name: "textAcceptance",
        meta: {
          title: "文本验收",
          showType: [],
        },
        component: () => import("../views/textAcceptance/index.vue"),
      },
    ],
  },
];
// 后台管理
const backMangement: Array<RouteRecordRaw> = [
  {
    path: "/back-mangement",
    name: "backMangement",
    meta: {
      title: "需求管理",
      showType: [],
      icon: "home",
    },
    redirect: "/back-mangement/authority-management",
    children: [
      {
        path: "/authority-management",
        name: "authorityManagement",
        meta: {
          title: "人员管理",
          showType: [],
        },
        component: () =>
          import("../views/authorityManagement/AuthorityManagement.vue"),
      },
      {
        path: "/translator-management",
        name: "translatorManagement",
        meta: {
          title: "译者管理",
          showType: [],
        },
        component: () => import("../views/translatorManagement/index.vue"),
      },
      {
        path: "/other-management",
        name: "otherManagement",
        meta: {
          title: "其他管理",
          showType: [],
        },
        component: () => import("../views/otherManagement/index.vue"),
      },
    ],
  },
];

// 项目管理

// 全部的路由
export const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: () => import("../components/layouts/LayoutBlank.vue"),
  //   meta: {
  //     showType: [],
  //     icon: "home",
  //   },
  //   children: [
  {
    path: "/",
    name: "dashboard",
    component: () => import("../views/dashboard/index.vue"),
    meta: {
      title: "主页",
      showType: [],
      icon: "home",
    },
  },
  {
    path: "/no-permission",
    name: "permission",
    component: () => import("../views/noPermission/index.vue"),
    meta: {
      title: "",
      showType: [],
    },
  },
  ...orderManagement,
  ...quantityMangement,
  ...backMangement,
];
//   },
// ];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
export const Layout = () => import("@/components/layouts/index.vue");

// 订单中心
const orderManagement: Array<RouteRecordRaw> = [
  {
    path: "/order-management",
    name: "orderManagement",
    component: Layout,
    meta: {
      title: "OrderList",
      showType: [],
      icon: "home",
    },
    redirect: "/order-management/issue-order",
    children: [
      {
        path: "/order-management/issue-order",
        name: "issueOrder",
        meta: {
          title: "IssueOrder",
          showType: [],
        },
        component: () => import("../views/issueOrder/index.vue"),
      },
      {
        path: "/order-management/create-order/:name/:edit",
        name: "createOrder",
        meta: {
          title: "CreateOrder",
          showType: [],
          hidden: true,
        },
        component: () => import("../views/createOrder/index.vue"),
      },
      {
        path: "/order-list",
        name: "orderList",
        meta: {
          title: "Myorder",
          showType: [],
        },
        component: () => import("../views/orderList/index.vue"),
      },
      {
        path: "/order-management/pending-order",
        name: "pendingOrder",
        meta: {
          title: "PendingOrder",
          showType: [],
        },
        component: () => import("../views/pendingOrder/index.vue"),
      },
      {
        path: "/order-management/draft-order",
        name: "orderManager",
        meta: {
          title: "OrderManager",
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
    component: Layout,
    meta: {
      title: "QuantityMangement",
      showType: [],
      icon: "home",
    },
    redirect: "/quantity-mangement/quantity-list",
    children: [
      {
        path: "/quantity-list",
        name: "quantityList",
        meta: {
          title: "QuantityList",
          showType: [],
        },
        component: () => import("../views/quantityList/index.vue"),
      },
      {
        path: "/quantity-mangement/source-ext-audit",
        name: "sourceTextAudit",
        meta: {
          title: "SourceTextAudit",
          showType: [],
        },
        component: () => import("../views/sourceTextAudit/index.vue"),
      },
      {
        path: "/quantity-mangement/quantity-dispose",
        name: "quantityDispose",
        meta: {
          title: "QuantityDispose",
          showType: [],
        },
        component: () => import("../views/quantityDispose/index.vue"),
      },
      {
        path: "/quantity-mangement/text-acceptance",
        name: "textAcceptance",
        meta: {
          title: "TextAcceptance",
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
    component: Layout,
    meta: {
      title: "BackMangement",
      showType: [],
      icon: "home",
    },
    redirect: "/back-mangement/authority-management",
    children: [
      {
        path: "/back-mangement/authority-management",
        name: "authorityManagement",
        meta: {
          title: "AuthorityManagement",
          showType: [],
        },
        component: () =>
          import("../views/authorityManagement/AuthorityManagement.vue"),
      },
      {
        path: "/back-mangement/translator-management",
        name: "translatorManagement",
        meta: {
          title: "TranslatorManagement",
          showType: [],
        },
        component: () => import("../views/translatorManagement/index.vue"),
      },
      {
        path: "/back-mangement/other-management",
        name: "otherManagement",
        meta: {
          title: "OtherManagement",
          showType: [],
        },
        component: () => import("../views/otherManagement/index.vue"),
      },
    ],
  },
];

// 项目管理

// 所有的静态路由
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
    component: Layout,
    // component: () => import("../views/dashboard/index.vue"),
    meta: {
      title: "Home",
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

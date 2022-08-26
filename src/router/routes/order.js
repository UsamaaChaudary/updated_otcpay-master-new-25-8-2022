export default [
  {
    path: "/order",
    component: () => import("@/views/order/search"),
    name: "order_search",
    meta: {
      title: "order.search",
    },
  },
  {
    path: "/order/create",
    component: () => import("@/views/order/create"),
    name: "order_create",
    meta: {
      title: "order.create",
    },
  },
];

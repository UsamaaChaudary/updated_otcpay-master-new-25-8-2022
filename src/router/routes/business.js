export default [{
    path: "/business",
    component: () => import("@/views/business/index"),
    name: "business",
    meta: {
        title: "menu.business"
    },
    children: []
}]
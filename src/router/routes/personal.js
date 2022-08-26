export default [{
    path: "/",
    component: () => import("@/views/personal/index"),
    name: "index",
    meta: {
        title: "menu.personal"
    },
    children: []
}]
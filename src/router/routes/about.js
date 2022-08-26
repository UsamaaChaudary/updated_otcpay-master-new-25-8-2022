export default [{
    path: "/about",
    component: () => import("@/views/about/index"),
    name: "about",
    meta: {
        title: "menu.about"
    },
    children: []
}]
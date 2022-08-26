export default [{
    path: "/contact",
    component: () => import("@/views/contact/index"),
    name: "contact",
    meta: {
        title: "menu.contact"
    },
    children: []
}]
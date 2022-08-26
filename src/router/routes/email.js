export default [{
    path: "/email",
    component: () => import("@/views/email/index"),
    name: "email",
    meta: {
        title: "menu.email"
    },
    children: []
}]
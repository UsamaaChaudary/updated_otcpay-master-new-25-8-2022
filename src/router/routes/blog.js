export default [{
    path: "/blog",
    component: () => import("@/views/blog/index"),
    name: "blog",
    meta: {
        title: "menu.blog"
    },
    children: []
},{
    path: "/blog/detail/:id",
    component: () => import("@/views/blog/detail"),
    name: "blog_detail",
    meta: {
        title: "menu.blog"
    },
    children: []
},
]
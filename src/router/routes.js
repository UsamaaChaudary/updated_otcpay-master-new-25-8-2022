import Layout from "@/layouts";
const _routes = require.context('./routes', true, /\.js$/);
let temp = [];
_routes.keys().map((k) => {
    temp = temp.concat(_routes(k).default)
});
export const routes = [...temp];

export default [{
        path: "",
        component: Layout,
        redirect: "/",
        children: [...routes],
    },
    {
        path: "/404",
        component: () => import("@/views/error/404"),
        hidden: true,
    },
    {
        path: "*",
        redirect: "/404",
    },
];
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
const _en = require.context('./en', true, /\.js$/);
const _cn = require.context('./cn', true, /\.js$/);
let tempEn = {};
let tempCn = {};
_en.keys().map((k) => {
    if (k.indexOf('index') < 0) {
        tempEn[k.replace('./', '').replace('.js', '')] = _en(k).default
    }
});
_cn.keys().map((k) => {
    if (k.indexOf('index') < 0) {
        tempCn[k.replace('./', '').replace('.js', '')] = _cn(k).default
    }
});
export default {
    en_us: {
        name: "English",
        ...tempEn,
        ...enLocale
    },
    zh_CN: {
        name: "Chinese",
        ...tempCn,
        ...zhLocale
    }
}
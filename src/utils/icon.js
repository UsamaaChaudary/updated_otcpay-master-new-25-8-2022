const icons = {
    usd: "meiguo-",
    btc: "shejiaotubiao-69",
    en_us: "meiguo-",
    zh_CN: "China",
}
export function getIcon(code) {
    return icons[code] || ""
}
export default getIcon
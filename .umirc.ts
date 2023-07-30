import { defineConfig } from "umi";
const { DEVAPI } = process.env;

export default defineConfig({
  autoCSSModules: true,
  hash: true,
  title: "网站",
  proxy: {
    // 匹配 /api 前缀的地址
    "/api": {
      target: DEVAPI,
      changeOrigin: true,
      // /api 替换为 ''
      pathRewrite: { "^/api": "" },
    },
  },
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    { path: "/*", layout: false, component: "@/pages/404.tsx" },
  ],
  npmClient: "yarn",
  plugins: [
    "@umijs/plugins/dist/dva",
    "@umijs/plugins/dist/locale",
    "@umijs/plugins/dist/request",
  ],
  dva: {},
  request: {
    dataField: "data",
  },
  locale: {
    default: "zh-CN",
    baseSeparator: "-",
  },
});

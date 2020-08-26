"use strict";
exports.__esModule = true;
var react_1 = require("react");
// import WithLazyLoad from './utils/WithLazyLoad/WithLazyLoad';
var react_router_dom_1 = require("react-router-dom");
// import { lazy } from './utils/declare';
var UtilScreen_1 = require("./utils/UtilScreen");
require("./assets/less/App.less");
var ScrollPage_1 = require("./pages/ScrollPage/ScrollPage");
// import Aqicn from './pages/Aqicn/Aqicn';
// 懒加载各个页面 test
// import FdHome from "./pages/FdHome/FdHome";
// const ScrollPage = WithLazyLoad(lazy(async () => import("./pages/ScrollPage/ScrollPage")));
// const CreateScene = WithLazyLoad(lazy(async () => import("./pages/ch01CreateScene/CreateScene")));
// const BaseMap = WithLazyLoad(lazy(async () => import("./pages/BaseMap/BaseMap")));
// const TestPage = WithLazyLoad(lazy(async () => import("./pages/TestPage/TestPage")));
// const TestCom = WithLazyLoad(lazy(async () => import("./pages/TestCom/TestCom")));
function App() {
    // 第一次渲染后执行，仅执行一次
    react_1.useEffect(function () {
        window.onresize = setHtmlFontSize;
        setHtmlFontSize();
        console.log("test");
    }, []);
    // 调整字体大小
    var setHtmlFontSize = function () {
        // 获取Doc的文字的大小
        var docEl = document.documentElement;
        var fontSize = UtilScreen_1["default"].getDocElFontSize();
        fontSize && (docEl.style.fontSize = fontSize + "px");
    };
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_dom_1.Switch, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", exact: true, component: ScrollPage_1.ScrollPage }))));
}
exports["default"] = App;

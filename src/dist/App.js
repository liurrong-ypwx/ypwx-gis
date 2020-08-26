"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var WithLazyLoad_1 = require("./utils/WithLazyLoad/WithLazyLoad");
var react_router_dom_1 = require("react-router-dom");
var declare_1 = require("./utils/declare");
var UtilScreen_1 = require("./utils/UtilScreen");
require("./assets/less/App.less");
// import Aqicn from './pages/Aqicn/Aqicn';
// 懒加载各个页面
// import FdHome from "./pages/FdHome/FdHome";
var ScrollPage = WithLazyLoad_1["default"](declare_1.lazy(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, Promise.resolve().then(function () { return require("./pages/ScrollPage/ScrollPage"); })];
}); }); }));
// const CreateScene = WithLazyLoad(lazy(async () => import("./pages/ch01CreateScene/CreateScene")));
// const BaseMap = WithLazyLoad(lazy(async () => import("./pages/BaseMap/BaseMap")));
// const TestPage = WithLazyLoad(lazy(async () => import("./pages/TestPage/TestPage")));
// const TestCom = WithLazyLoad(lazy(async () => import("./pages/TestCom/TestCom")));
function App() {
    // 第一次渲染后执行，仅执行一次
    react_1.useEffect(function () {
        window.onresize = setHtmlFontSize;
        setHtmlFontSize();
        // 
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
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", exact: true, component: ScrollPage }))));
}
exports["default"] = App;

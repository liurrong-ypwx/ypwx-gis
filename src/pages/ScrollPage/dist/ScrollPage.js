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
exports.ScrollPage = void 0;
var react_1 = require("react");
var mapApi = require("../../utils/map/mapApi");
require("whatwg-fetch");
require("./ScrollPage.less");
// import html2canvas from 'html2canvas';
var mapData;
exports.ScrollPage = function () {
    var mapRef = react_1.useRef(); // 2020-07-22 粉刷匠 地图容器
    var _a = react_1.useState(""), orgMap = _a[0], setOrgMap = _a[1];
    var _b = react_1.useState([]), pointData = _b[0], setPointData = _b[1];
    // 第一次渲染后执行，仅执行一次
    react_1.useEffect(function () {
        // 加载地图数据
        loadMapData();
        // eslint-disable-next-line
    }, []);
    // 2020-07-22 粉刷匠 加载地图数据
    var loadMapData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var map;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mapApi.initMap(mapRef)];
                case 1:
                    map = _a.sent();
                    setOrgMap(map);
                    mapData = map;
                    // 添加aqicn 点数据
                    loadAqiData();
                    return [2 /*return*/];
            }
        });
    }); };
    // 2020-07-22 粉刷匠 添加aqicn 点数据
    var loadAqiData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var tmpData;
        return __generator(this, function (_a) {
            tmpData = {
                "status": "ok",
                "data": [
                    { "lat": 22.590807, "lon": 114.262078, "uid": 914, "aqi": "51", "station": { "name": "Yantian, Shenzhen (盐田)", "time": "2020-08-25T13:00:00+08:00" } },
                    { "lat": 22.7422, "lon": 114.5317, "uid": 815, "aqi": "60", "station": { "name": "Daya bay management committee, Huizhou (惠州大亚湾管委会)", "time": "2020-08-25T14:00:00+08:00" } },
                    { "lat": 22.543099, "lon": 114.057868, "uid": 1539, "aqi": "68", "station": { "name": "Shenzhen (深圳)", "time": "2020-08-25T14:00:00+08:00" } },
                    { "lat": 22.575856, "lon": 113.862238, "uid": 916, "aqi": "50", "station": { "name": "Kwai Chung, Shenzhen (西乡)", "time": "2020-08-25T10:00:00+08:00" } },
                    { "lat": 22.4509766, "lon": 114.1641396, "uid": 2565, "aqi": "50", "station": { "name": "Tai Po, HongKong (大埔)", "time": "2020-08-25T14:00:00+08:00" } },
                    { "lat": 22.8172, "lon": 114.3244, "uid": 9850, "aqi": "66", "station": { "name": "huìyángqū chéng xiūlù chuán hú, Huizhou (惠州惠阳区承修路船湖)", "time": "2020-08-25T14:00:00+08:00" } },
                    { "lat": 22.542454, "lon": 113.987495, "uid": 927, "aqi": "61", "station": { "name": "OCT, Shenzhen (华侨城)", "time": "2020-08-25T14:00:00+08:00" } },
                    { "lat": 22.696848, "lon": 114.04539, "uid": 931, "aqi": "53", "station": { "name": "Mission Hills, Shenzhen (观澜)", "time": "2020-08-25T14:00:00+08:00" } },
                    { "lat": 22.471249, "lon": 114.360804, "uid": 2566, "aqi": "47", "station": { "name": "Tap Mun, HongKong (塔門)", "time": "2020-08-25T14:00:00+08:00" } },
                    { "lat": 22.528186, "lon": 114.496906, "uid": 921, "aqi": "53", "station": { "name": "Nan'aozhen, Shenzhen (南澳)", "time": "2020-08-25T14:00:00+08:00" } },
                    { "lat": 22.598902, "lon": 114.313483, "uid": 922, "aqi": "44", "station": { "name": "Meisha, Shenzhen (梅沙)", "time": "2020-08-25T13:00:00+08:00" } },
                    { "lat": 22.5500005, "lon": 114.0960791, "uid": 925, "aqi": "52", "station": { "name": "Liyuan, Shenzhen (荔园)", "time": "2020-08-25T14:00:00+08:00" } },
                    { "lat": 22.562334, "lon": 114.116872, "uid": 928, "aqi": "57", "station": { "name": "Honghu, Shenzhen (洪湖)", "time": "2020-08-25T14:00:00+08:00" } },
                    { "lat": 22.720358, "lon": 114.247468, "uid": 924, "aqi": "68", "station": { "name": "Xi xiang, Shenzhen (龙岗)", "time": "2020-08-25T14:00:00+08:00" } },
                    { "lat": 22.630626, "lon": 114.423948, "uid": 926, "aqi": "65", "station": { "name": "Kwai Chung, Shenzhen (葵涌)", "time": "2020-08-25T14:00:00+08:00" } },
                    { "lat": 22.516847, "lon": 113.923192, "uid": 920, "aqi": "53", "station": { "name": "Nanyou, Shenzhen (南油)", "time": "2020-08-25T14:00:00+08:00" } }
                ]
            };
            loadSzAqiPoint(tmpData.data);
            return [2 /*return*/];
        });
    }); };
    // 2020-07-22 粉刷匠 添加深圳大气监测点状况
    var loadSzAqiPoint = function (data) {
        // 更新数据并添加点图层到地图中
        if (data && data.length) {
            setPointData(data);
            console.log("orgMap", orgMap);
            console.log("pointdata", pointData);
            if (mapData) {
                mapApi.addPointGraphicLayer(data, mapData);
            }
        }
        else {
            setPointData([]);
        }
        // (data && data.length) ? setPointData(data) : setPointData([]);
    };
    // useEffect(() => {
    //     // 懒加载
    //     loadModules([
    //         'esri/Map',
    //         'esri/views/MapView',
    //         "esri/Graphic",
    //         "esri/layers/GraphicsLayer"
    //     ]).then(([ArcGISMap, MapView, Graphic, GraphicsLayer]) => {
    //         const map = new ArcGISMap({
    //             basemap: "topo-vector"
    //         });
    //         const view = new MapView({
    //             container: mapRef.current,
    //             map: map,
    //             center: [114.2, 22.6],
    //             zoom: 10
    //         });
    //         view.ui.remove('attribution')// 清除底部powered by ESRI
    //         for (let i = 0; i < pointData.length; i++) {
    //             // debugger;
    //             console.log("pointData", i, pointData[i]);
    //         }
    //         let point = {
    //             type: "point",
    //             longitude: 113.862238,
    //             latitude: 22.575856,
    //         }
    //         let simpleMarkerSymbol = {
    //             type: "simple-marker",
    //             color: [226, 119, 40],
    //             outline: {
    //                 color: [255, 255, 255],
    //                 width: 1
    //             }
    //         };
    //         let popupTemplate = {
    //             title: "测试点01",
    //             content: "这是一个测试点"
    //         };
    //         let pointGraphic = new Graphic({
    //             geometry: point,
    //             symbol: simpleMarkerSymbol,
    //             popupTemplate: popupTemplate
    //         });
    //         let graphicsLayer = new GraphicsLayer();
    //         map.add(graphicsLayer);
    //         graphicsLayer.add(pointGraphic);
    //         setBaseMap(map);
    //         return () => {
    //             if (view) {
    //                 view.container = null;
    //             }
    //         }
    //     })
    // },[]);
    // 粉刷匠 试图导出数据
    var exportData = function () {
        // html2canvas(document.getElementById("webmap") as HTMLElement).then(function (canvas) {
        //     document.body.appendChild(canvas);
        // });
    };
    return (react_1["default"].createElement("div", { className: "scrollpage-container" },
        react_1["default"].createElement("div", { className: "sp-top" },
            "test001",
            react_1["default"].createElement("div", { className: "btn-export", onClick: function () { exportData(); } }, "\u5BFC\u51FA")),
        react_1["default"].createElement("div", { className: "sp-bot" },
            react_1["default"].createElement("div", { className: "sp-bot-left" }, "test001"),
            react_1["default"].createElement("div", { className: "sp-bot-right" },
                react_1["default"].createElement("div", { id: "webmap", className: "webmap", ref: mapRef })))));
};

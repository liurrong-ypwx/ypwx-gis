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
exports.addPointGraphicLayer = exports.initMap = void 0;
var esri_api_1 = require("./esri-api");
var GISApi;
// 2020-07-22 粉刷匠 初始化地图
exports.initMap = function (mapRef) { return __awaiter(void 0, void 0, void 0, function () {
    var map, view;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, esri_api_1.InitGISApi()];
            case 1:
                GISApi = _a.sent();
                map = new GISApi.Map({
                    basemap: "topo-vector"
                });
                view = new GISApi.Mapview({
                    container: mapRef.current,
                    map: map,
                    center: [114.2, 22.6],
                    zoom: 10
                });
                view.ui.remove('attribution'); // 清除底部powered by ESRI
                return [2 /*return*/, map];
        }
    });
}); };
// 2020-07-22 粉刷匠 添加点图层数据
exports.addPointGraphicLayer = function (pointArr, map) {
    if (map) {
        var graphicsLayer = new GISApi.GraphicsLayer();
        map.add(graphicsLayer);
        for (var i = 0; i < pointArr.length; i++) {
            if (!(pointArr[i].lat && pointArr[i].lon))
                return;
            var point = { type: "point", longitude: pointArr[i].lon, latitude: pointArr[i].lat };
            var simpleMarkerSymbol = {
                type: "simple-marker",
                color: [226, 119, 40],
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            };
            var popupTemplate = {
                title: "\u6D4B\u70B9\u540D\u79F0\uFF1A" + pointArr[i].station.name,
                content: "\u7A7A\u6C14\u8D28\u91CF\u6307\u6570\uFF1A" + pointArr[i].aqi
            };
            var pointGraphic = new GISApi.Graphic({
                geometry: point,
                symbol: simpleMarkerSymbol,
                popupTemplate: popupTemplate
            });
            graphicsLayer.add(pointGraphic);
        }
    }
};

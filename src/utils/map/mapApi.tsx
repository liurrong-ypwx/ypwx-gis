import { InitGISApi, IGISApi } from "./esri-api";

let GISApi: IGISApi;

// 2020-07-22 粉刷匠 初始化地图
export const initMap = async (mapRef: any) => {
    GISApi = await InitGISApi();
    const map = new GISApi.Map({
        basemap: "topo-vector"
    })
    const view = new GISApi.Mapview({
        container: mapRef.current,
        map: map,
        center: [114.2, 22.6],
        zoom: 10
    });
    view.ui.remove('attribution')// 清除底部powered by ESRI
    return map;
}

// 2020-07-22 粉刷匠 添加点图层数据
export const addPointGraphicLayer = (pointArr: any, map: any) => {
    if (map) {

        let graphicsLayer = new GISApi.GraphicsLayer();
        map.add(graphicsLayer);

        for (let i = 0; i < pointArr.length; i++) {

            if (!(pointArr[i].lat && pointArr[i].lon)) return;

            let point = { type: "point", longitude: pointArr[i].lon, latitude: pointArr[i].lat };
            let simpleMarkerSymbol = {
                type: "simple-marker",
                color: [226, 119, 40],
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            };
            let popupTemplate = {
                title: `测点名称：${pointArr[i].station.name}`,
                content: `空气质量指数：${pointArr[i].aqi}`
            };
            let pointGraphic = new GISApi.Graphic({
                geometry: point,
                symbol: simpleMarkerSymbol,
                popupTemplate: popupTemplate
            });            
            graphicsLayer.add(pointGraphic);

        }
    }
}
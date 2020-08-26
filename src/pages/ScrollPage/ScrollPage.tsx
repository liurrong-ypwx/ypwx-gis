import React, { useRef, useEffect, useState } from "react";
import * as mapApi from "../../utils/map/mapApi";
import "whatwg-fetch";
import "./ScrollPage.less";
// import html2canvas from 'html2canvas';

let mapData: any;
export const ScrollPage = () => {

    const mapRef: any = useRef();  // 2020-07-22 粉刷匠 地图容器
    const [orgMap, setOrgMap] = useState("");
    const [pointData, setPointData] = useState([]);

    // 第一次渲染后执行，仅执行一次
    useEffect(() => {

        // 加载地图数据
        loadMapData();

        // eslint-disable-next-line
    }, [])

    // 2020-07-22 粉刷匠 加载地图数据
    const loadMapData = async () => {
        const map = await mapApi.initMap(mapRef);
        setOrgMap(map);
        mapData = map;

        // 添加aqicn 点数据
        loadAqiData();
    }

    // 2020-07-22 粉刷匠 添加aqicn 点数据
    const loadAqiData = async () => {
        // 单个城市
        // const url = "https://api.waqi.info/feed/shanghai/?token=19776e0b379e0a6f7c0d85303cea703a5ee46281";
        // 一片城市
        // const url = "https://api.waqi.info/map/bounds/?latlng=22.448,113.748,22.895,114.683&token=19776e0b379e0a6f7c0d85303cea703a5ee46281";
        // fetch(url)
        //     .then((res: any) => { if (res.ok) { return res.json(); } })
        //     .then((myJson: any) => { console.log(myJson); loadSzAqiPoint(myJson.data) })
        //     .catch((err: any) => { console.log("err", err); })

        const tmpData = {
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
                { "lat": 22.516847, "lon": 113.923192, "uid": 920, "aqi": "53", "station": { "name": "Nanyou, Shenzhen (南油)", "time": "2020-08-25T14:00:00+08:00" } }]
        };
        loadSzAqiPoint(tmpData.data);

    }

    // 2020-07-22 粉刷匠 添加深圳大气监测点状况
    const loadSzAqiPoint = (data: any) => {
        // 更新数据并添加点图层到地图中
        if (data && data.length) {
            setPointData(data);
            console.log("orgMap",orgMap);
            console.log("pointdata",pointData);
            if (mapData) {
                mapApi.addPointGraphicLayer(data, mapData);
            }
        } else {
            setPointData([]);
        }
        // (data && data.length) ? setPointData(data) : setPointData([]);

    }



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
    const exportData=()=>{
        // html2canvas(document.getElementById("webmap") as HTMLElement).then(function (canvas) {
        //     document.body.appendChild(canvas);
        // });
    }

   

    return (
        <div className="scrollpage-container">
            <div className="sp-top">
                test001
                <div className="btn-export" onClick={() => { exportData() }}> 
                    导出
                </div>
             </div>
            <div className="sp-bot">
                <div className="sp-bot-left">test001</div>
                <div className="sp-bot-right">
                    <div id="webmap" className="webmap" ref={mapRef} />
                </div>
            </div>

        </div>
    )

}


import { loadModules, loadCss } from "esri-loader";

export interface IGISApi {
    Map: any;
    Mapview: any;
    Graphic: any;
    GraphicsLayer: any;
}

export const InitGISApi = async () => {
    loadCss();
    const [
        Map,
        MapView,
        Graphic,
        GraphicsLayer
    ] = await loadModules([
        'esri/Map',
        'esri/views/MapView',
        "esri/Graphic",
        "esri/layers/GraphicsLayer"
    ]);

    let tmpData: IGISApi = {
        Map: Map,
        Mapview: MapView,
        Graphic: Graphic,
        GraphicsLayer: GraphicsLayer
    };
    return tmpData;

}
import $ from "jquery";


// 获取AQI的token,需要注册
// const AqiToken = "19776e0b379e0a6f7c0d85303cea703a5ee46281";

const AqiFeed = {

    getAqi: (city: string) => {

        // const tmpUrl = "https://api.waqi.info/feed/" + city + "/?token=" + AqiToken;
        const tmpUrl = "https://api.waqi.info/feed/beijing/?token=19776e0b379e0a6f7c0d85303cea703a5ee46281";
        $.getJSON(tmpUrl)
            .then((res: any) => {
                return res;
            })
            .catch((err: any) => {
                console.log("加载数据失败")
            })
    }
}

export default AqiFeed;
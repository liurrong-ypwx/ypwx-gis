import React, { useEffect } from "react";
import AqiFeed from "./AqiFeed";


// declare const aqiFeed:any;
function Aqicn():JSX.Element{

    // 仅执行一次的函数
    useEffect(()=>{

        // 处理pm2.5
        processPm();

    },[])

    // 处理PM2.5
    const processPm = () => {
        const tmp = AqiFeed.getAqi("beijing");
        console.log(tmp);
    }


    return(
        <div>
            <div>aqi</div>
        </div>
    )
}

export default Aqicn;
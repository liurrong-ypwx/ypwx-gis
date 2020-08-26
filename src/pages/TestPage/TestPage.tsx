import React, { useEffect, useState } from "react";
import "./TestPage.less";
import { Button } from "antd";
import { loginApi } from "../../comm/ApiGroup";
import UtilRoles from "../../utils/UtilRoles";

function TestPage(): JSX.Element {

    const [aline, setaLine] = useState("wrong data");
    const [bline, setbLine] = useState("wrong code data");
    
    useEffect(() => {

        console.log(loginApi.login);
        // 测试身份证及统一社会信用代码
        testRoles();

    }, [])

    const testRoles = () => {
        const textNum="372925199410024527";
        const isRight=UtilRoles.checkIdCard(textNum);
        if(isRight){
            setaLine("right data");
        }

        const textNum02="91512081MA62K0260E";
        const isRight02 = UtilRoles.checkSocialUniCode(textNum02);
        if(isRight02){
            setbLine("right code data");
        }
    }

    return (
        <div className="testPage">
            hello testpage
            <Button type="primary">测试的antd按钮</Button>
            <div>测试iconfont</div>
            <i className="iconfont iconicon-test" />
            <i className="iconfont">&#xe635;</i>

            <div>{aline}</div>
            <div>{bline}</div>
        </div>
    )
}

export default TestPage;
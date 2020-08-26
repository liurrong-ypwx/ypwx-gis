"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./TestPage.less");
var antd_1 = require("antd");
var ApiGroup_1 = require("../../comm/ApiGroup");
var UtilRoles_1 = require("../../utils/UtilRoles");
function TestPage() {
    var _a = react_1.useState("wrong data"), aline = _a[0], setaLine = _a[1];
    var _b = react_1.useState("wrong code data"), bline = _b[0], setbLine = _b[1];
    react_1.useEffect(function () {
        console.log(ApiGroup_1.loginApi.login);
        // 测试身份证及统一社会信用代码
        testRoles();
    }, []);
    var testRoles = function () {
        var textNum = "372925199410024527";
        var isRight = UtilRoles_1["default"].checkIdCard(textNum);
        if (isRight) {
            setaLine("right data");
        }
        var textNum02 = "91512081MA62K0260E";
        var isRight02 = UtilRoles_1["default"].checkSocialUniCode(textNum02);
        if (isRight02) {
            setbLine("right code data");
        }
    };
    return (react_1["default"].createElement("div", { className: "testPage" },
        "hello testpage",
        react_1["default"].createElement(antd_1.Button, { type: "primary" }, "\u6D4B\u8BD5\u7684antd\u6309\u94AE"),
        react_1["default"].createElement("div", null, "\u6D4B\u8BD5iconfont"),
        react_1["default"].createElement("i", { className: "iconfont iconicon-test" }),
        react_1["default"].createElement("i", { className: "iconfont" }, "\uE635"),
        react_1["default"].createElement("div", null, aline),
        react_1["default"].createElement("div", null, bline)));
}
exports["default"] = TestPage;

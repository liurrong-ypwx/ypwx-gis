"use strict";
exports.__esModule = true;
var UtilRoles = {
    // 身份证校验
    checkIdCard: function (idCard) {
        // areaCode:地区码  checkCode：最后一位的校验码
        var areaCode = [11, 12, 13, 14, 15, 21, 22, 23, 31, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44, 45, 46, 50, 51, 52, 53, 54, 61, 62, 63, 64, 65, 71, 81, 82, 91];
        var checkCode = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
        if (idCard.length === 15) { // 如果是15位的身份证号码
            // 判断地区码
            var idCardAreaCode = parseInt(idCard.substr(0, 2));
            if (areaCode.indexOf(idCardAreaCode) === -1) {
                return false;
            }
            // 判断时间
            var borthYear = parseInt(idCard.substr(6, 2)) + 1900;
            var isRunNian = (borthYear % 400 === 0) || (borthYear % 100 !== 0 && borthYear % 4 === 0);
            var regStr = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;
            if (isRunNian) {
                regStr = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;
            }
            if (!idCard.match(regStr)) {
                return false;
            }
            return true;
        }
        else if (idCard.length === 18) { // 如果是18位的身份证号码
            // 判断地区码
            var idCardAreaCode = parseInt(idCard.substr(0, 2));
            if (areaCode.indexOf(idCardAreaCode) === -1) {
                return false;
            }
            // 判断时间
            var borthYear = parseInt(idCard.substr(6, 4));
            var isRunNian = (borthYear % 400 === 0) || (borthYear % 100 !== 0 && borthYear % 4 === 0);
            var regStr = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;
            if (isRunNian) {
                regStr = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;
            }
            if (!idCard.match(regStr)) {
                return false;
            }
            // 判断最后一位---校验码
            var sumIdCard = (parseInt(idCard.substr(0, 1)) + parseInt(idCard.substr(10, 1))) * 7 +
                (parseInt(idCard.substr(1, 1)) + parseInt(idCard.substr(11, 1))) * 9 +
                (parseInt(idCard.substr(2, 1)) + parseInt(idCard.substr(12, 1))) * 10 +
                (parseInt(idCard.substr(3, 1)) + parseInt(idCard.substr(13, 1))) * 5 +
                (parseInt(idCard.substr(4, 1)) + parseInt(idCard.substr(14, 1))) * 8 +
                (parseInt(idCard.substr(5, 1)) + parseInt(idCard.substr(15, 1))) * 4 +
                (parseInt(idCard.substr(6, 1)) + parseInt(idCard.substr(16, 1))) * 2 +
                parseInt(idCard.substr(7, 1)) * 1 + parseInt(idCard.substr(8, 1)) * 6 +
                parseInt(idCard.substr(9, 1)) * 3;
            var modNum = checkCode[sumIdCard % 11];
            if (modNum !== idCard.substr(17, 1).toUpperCase()) {
                return false;
            }
            return true;
        }
        else {
            return false;
        }
    },
    // 统一社会信用代码校验
    checkSocialUniCode: function (uniCode) {
        // 假如不是18位，错误
        if (uniCode.length !== 18) {
            return false;
        }
        // 统一社会信用代码由18位阿拉伯数字或英文大写字母表示（不包括I,O,Z,S,V以防止和阿拉伯字母混淆）-->V：？？？关我毛事？
        var UpUniCode = uniCode.toUpperCase();
        if (UpUniCode.indexOf("I") !== -1) {
            return false;
        }
        if (UpUniCode.indexOf("O") !== -1) {
            return false;
        }
        if (UpUniCode.indexOf("Z") !== -1) {
            return false;
        }
        if (UpUniCode.indexOf("S") !== -1) {
            return false;
        }
        if (UpUniCode.indexOf("V") !== -1) {
            return false;
        }
        // （组织机构代码）校验
        var orgCheckCode = [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
            'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ];
        var orgWeight = [3, 7, 9, 10, 5, 8, 4, 2];
        var orgCode = uniCode.substr(8, 9);
        var sumOrg = 0;
        for (var i = 0; i < 8; i++) {
            var tmpAttr = orgCode[i];
            var tmpCode = orgCheckCode.indexOf(tmpAttr);
            var tmpWeight = orgWeight[i];
            sumOrg += (tmpCode * tmpWeight);
        }
        var modOrg = 11 - sumOrg % 11;
        var modOrgLast = (modOrg === 10) ? "X" : ((modOrg === 11) ? "0" : ("" + modOrg));
        if (modOrgLast !== orgCode[8]) {
            return false;
        }
        // 最后一位的校验
        var uniCheckCode = [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q',
            'R', 'T', 'U', 'W', 'X', 'Y'
        ];
        var uniCodeWeight = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28];
        var sumUniCode = 0;
        for (var i = 0; i < 17; i++) {
            var tmpAttr = uniCode[i];
            var tmpCode = uniCheckCode.indexOf(tmpAttr);
            var tmpWeight = uniCodeWeight[i];
            sumUniCode += (tmpCode * tmpWeight);
        }
        var modOrgUni = 31 - sumUniCode % 31;
        var modOrgUniLast = orgCheckCode[modOrgUni];
        if (modOrgUniLast !== uniCode[17]) {
            return false;
        }
        return true;
    }
};
exports["default"] = UtilRoles;

let sysEnv = "Dev"; // 环境：(Dev:开发环境；Test:测试环境)

// 路由前缀
let urlQz = {
    auth: "",
    login: ""
}

// 根据环境改变路由
if (sysEnv === "Dev") {
    urlQz.auth = "test/auth";
    urlQz.login = "http://127.0.0.1/1234";
} else if (sysEnv === "Test") {
    urlQz.auth = "test/auth";
    urlQz.login = "http://127.0.0.1/1235";
}
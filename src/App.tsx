import React, { useEffect } from 'react';
// import WithLazyLoad from './utils/WithLazyLoad/WithLazyLoad';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { lazy } from './utils/declare';
import UtilScreen from './utils/UtilScreen';
import "./assets/less/App.less";
import { ScrollPage } from './pages/ScrollPage/ScrollPage';
// import Aqicn from './pages/Aqicn/Aqicn';

// 懒加载各个页面 test
// import FdHome from "./pages/FdHome/FdHome";
// const ScrollPage = WithLazyLoad(lazy(async () => import("./pages/ScrollPage/ScrollPage")));
// const CreateScene = WithLazyLoad(lazy(async () => import("./pages/ch01CreateScene/CreateScene")));
// const BaseMap = WithLazyLoad(lazy(async () => import("./pages/BaseMap/BaseMap")));
// const TestPage = WithLazyLoad(lazy(async () => import("./pages/TestPage/TestPage")));
// const TestCom = WithLazyLoad(lazy(async () => import("./pages/TestCom/TestCom")));

function App() {

  // 第一次渲染后执行，仅执行一次
  useEffect(() => {
    window.onresize = setHtmlFontSize;
    setHtmlFontSize();
    console.log("test");
  }, [])

  // 调整字体大小
  const setHtmlFontSize = () => {

    // 获取Doc的文字的大小
    let docEl = document.documentElement as any;
    let fontSize = UtilScreen.getDocElFontSize();
    fontSize && (docEl.style.fontSize = fontSize + "px");
  }

  return (
    <BrowserRouter>
      <Switch>        
        <Route path={"/"} exact={true} component={ScrollPage} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;

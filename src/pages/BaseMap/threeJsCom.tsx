import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";

import $ from "jquery";

// 开门的状态
let door_state_left1 = true; //默认是门是关闭的

const ThreeJsComposer = (renderer: any, scene: any, camera: any) => {

    let raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();
    let composer = new EffectComposer(renderer);
    let renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
    let selectedObjects: Array<any> = [];
    let outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera);
    outlinePass.edgeStrength = 5;//包围线浓度
    outlinePass.edgeGlow = 0.5;//边缘线范围
    outlinePass.edgeThickness = 2;//边缘线浓度
    outlinePass.pulsePeriod = 2;//包围线闪烁频率
    outlinePass.visibleEdgeColor.set('#ffffff');//包围线颜色
    outlinePass.hiddenEdgeColor.set('#190a05');//被遮挡的边界线颜色
    composer.addPass(outlinePass);
    let effectFXAA: any;
    effectFXAA = new ShaderPass(FXAAShader);
    effectFXAA.uniforms['resolution'].value.set(1 / window.innerWidth, 1 / window.innerHeight);
    effectFXAA.renderToScreen = true;
    composer.addPass(effectFXAA);

    window.addEventListener('click', onMouseClick);

    function onMouseClick(event: any) {
        let x, y;
        if (event.changedTouches) {
            x = event.changedTouches[0].pageX;
            y = event.changedTouches[0].pageY;
        } else {
            x = event.clientX;
            y = event.clientY;
        }
        mouse.x = (x / window.innerWidth) * 2 - 1;
        mouse.y = - (y / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        let intersects = raycaster.intersectObjects([scene], true);

        if (intersects.length === 0) {
            $("#label").attr("style", "display:none;");//隐藏说明性标签
            return;
        }
        if (intersects[0].object.name === "地面" || (intersects[0].object.name === "") || (intersects[0].object.name === "墙面")) {
            $("#label").attr("style", "display:none;");//隐藏说明性标签
            selectedObjects.pop();
        } else {
            $("#label").attr("style", "display:block;");// 显示说明性标签
            $("#label").css({ left: x, top: y - 40 });// 修改标签的位置
            $("#label").text(intersects[0].object.name);// 显示模型信息

            // if (intersects[0].object.name === "左门1") {
            //     if (door_state_left1) {
            //         new TWEEN.Tween(intersects[0].object.rotation).to({
            //             y: -0.5 * Math.PI
            //         }, 5000).easing(TWEEN.Easing.Elastic.Out).onComplete(function () {
            //         }).start();
            //         door_state_left1 = false;

            //     }
            // }

            selectedObjects.pop();
            selectedObjects.push(intersects[0].object);
            outlinePass.selectedObjects = selectedObjects;//给选中的线条和物体加发光特效
        }
    }

    return composer;
}

export default ThreeJsComposer;

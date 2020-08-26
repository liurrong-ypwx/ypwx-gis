import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import ThreeJsComposer from "./threeJsCom";
import floorImg from "../../assets/images/threejs/floor.jpg";
import doorLeImg from "../../assets/images/threejs/door_left.png";
import doorRiImg from "../../assets/images/threejs/door_right.png";
import windowImg from "../../assets/images/threejs/window.png";
import "./BaseMap.less";
const ThreeBSP = require("tthreebsp")(THREE);

function BaseMap(): JSX.Element {

    // 定义先
    let scene: any;
    let camera: any;
    let renderer: any;
    let controls: any;
    let light: any;
    let composer: any;
    let matArrayA = [] as any; //内墙
    let matArrayB = [] as any; //外墙
    let group = new THREE.Group();

    useEffect(() => {
        initThree();
        animate();
        // eslint-disable-next-line
    }, []);

    // 初始化基础信息
    const initThree = () => {
        // 初始化场景
        initScence();
        // 初始化相机
        initCamera();
        // 开始绘制
        startDeco();

        // 初始化灯光
        initLight();
        // 初始化渲染器
        initRenderer();
        // 初始化轨迹球控件
        initControls();

        // 添加选中时的蒙版
        composer = ThreeJsComposer(renderer, scene, camera);
    };
    // 初始化场景
    const initScence = () => {
        scene = new THREE.Scene();
    };
    // 初始化相机
    const initCamera = () => {
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
        camera.position.set(0, 800, 1500);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
    };
    // 初始化灯光
    const initLight = () => {
        let directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);//模拟远处类似太阳的光源
        directionalLight.color.setHSL(0.1, 1, 0.95);
        directionalLight.position.set(0, 200, 0).normalize();
        scene.add(directionalLight);

        let ambient = new THREE.AmbientLight(0xffffff, 1); //AmbientLight,影响整个场景的光源
        ambient.position.set(0, 0, 0);
        scene.add(ambient);
    };
    // 初始化渲染器
    const initRenderer = () => {
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x4682B4, 1.0);
        let container = document.getElementById("myThreeWrip") as HTMLElement;
        container.appendChild(renderer.domElement);
    };
    // 初始化轨迹球
    const initControls = () => {
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.5;
        // 视角最小距离
        controls.minDistance = 100;
        // 视角最远距离
        controls.maxDistance = 5000;
        // 最大角度
        controls.maxPolarAngle = Math.PI / 2.2;
    };
    // 动画
    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        composer.render();
        update();

    };

    const update = () => {
        controls.update();
    }

    // 开始点缀
    const startDeco = () => {

        // 添加地板
        createFloor();
        // 创建墙
        createWall();
        // 创建门和窗户
        createDoorWin();
        // 添加一个球
        addBALL();
    };

    // 目标：添加一个会发光的球
    const addBALL = () => {
        let sphere = new THREE.SphereGeometry(16, 40, 40);
        let sphereMat = new THREE.MeshLambertMaterial({
            color: 0x0000FF,
            wireframe: false,
        })
        let sphereMesh = new THREE.Mesh(sphere, sphereMat);
        sphereMesh.position.set(0, 200, 0);
        scene.add(sphereMesh);

    }

    // 添加地板
    const createFloor = () => {
        let loader = new THREE.TextureLoader();
        loader.load(floorImg, function (texture) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(10, 10);
            var floorGeometry = new THREE.BoxGeometry(2600, 1400, 1);
            var floorMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
            var floor = new THREE.Mesh(floorGeometry, floorMaterial);
            floor.position.y = -0.5;
            floor.rotation.x = Math.PI / 2;
            floor.name = "地面";
            scene.add(floor);
        });

    };
    // 创建墙
    const createWall = () => {

        // 创建单纯的墙
        createCubeWall(10, 200, 1400, 0, new THREE.MeshPhongMaterial({ color: 0xafc0ca }), -1295, 100, 0, "墙面");
        createCubeWall(10, 200, 1400, 1, new THREE.MeshPhongMaterial({ color: 0xafc0ca }), 1295, 100, 0, "墙面");
        createCubeWall(10, 200, 2600, 1.5, new THREE.MeshPhongMaterial({ color: 0xafc0ca }), 0, 100, -700, "墙面");
        // 创建不单纯的墙
        createHoleWall();
    };
    // 创建单纯而又不做作的墙
    const createCubeWall = (width: any, height: any, depth: any, angle: any, material: any, x: any, y: any, z: any, name: any) => {
        let cubeGeometry = new THREE.BoxGeometry(width, height, depth);
        let cube = new THREE.Mesh(cubeGeometry, material);
        cube.position.x = x;
        cube.position.y = y;
        cube.position.z = z;
        cube.rotation.y += angle * Math.PI;  //-逆时针旋转,+顺时针
        cube.name = name;
        scene.add(cube);
    }
    // 创建不单纯带洞洞的墙
    const createHoleWall = () => {
        //创建挖了门的墙
        var wall = returnWallObject(2600, 200, 10, 0, matArrayB, 0, 100, 700, "墙面");
        var door_cube1 = returnWallObject(200, 180, 10, 0, matArrayB, -600, 90, 700, "前门1");
        var door_cube2 = returnWallObject(200, 180, 10, 0, matArrayB, 600, 90, 700, "前门2");
        var window_cube1 = returnWallObject(100, 100, 10, 0, matArrayB, -900, 90, 700, "窗户1");
        var window_cube2 = returnWallObject(100, 100, 10, 0, matArrayB, 900, 90, 700, "窗户2");
        var window_cube3 = returnWallObject(100, 100, 10, 0, matArrayB, -200, 90, 700, "窗户3");
        var window_cube4 = returnWallObject(100, 100, 10, 0, matArrayB, 200, 90, 700, "窗户4");
        var objects_cube = [];
        objects_cube.push(door_cube1);
        objects_cube.push(door_cube2);
        objects_cube.push(window_cube1);
        objects_cube.push(window_cube2);
        objects_cube.push(window_cube3);
        objects_cube.push(window_cube4);
        createResultBsp(wall, objects_cube);

    };
    //返回墙对象
    function returnWallObject(width: any, height: any, depth: any, angle: any, material: any, x: any, y: any, z: any, name: any) {
        var cubeGeometry = new THREE.BoxGeometry(width, height, depth);
        var cube = new THREE.Mesh(cubeGeometry, material);
        cube.position.x = x;
        cube.position.y = y;
        cube.position.z = z;
        cube.rotation.y += angle * Math.PI;
        cube.name = name;
        return cube;
    }
    //墙上挖门窗，通过两个几何体生成BSP对象
    function createResultBsp(bsp: any, objects_cube: any) {
        var material = new THREE.MeshPhongMaterial({ color: 0x9cb2d1, specular: 0x9cb2d1, shininess: 30, transparent: true, opacity: 1 });
        var BSP = new ThreeBSP(bsp);
        for (var i = 0; i < objects_cube.length; i++) {
            var less_bsp = new ThreeBSP(objects_cube[i]);
            BSP = BSP.subtract(less_bsp);
        }
        var result = BSP.toMesh(material);
        result.material.flatshading = THREE.FlatShading;
        result.geometry.computeFaceNormals();  //重新计算几何体侧面法向量
        result.geometry.computeVertexNormals();
        result.material.needsUpdate = true;  //更新纹理
        result.geometry.buffersNeedUpdate = true;
        result.geometry.uvsNeedUpdate = true;
        scene.add(result);
    }
    // 添加门和窗户
    const createDoorWin = () => {
        //为墙面安装门
        createDoor_left(100, 180, 2, 0, -700, 90, 700, "左门1");
        createDoor_right(100, 180, 2, 0, -500, 90, 700, "右门1");
        createDoor_left(100, 180, 2, 0, 500, 90, 700, "左门2");
        createDoor_right(100, 180, 2, 0, 700, 90, 700, "右门2");
        //为墙面安装窗户
        createWindow(100, 100, 2, 0, -900, 90, 700, "窗户");
        createWindow(100, 100, 2, 0, 900, 90, 700, "窗户");
        createWindow(100, 100, 2, 0, -200, 90, 700, "窗户");
        createWindow(100, 100, 2, 0, 200, 90, 700, "窗户");

    };
    //创建门_左侧
    function createDoor_left(width: any, height: any, depth: any, angle: any, x: any, y: any, z: any, name: any) {
        var loader = new THREE.TextureLoader();
        loader.load(doorLeImg, function (texture) {
            var doorgeometry = new THREE.BoxGeometry(width, height, depth);
            doorgeometry.translate(50, 0, 0);
            var doormaterial = new THREE.MeshBasicMaterial({ map: texture, color: 0xffffff });
            doormaterial.opacity = 1.0;
            doormaterial.transparent = true;
            var door = new THREE.Mesh(doorgeometry, doormaterial);
            door.position.set(x, y, z);
            door.rotation.y += angle * Math.PI;  //-逆时针旋转,+顺时针
            door.name = name;
            scene.add(door);
        });
    }
    //创建门_右侧
    function createDoor_right(width: any, height: any, depth: any, angle: any, x: any, y: any, z: any, name: any) {
        var loader = new THREE.TextureLoader();
        loader.load(doorRiImg, function (texture) {
            var doorgeometry = new THREE.BoxGeometry(width, height, depth);
            doorgeometry.translate(-50, 0, 0);
            var doormaterial = new THREE.MeshBasicMaterial({ map: texture, color: 0xffffff });
            doormaterial.opacity = 1.0;
            doormaterial.transparent = true;
            var door = new THREE.Mesh(doorgeometry, doormaterial);
            door.position.set(x, y, z);
            door.rotation.y += angle * Math.PI;  //-逆时针旋转,+顺时针
            door.name = name;
            scene.add(door);
        });
    }
    //创建窗户
    function createWindow(width: any, height: any, depth: any, angle: any, x: any, y: any, z: any, name: any) {
        var loader = new THREE.TextureLoader();
        loader.load(windowImg, function (texture) {
            var windowgeometry = new THREE.BoxGeometry(width, height, depth);
            var windowmaterial = new THREE.MeshBasicMaterial({ map: texture, color: 0xffffff });
            windowmaterial.opacity = 1.0;
            windowmaterial.transparent = true;
            var window = new THREE.Mesh(windowgeometry, windowmaterial);
            window.position.set(x, y, z);
            window.rotation.y += angle * Math.PI;  //-逆时针旋转,+顺时针
            window.name = name;
            scene.add(window);
        });
    }

    return (
        <div>
            <div className="myThreeWrip" id="myThreeWrip" />

            <div className="label" id="label" />
        </div>
    )
}

export default BaseMap;
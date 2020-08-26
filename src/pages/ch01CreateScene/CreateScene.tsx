import React, { useEffect } from "react";
import * as THREE from "three";

function CreateScene(): JSX.Element {

    let scene: any;
    let camera: any;
    let renderer: any;

    // 第一次渲染后执行，仅执行一次
    useEffect(() => {

        // 初始化基础信息
        initBaseInfo();
    // eslint-disable-next-line
    }, []);

    // 初始化基础信息
    const initBaseInfo = () => {
        // eslint-disable-next-line
        scene = new THREE.Scene;        
        camera = new THREE.PerspectiveCamera(75, window.innerHeight / window.innerWidth, 0.1, 1000);
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        let mapContainer = document.getElementById("map-container") as any;
        mapContainer.appendChild(renderer.domElement);

        let geometry = new THREE.BoxGeometry();
        let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        let cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        // 各类动画都放在这里
        const animate = () => {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            // cube.rotation.z += 0.01;

            renderer.render(scene, camera);
        }

        animate();
    }

    return (
        <div>
            <div id="map-container" className="map-container" />
        </div>
    )
}

export default CreateScene;
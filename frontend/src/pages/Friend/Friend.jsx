import React, { Suspense, useRef, useState } from 'react'
import './style/app.scss'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { render } from '@testing-library/react'

const Avatar = () => {
      //container
      const container = document.querySelector('#avatar')

      //scene
      const scene = new THREE.Scene()

      //camera
      const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000)
      camera.position.set(0,10,235)

      const ambient = new THREE.AmbientLight(0x404040)
      ambient.position.set(1,1,1)
      scene.add(ambient)

      const light = new THREE.DirectionalLight(0xffffff, 1.1)
      light.position.set(22,1,30)
      scene.add(light)
      
      //renderer------------------
      const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true})
      renderer.setSize(container.clientWidth, container.clientHeight)
      renderer.setPixelRatio(window.devicePixelRatio)
      
      container.appendChild(renderer.domElement)

      //controls
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableZoom = false
      controls.enableDamping = false;
      controls.enablePan = false;
      controls.rotateSpeed = 0.47
      controls.minPolarAngle = 1.55; //verticals
      controls.maxPolarAngle = 1.55;
      controls.minAzimuthAngle = Infinity; //horizontals
      controls.maxAzimuthAngle = 0;
      
      const loader = new GLTFLoader()
      loader.load('3d/avatar.gltf', (gltf) => {
         scene.add(gltf.scene)
         var avatar = gltf.scene.children[0]

         avatar.position.set(0,-80,0)
         
         const animate = function (){
            requestAnimationFrame(animate)
      
            //avatar.rotation.y += 0.01
            //avatar.rotation.x += 0.01
            renderer.render(scene, camera)
         } 

         animate()
         //renderer.render(scene, camera)
      })  

      function onWindowResize(){
         camera.aspect = container.clientWidth / container.clientHeight
         camera.updateProjectionMatrix();

         renderer.setSize(container.clientWidth, container.clientHeight)
      }

      window.addEventListener('resize', onWindowResize)
}
 

export default function Friend(){
   //const group = useRef()
   //const {nodes, materials} = useGLTF(`${avatar}`)

   return (
      <>   
         { Avatar() }
      </>
   )
}
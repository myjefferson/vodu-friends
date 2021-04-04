import { Fade, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import api from '../../services/api'
import './style/app.scss'
import { useStyles } from './style/style'

//imgs
import presente from '../../assets/img/presente.svg'
import coracao from '../../assets/img/coracao.svg'
import sorvete from '../../assets/img/sorvete.svg'
import alfinetes from '../../assets/img/alfinetes.svg'
import empurrar from '../../assets/img/empurrar.svg'
import punhalada from '../../assets/img/punhalada.svg'

export default function Friend(){ 
   const url = window.location.search
   const param = new URLSearchParams(url)
   const paramAvatar = param.get('user_avatar')
   
   const Avatar = () => {
      var setSkin, setHair, setShirt, setPant, setShoes

      api.get(`/avatars?user_avatar=${paramAvatar}`).then(res => {
         const data = res.data.avatars
         const index = data.filter(avatar => avatar.user_avatar === paramAvatar)
         
         if(index.length > 0){
            setSkin = index[0].skin
            setHair = index[0].hair
            setShirt = index[0].shirt
            setPant = index[0].pant
            setShoes = index[0].shoes
         }

         console.log(index)
      })

      const save = document.querySelector('.save')
      save.addEventListener("click", () => {
         const updates = {
            skin: setSkin,
            hair: setHair,
            shirt: setShirt,
            pant: setPant,
            shoes: setShoes
         }

         api.put(`/avatars/${paramAvatar}`, updates)
      })
   
      //container
      const container = document.querySelector('#avatar')
   
      //scene
      const scene = new THREE.Scene()
   
      //camera
      const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000)
      camera.position.set(0,8,185)
   
      const ambient = new THREE.AmbientLight(0x404040)
      ambient.position.set(1,1,1)
      scene.add(ambient)
   
      const light = new THREE.DirectionalLight(0xffffff, 1.1)
      light.position.set(22,1,30)
      scene.add(light)
   
      const light2 = new THREE.DirectionalLight(0xffffff, 1.0)
      light2.position.set(-82,-70,-220)
      scene.add(light2)
      
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
      controls.update()
      
      var avatar;
   
      var loader = new GLTFLoader()
      loader.load('3d/avatar.gltf', (gltf) => {
         scene.add(gltf.scene)
         avatar = gltf.scene.children[0]
         console.log(avatar) //map
         avatar.position.set(0,-90, 0)
         
         const btnSkin = document.getElementById('colorSkin')
         btnSkin.addEventListener("click", (event) => {
   
            var getColor = Number(event.target.name);
   
            const skin = new THREE.MeshPhysicalMaterial({color: new THREE.Color(getColor), roughness: 0.58})
            avatar.getObjectByName('Head').material = skin
            avatar.getObjectByName('ArmLeft').material = skin
            avatar.getObjectByName('ArmRight').material =skin
            avatar.getObjectByName('Pescoco').material = skin
            
            setSkin = String(event.target.name)
            
         })
   
         const btnHair = document.getElementById('colorHair')
         btnHair.addEventListener("click", (event) => {
   
            var getColor = Number(event.target.name);
   
            const hair = new THREE.MeshPhysicalMaterial({color: new THREE.Color(getColor), roughness: 0.55})
            avatar.getObjectByName('Hair').material = hair
            
            setHair = String(event.target.name)
         })
   
         const btnShirt = document.getElementById('colorShirt')
         btnShirt.addEventListener("click", (event) => {
   
            var getColor = Number(event.target.name);
   
            const shirt = new THREE.MeshPhysicalMaterial({color: new THREE.Color(getColor), roughness: 0.55})
            avatar.getObjectByName('Shirt').material = shirt
   
            setShirt = String(event.target.name)
         
         })
   
         const btnPant = document.getElementById('colorPant')
         btnPant.addEventListener("click", (event) => {
   
            var getColor = Number(event.target.name);
   
            const pant = new THREE.MeshPhysicalMaterial({color : new THREE.Color(getColor), roughness: 0.55})
   
            avatar.getObjectByName('LeftThigh').material = pant
            avatar.getObjectByName('LeftPerna').material = pant
            avatar.getObjectByName('RightThigh').material = pant
            avatar.getObjectByName('RightPerna').material = pant 
            
            setPant = String(event.target.name)
            
         })
   
         const btnShoes = document.getElementById('colorShoes')
         btnShoes.addEventListener("click", (event) => {
   
            var getColor = Number(event.target.name);
   
            const shoes = new THREE.MeshPhysicalMaterial({color: new THREE.Color(getColor), roughness: 0.55})
            
            avatar.getObjectByName('RightFoot').material = shoes
            avatar.getObjectByName('LeftFoot').material = shoes  
   
            setShoes = String(event.target.name)
         })
   
         function setTextureAvatar(){
            //Skin
            const skin = new THREE.MeshPhysicalMaterial({color: new THREE.Color(Number(setSkin)), roughness: 0.58})
            avatar.getObjectByName('Head').material = skin
            avatar.getObjectByName('ArmLeft').material = skin
            avatar.getObjectByName('ArmRight').material =skin
            avatar.getObjectByName('Pescoco').material = skin
            //Hair
            const hair = new THREE.MeshPhysicalMaterial({color: new THREE.Color(Number(setHair)), roughness: 0.55})
            avatar.getObjectByName('Hair').material = hair
            //Shirt
            const shirt = new THREE.MeshPhysicalMaterial({color: new THREE.Color(Number(setShirt)), roughness: 0.55})
            avatar.getObjectByName('Shirt').material = shirt
            //Pant
            const pant = new THREE.MeshPhysicalMaterial({color : new THREE.Color(Number(setPant)), roughness: 0.55})
            avatar.getObjectByName('LeftThigh').material = pant
            avatar.getObjectByName('LeftPerna').material = pant
            avatar.getObjectByName('RightThigh').material = pant
            avatar.getObjectByName('RightPerna').material = pant  
            //Shoes
            const shoes = new THREE.MeshPhysicalMaterial({color: new THREE.Color(Number(setShoes)), roughness: 0.55})      
            avatar.getObjectByName('RightFoot').material = shoes
            avatar.getObjectByName('LeftFoot').material = shoes    
         } 
   
         animate()
         setTextureAvatar()
      })  
      
      const animate = function (){
         requestAnimationFrame(animate)
         renderer.render(scene, camera)
      } 
   
      //Ajustment window
      function onWindowResize(){
         camera.aspect = container.clientWidth / container.clientHeight
         camera.updateProjectionMatrix();
   
         renderer.setSize(container.clientWidth, container.clientHeight)
      }
   
      window.addEventListener('resize', onWindowResize)     
   }

   const classes = useStyles();

   //Get info user
   const [user, setUser] = useState([])
   useEffect(() => {
      api.get(`/avatars?user_avatar=${paramAvatar}`).then((res) => {
         setUser(res.data.friends)
      })
   }, [])

   //Animation Events
   const [edit, setEdit] = useState(false)

   const editChange = () => {
      setEdit((prev) => !prev)
   }

   //btnEdit
   const [btnEdit, setBtnEdit] = useState(true)

   const btnEditChange = () => {
      setBtnEdit((prev) => !prev)
   }

   const editCancel = () =>{
      window.location.reload()
   }

   return (
      <>  
         {  useEffect(() => {
               Avatar()
            },[]) }

         <div className={classes.defaultContainer}>
            
            {user.map(group => <h1 className={classes.h1}>{group.name} {group.surname}</h1>)}

            <Fade in={btnEdit}>
               <Paper elevation={4}>
                  <div className={classes.boxBtnEdit}>
                     <button onClick={() => {btnEditChange()}, () => {editChange()}} id="btnDefault" className={classes.btnEdit}>Edit Avatar</button>
                  </div>

                  <div className={classes.actionsAlign}>
                     <div className={classes.actionsGrid}>
                        <div className={classes.actions}>
                           <p className={classes.pTitleBad}>Good actions</p>
                           <button className={classes.btnGoodActions}><img src={coracao} className={classes.imgActions} /><p>Abraçar</p></button>
                           <button className={classes.btnGoodActions}><img src={presente} className={classes.imgActions} /><p className={classes.pActions}>Presentear</p></button>
                           <button className={classes.btnGoodActions}><img src={sorvete} className={classes.imgActions} /><p>Alimentar</p></button>
                        </div>

                        <div className={classes.actions}>
                           <p className={classes.pTitleGood}>Bad actions</p>
                           <button className={classes.btnBadActions}><img src={alfinetes} className={classes.imgActions} /><p>Alfinetar</p></button>
                           <button className={classes.btnBadActions}><img src={empurrar} className={classes.imgActions} /><p>Empurrar</p></button>
                           <button className={classes.btnBadActions}><img src={punhalada} className={classes.imgActions} /><p>Matar</p></button>
                        </div>
                     </div>
                  </div>
               </Paper>
            </Fade>

            <Fade in={edit}>
               <Paper elevation={4} className={classes.paper}>
                  <div className={classes.boxBtnEdit}>
                     <button type="button" className={classes.btnCancel} onClick={ () => btnEditChange, editChange, editCancel} >Cancel</button>
                     <button type="button" className={classes.btnSave, "save"} onClick={() => btnEditChange, editChange} id="btnGreen">Save</button>
                  </div>
                  
                  <div className={classes.boxLeft}>
                     <div className={classes.div}>
                        <p className={classes.p}>Color Skin</p>
                        <div id='colorSkin'>
                           <button className={classes.circles} name="0xFFC8A0" id="0" style={{background: '#FFC8A0',}}></button>
                           <button className={classes.circles} name="0xD59F7B" id="1" style={{background: '#D59F7B',}}></button>
                           <button className={classes.circles} name="0xCF965F" id="2" style={{background: '#CF965F',}}></button>
                           <button className={classes.circles} name="0xB26644" id="3" style={{background: '#B26644',}}></button>
                           <button className={classes.circles} name="0x783D2B" id="4" style={{background: '#783D2B',}}></button>
                           <button className={classes.circles} name="0x613311" id="5" style={{background: '#613311',}}></button>
                           <button className={classes.circles} name="0x552720" id="6" style={{background: '#552720',}}></button>
                           <button className={classes.circles} name="0x321E1A" id="7" style={{background: '#321E1A',}}></button>
                        </div>
                     </div>

                     <div className={classes.div}>
                        <p className={classes.p}>Color Hair</p>
                        <div id="colorHair">
                           <button className={classes.circles} name="0x141414" id="0" style={{background: '#141414',}}></button>
                           <button className={classes.circles} name="0x46251F" id="1" style={{background: '#46251F',}}></button>
                           <button className={classes.circles} name="0xF8B22A" id="2" style={{background: '#F8B22A',}}></button>
                           <button className={classes.circles} name="0xCBCBCB" id="3" style={{background: '#CBCBCB',}}></button>
                           <button className={classes.circles} name="0xEB3131" id="4" style={{background: '#EB3131',}}></button>
                           <button className={classes.circles} name="0x9211F6" id="5" style={{background: '#9211F6',}}></button>
                           <button className={classes.circles} name="0x16A613" id="6" style={{background: '#16A613',}}></button>
                           <button className={classes.circles} name="0x261BA1" id="7" style={{background: '#261BA1',}}></button>
                        </div>
                     </div>

                     <div className={classes.div}>
                        <p className={classes.p}>Color Shoes</p>
                        <div id="colorShoes">
                           <button className={classes.circles} name="0xF0F0F0" id="0" style={{background: '#F0F0F0',}}></button>
                           <button className={classes.circles} name="0x292929" id="1" style={{background: '#292929',}}></button>
                           <button className={classes.circles} name="0x7314EC" id="2" style={{background: '#7314EC',}}></button>
                           <button className={classes.circles} name="0xCD2222" id="3" style={{background: '#CD2222',}}></button>
                           <button className={classes.circles} name="0xC0DF00" id="4" style={{background: '#C0DF00',}}></button>
                           <button className={classes.circles} name="0x223A25" id="5" style={{background: '#223A25',}}></button>
                           <button className={classes.circles} name="0x4FAAD1" id="6" style={{background: '#4FAAD1',}}></button>
                           <button className={classes.circles} name="0x5E002D" id="7" style={{background: '#5E002D',}}></button>
                        </div>
                     </div>
                  </div>

                  <div className={classes.boxRight}>
                     <div className={classes.div}>
                        <p className={classes.p}>Color Shirt</p>
                        <div id="colorShirt">
                           <button className={classes.circles} name="0xF2F2F2" id="0" style={{background: '#F2F2F2',}}></button>
                           <button className={classes.circles} name="0x00E268" id="1" style={{background: '#00E268',}}></button>
                           <button className={classes.circles} name="0xF55A9B" id="2" style={{background: '#F55A9B',}}></button>
                           <button className={classes.circles} name="0x242424" id="3" style={{background: '#242424',}}></button>
                           <button className={classes.circles} name="0xFFE350" id="4" style={{background: '#FFE350',}}></button>
                           <button className={classes.circles} name="0xF10000" id="5" style={{background: '#F10000',}}></button>
                           <button className={classes.circles} name="0x4DFFEA" id="6" style={{background: '#4DFFEA',}}></button>
                           <button className={classes.circles} name="0xA67CFF" id="7" style={{background: '#A67CFF',}}></button>
                        </div>
                     </div>

                     <div className={classes.div}>
                        <p className={classes.p}>Color Pant</p>
                        <div id="colorPant">
                           <button className={classes.circles} name="0x3A3A3A" id="0" style={{background: '#3A3A3A',}}></button>
                           <button className={classes.circles} name="0xFB3CFF" id="1" style={{background: '#FB3CFF',}}></button>
                           <button className={classes.circles} name="0xD6D6D6" id="2" style={{background: '#D6D6D6',}}></button>
                           <button className={classes.circles} name="0x6D8C4D" id="3" style={{background: '#6D8C4D',}}></button>
                           <button className={classes.circles} name="0x0B2730" id="4" style={{background: '#0B2730',}}></button>
                           <button className={classes.circles} name="0x361D7E" id="5" style={{background: '#361D7E',}}></button>
                           <button className={classes.circles} name="0x652020" id="6" style={{background: '#652020',}}></button>
                           <button className={classes.circles} name="0x77672F" id="7" style={{background: '#77672F',}}></button>
                        </div>
                     </div>
                  </div>
               </Paper>            
            </Fade>
         </div>
      </>
   )
}
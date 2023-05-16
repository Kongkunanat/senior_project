import { Physics } from '@react-three/cannon';
import {  Sky} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Ground } from './Ground';
import { Player } from './Player';
import { ColliderBox } from './ColliderBox';
import './model_popup/gaia.css';
import { Building }  from './Building';
import { Ramp } from './Ramp';
import { Models } from './model_popup/Scene_door';
import { PopUp } from './model_popup/popup';
import { PopUp2 } from './model_popup/popup2';
import { PopUp3 } from './model_popup/popup3';
import { PopUpM } from './model_popup/popupM';
import { PopUpM2 } from './model_popup/popupM2';
import { PopUpM3 } from './model_popup/popupM3';
import * as THREE from 'three';
import {Suspense,useRef} from 'react';
import { Framemodel01 } from './model_popup/frame01';
import { Modelcity } from './model_popup/Scenecity';
import { Popupalldata }  from './model_popup/popupalldata';
import { MeshStandardMaterial } from 'three';



function App() {

  const modRef = useRef();
  const modRef2 = useRef();
  const modRef3 = useRef();
  const modRef4 = useRef();
  const modRef5 = useRef();
  const modRef6 = useRef();
  const modRef7 = useRef();
  const modRef8 = useRef();
  const modRef9 = useRef();
  const modRef10 = useRef();
  const modRef11 = useRef();
  const modRef12 = useRef();
  const modRef13 = useRef();
  const modRef14 = useRef();
  const modRef15 = useRef();
  const modRef16 = useRef();
  const modRef17 = useRef();
  const modRef18 = useRef();
  const modRef19 = useRef();
  const modRef20 = useRef();
  const modRef21 = useRef();
  const modRef22 = useRef();
  const modRef23 = useRef();
  const modRef24 = useRef();
  const modRef25 = useRef();
  const modRef26 = useRef();
  const modRef27 = useRef();
  const modRef28 = useRef();
  const modRef29 = useRef();
  const modRef30 = useRef();
  return (
    <>
     <div className="Gaia">
      <Canvas  onCreated={({ gl }) => { 
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap
        }} dpr={[1, 2]} camera = {{ fov: 45}}
       >       
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
       
        <pointLight position={[-10, -10, -10]} />
     
        <Physics gravity={[0, -30, 0]}>
          <Suspense fallback={null}>
            <Ground />
            <Building />
            <Models scale={[0.03,0.014,0.02]} position={[-19.5,16.63,0]} rotation={[0,Math.PI,0]}/>
            <Models scale={[0.03,0.014,0.02]} position={[19.3,16.63,0]} rotation={[0,Math.PI,0]}/>
               {/*ห้อง 2 แผงกั้นขวา*/}
              <Modelcity position={[15, 0.55, 100.2]} rotation={[0,Math.PI,0]} scale={[0.21,0.11,0.15]}  onClick={() => { modRef.current.togMod() }}  />
              {/*ห้อง 2 แผงกั้นซ้าย*/}
              <Modelcity position={[-16, 0.55, 100.2]} rotation={[0,Math.PI,0]} scale={[0.21,0.11,0.15]}  onClick={() => { modRef3.current.togMod() }}  />
              {/*ห้อง 2 ตำแหน่งที่ 9 ห้องตรงกลางข้างๆ */}
              <Modelcity position={[37.5, -6.5, 130]} rotation={[0,Math.PI/2,0]} scale={[0.21,0.25,-0.20]}  onClick={() => { modRef4.current.togMod() }}  />
              {/*ห้อง 2 ตำแหน่งที่ 4  ห้องตรงกลางข้างๆ*/}
              <Modelcity position={[-37.5, -6.5, 130]} rotation={[0,Math.PI/2,0]} scale={[0.21,0.25,0.20]}  onClick={() => { modRef5.current.togMod() }}  />
               {/*ห้อง 2 แผงกั้นขวา*/}
               <Modelcity position={[-37.5, -6.5, 53]} rotation={[0,Math.PI/2,0]} scale={[0.21,0.25,0.20]}  onClick={() => { modRef23.current.togMod() }}  />
               {/*ห้อง 2 แผงกั้นขวา*/}
               <Modelcity position={[-37.5, -6.5, 14]} rotation={[0,Math.PI/2,0]} scale={[0.21,0.25,0.20]}  onClick={() => { modRef24.current.togMod() }}  />
                {/*ห้อง 2 แผงกั้นขวา*/}
               <Modelcity position={[37, -6.5, 53]} rotation={[0,Math.PI/2,0]} scale={[0.21,0.25,0.20]}  onClick={() => { modRef25.current.togMod() }}  />
               {/*ห้อง 2 แผงกั้นขวา*/}
               <Modelcity position={[37, -6.5, 14]} rotation={[0,Math.PI/2,0]} scale={[0.21,0.25,0.20]}  onClick={() => { modRef26.current.togMod() }}  />



         
              {/*ห้อง1 แผงกั้นขวา*/}
              <Modelcity position={[58, 0.55, 84.5]} rotation={[0,Math.PI,0]} scale={[0.21,0.11,0.15]}  onClick={() => { modRef6.current.togMod() }}  />
              {/*ห้อง1 แผงกั้นซ้าย*/}
              <Modelcity position={[91, 0.55, 84.5]} rotation={[0,Math.PI,0]} scale={[0.21,0.11,0.15]}  onClick={() => { modRef7.current.togMod() }}  />
               {/*ห้อง1 */}
              <Modelcity position={[104.5, -6.5, 130]} rotation={[0,Math.PI/2,0]} scale={[0.21,0.25,-0.20]}  onClick={() => { modRef8.current.togMod() }}  />
               {/*ห้อง1 */}
              <Modelcity position={[104.5, -6.5, 44]} rotation={[0,Math.PI/2,0]} scale={[0.21,0.25,-0.20]}  onClick={() => { modRef9.current.togMod() }}  />

               {/*ห้อง1 */}
               <Modelcity position={[42.7, -6.5, 33.84]} rotation={[0,Math.PI/2,0]} scale={[0.55,0.25,-0.20]}  onClick={() => { modRef28.current.togMod() }}  />
              {/*ห้อง1 */}
              <Modelcity position={[58, -6,0]} rotation={[0,Math.PI,0]} scale={[0.20,0.24,-0.18]}  onClick={() => { modRef10.current.togMod() }}  />
               {/*ห้อง1 */}
              <Modelcity position={[89.75, -6,0]} rotation={[0,Math.PI,0]} scale={[0.20,0.24,-0.18]}  onClick={() => { modRef11.current.togMod() }}  />



              <Modelcity position={([-0.85, 10, 60])} rotation={[0,Math.PI,0]} scale={[0.017,0.027,-0.01]}  onClick={() => { modRef30.current.togMod() }}  material={
          new MeshStandardMaterial({
            color: 0xffffff,
            brightness: 0.9, // ปรับค่า brightness ให้ลดลง 50%
            contrast: 0.9, // ปรับค่า contrast ให้ลดลง 30%
            saturation: 0.9, // ปรับค่า saturation ให้ลดลง 20%
          })
        }/>




              
              {/*แนวนอนหลังห้องกลาง*/}
              <Framemodel01 position={[-0.9, 15, 161.5]}   scale={[0.5,0.36,0.5]} rotation={[Math.PI,0,0]}  onClick={() => { modRef20.current.togMod() }} />
               {/*แนวนอนหลังห้องซ้าย*/}
              <Framemodel01 position={[69.9, 15, 161.5]}   scale={[0.5,0.36,0.5]} rotation={[Math.PI,0,0]}   onClick={() => { modRef21.current.togMod() }} />
               {/*แนวนอนหลังห้องขวา*/}
              <Framemodel01 position={[-73.9, 15, 161.5]}   scale={[0.5,0.36,0.5]} rotation={[Math.PI,0,0]}   onClick={() => { modRef22.current.togMod() }} />
              {/* ห้อง3 ผนังกั้นซ้าย*/}
              <Modelcity position={[-56.95, -10.89,84.5]} rotation={[0,0,0]} scale={[0.155,0.22,-0.18]}  onClick={() => { modRef12.current.togMod() }}  />
              {/* ห้อง3 ผนังกั้นขวา*/}
              <Modelcity position={[-93, -0.15,84.5]} rotation={[0,0,0]} scale={[0.22,0.11,-0.18]}  onClick={() => { modRef13.current.togMod() }}  />
              {/* ห้อง3 ด้านหลัง*/}
              <Modelcity position={[-57, -6,0]} rotation={[0,Math.PI,0]} scale={[0.20,0.24,-0.18]}  onClick={() => { modRef14.current.togMod() }}  />
              <Modelcity position={[-91, -6,0]} rotation={[0,Math.PI,0]} scale={[0.20,0.24,-0.18]}  onClick={() => { modRef15.current.togMod() }}  />
              {/* ห้อง3 ด้านข้าง*/}
              <Modelcity position={[-104.5, -6.5,130]} rotation={[0,Math.PI/2,0]} scale={[0.21,0.25,-0.20]}  onClick={() => { modRef16.current.togMod() }}  />
              <Modelcity position={[-104.5, -6.5, 44]} rotation={[0,Math.PI/2,0]} scale={[0.21,0.25,-0.20]}  onClick={() => { modRef17.current.togMod() }}  />

              <Modelcity position={[-42.8, -6.5, 33.84]} rotation={[0,Math.PI/2,0]} scale={[0.55,0.25,-0.20]}  onClick={() => { modRef29.current.togMod() }}  />

      
              <ColliderBox position={[-0.85, 7, 40]} scale={[3,3,3]} /> 
              <Ramp />             
          </Suspense>
         <Player />
        </Physics>
      </Canvas>
      <div className="dot" />
      <PopUp ref={modRef} />
      <PopUpM2 ref={modRef2} />
      <PopUp ref={modRef3} />
      <PopUp ref={modRef4} />
      <PopUp ref={modRef5} /> 
      <PopUp ref={modRef23} />
      <PopUp ref={modRef24} />
      <PopUp ref={modRef25} /> 
      <PopUp ref={modRef26} />
      <PopUp3  ref={modRef6} />
      <PopUp3 ref={modRef7} />
      <PopUp3 ref={modRef8} />
      <PopUp3  ref={modRef9} />
      <PopUp3 ref={modRef28} />
      <PopUp3  ref={modRef27} />
      <PopUp ref={modRef20} />
      <PopUp3 ref={modRef21} />
      <PopUp3 ref={modRef10} />
      <PopUp3 ref={modRef11} />
      <PopUp2  ref={modRef12} />
      <PopUp2 ref={modRef13} />
      <PopUp2 ref={modRef14} />
      <PopUp2  ref={modRef15} />
      <PopUp2 ref={modRef16} />
      <PopUp2 ref={modRef17} />
      <PopUp2 ref={modRef22} />
      <PopUpM3 ref={modRef18} />
      <PopUpM ref={modRef19} />
      <Popupalldata ref={modRef30} />
      </div>
    </>
  );
}

export default App;
import * as THREE from 'three'
import { useLoader ,  useFrame } from '@react-three/fiber';
import { TextureLoader } from "three";
import { useBox } from "@react-three/cannon";
import ref from "../../src/imagess/virstual.png";
// import  Axios from 'axios';
// import { Selection,  EffectComposer, Outline } from '@react-three/postprocessing';
import React, {   useRef} from "react";
import book from "../../src/imagess/Book.jpg";




import pic1 from "../../src/imagess/mushroom/uu.jpg";
import pic2 from "../../src/imagess/mushroom/เห็ดข่า.jpg";
import pic3 from "../../src/imagess/mushroom/เห็ดไข่หงส์.png";
import pic4 from "../../src/imagess/mushroom/เห็ดโคน.png";
import pic5 from "../../src/imagess/mushroom/เห็ดระโงกขาว.png";
import pic6 from "../../src/imagess/mushroom/เห็ดหมวกจีน.JPG";
import pic7 from "../../src/imagess/mushroom/ระโงกหิน.jpg";
import pic8 from "../../src/imagess/mushroom/เห็ดมันปู.jpg";


import for1 from "../../src/imagess/forest/แจง.jpg";
import for2 from "../../src/imagess/forest/กะหนานปลิง.jpg";
import for3 from "../../src/imagess/forest/ปอบิด.jpg";
import for4 from "../../src/imagess/forest/ไผ่ป่า.jpg";
import for5 from "../../src/imagess/forest/พญารากดำ.png";
import for6 from "../../src/imagess/forest/มะค่าแต้.png";
import for7 from "../../src/imagess/forest/มะเกลือ.jpg";




import herb1 from "../../src/imagess/herb/กุ่มบก.png";
import herb2 from "../../src/imagess/herb/เถาแสลงพัน.jpg";
import herb3 from "../../src/imagess/herb/บุก.jpg";
import herb4 from "../../src/imagess/herb/เปล้าน้อย.png";
import herb5 from "../../src/imagess/herb/มะนาวโห่พันธุ์เล็ก.jpg";
import herb6 from "../../src/imagess/herb/ไพล.jpg";
import herb7 from "../../src/imagess/herb/มะนาวผี.png";
import herb8 from "../../src/imagess/herb/หางไหลขาว.jpg";


import nameclassforest from "../../src/imagess/ground/ห้องพรรณไม้.jpg"
import nameclassherb from "../../src/imagess/ground/ห้องสมุนไพร.jpg"
import nameclassmushroom from "../../src/imagess/ground/ห้องเห็ด.jpg"



export  const Boxeffect = ({ ...props }) => {

/*แนวนอนหลังห้องซ้าย*/
const [refplaneimage8] = useBox(() => ({ 
  type: "static", 
  args: [0.5,0.36,0.5],
  position: [69.9, 21.6, 161.5],
})); 

const [nameclass1] = useBox(() => ({ 
  type: "static", 
  args: [0.5,0.36,0.5],
  position: [69.9, 35, 161.5],
})); 
const [nameclass2] = useBox(() => ({ 
  type: "static", 
  args: [0.5,0.36,0.5],
  position: [-0.9, 35, 161.5],
})); 
const [nameclass3] = useBox(() => ({ 
  type: "static", 
  args: [0.5,0.36,0.5],
  position: [-73.9, 35, 161.5],
})); 

//ห้อง1ผนังกั้นริมซ้าย
      const [refplaneimage2] = useBox(() => ({ 
         type: "static", 
         args: [7.5,4,1],
         position: [91, 11.5, 84.5],
      }));  

//ห้อง1ผนังกั้นริมขวา
      const [refplaneimage3] = useBox(() => ({ 
         type: "static", 
         args: [12,4,1],
         position: [58, 11.5, 84.5],
      }));  
      //ห้อง1
      const [refplaneimage33] = useBox(() => ({ 
        type: "static", 
        args: [12,4,1],
        position: [104.5, 18.5, 130],
     }));  
     //ห้อง1
     const [refplaneimage22] = useBox(() => ({ 
      type: "static", 
      args: [12,4,1],
      position: [104.5, 18.5, 44],
   }));  
   //ห้อง1
   const [refplaneimage333] = useBox(() => ({ 
    type: "static", 
    args: [12,4,1],
    position: [58, 18,0],
 }));  
 //ห้อง1
 const [refplaneimage222] = useBox(() => ({ 
  type: "static", 
  args: [12,4,1],
  position: [89.75, 18,0],
}));  
const [refplaneimage2223] = useBox(() => ({ 
  type: "static", 
  args: [12,4,1],
  position: [-42.8, 18.5, 33.84],
}));  

//ห้อง2ผนังกั้นริมขวา
      const [refplaneimage4] = useBox(() => ({ 
         type: "static", 
         args: [7,4,1],
         position: [-16, 11.5,100.2],
      })); 

 //ห้อง2ผนังกั้นริมซ้าย
      const [refplaneimage1] = useBox(() => ({ 
        type: "static", 
        args: [12,4,1],
        position: [15, 11.5, 100.2],
     }));

/*แนวนอนหลังห้อง 2 (กลาง)*/    
const [refplaneimage5] = useBox(() => ({ 
  type: "static", 
  args: [0.5,0.36,0.5],
  position: [-0.9, 21.6, 161.5],
})); 

const [refplaneimage0] = useBox(() => ({ 
  type: "static", 
  args: [12,4,1],
  position: [37.5, 18.5, 130],
}));

const [refplaneimage01] = useBox(() => ({ 
  type: "static", 
  args: [12,4,1],
  position: [-37.5, 18.5, 130],
}));


const [refplaneimage000] = useBox(() => ({ 
  type: "static", 
  args: [12,4,1],
  position: [37.1,  18.5, 53],
}));

const [refplaneimage001] = useBox(() => ({ 
  type: "static", 
  args: [12,4,1],
  position: [37.1,  18.5, 14],
}));

const [refplaneimage0001] = useBox(() => ({ 
  type: "static", 
  args: [12,4,1],
  position: [-37.5,  18.5, 53],
}));

const [refplaneimage0012] = useBox(() => ({ 
  type: "static", 
  args: [12,4,1],
  position: [-37.5,  18.5, 14],
}));

/* ห้อง3 ผนังกั้นขวา*/
const [refplaneimage] = useBox(() => ({ 
  type: "static", 
  args: [12,4,1],
  position: [-93, 10.85,84.5],
}));

/* ห้อง3 ผนังกั้นซ้าย*/
const [refplaneimage6] = useBox(() => ({ 
type: "static", 
args: [12,4,1],
position: [-56.95, 10.85,84.5],
}));

/*แนวนอนหลังห้อง 3*/
const [refplaneimage7] = useBox(() => ({ 
  type: "static", 
  args: [0.5,0.36,0.5],
  position: [-73.9, 21.6, 161.5]
}));


//ห้อง 3 ด้านข้าง 
const [refplaneimage9] = useBox(() => ({ 
  type: "static", 
  args: [0.5,0.36,0.5],
  position: [-104.5, 18.5,130]
}));



//ห้อง 3 ด้านข้าง 
const [refplaneimage10] = useBox(() => ({ 
  type: "static", 
  args: [0.5,0.36,0.5],
  position: [-104.5, 18.5, 44]
}));

//ห้อง 3 Refference
const [refplaneimage11] = useBox(() => ({ 
  type: "static", 
  args: [0.5,0.36,10],
  position: [-104.7, 24, 87]
}));


//ห้อง 3 ด้านหลัง
const [refplaneimage12] = useBox(() => ({ 
  type: "static", 
  args: [0.5,0.36,10],
  position: [-57,18,0]
}));


//ห้อง 3 ด้านหลัง
const [refplaneimage13] = useBox(() => ({ 
  type: "static", 
  args: [0.5,0.36,10],
  position: [-91,18,0]
}));

//ห้อง 3 ด้านหลัง
const [refplaneimage134] = useBox(() => ({ 
  type: "static", 
  args: [0.5,0.36,10],
  position: [42.7, 18.5, 33.84]
}));




  const usetexture = useLoader(THREE.TextureLoader,process.env.PUBLIC_URL + "/imagess/wall/WhiteWall.jpg");
  usetexture.wrapS = THREE.RepeatWrapping;
  usetexture.wrapT = THREE.RepeatWrapping;
  usetexture.repeat.set(70, 70);
  
  const usetexture2 = useLoader(THREE.TextureLoader,process.env.PUBLIC_URL + "/imagess/ground/BAZALTao.jpg");
  usetexture2.wrapS = THREE.RepeatWrapping;
  usetexture2.wrapT = THREE.RepeatWrapping;
  usetexture2.repeat.set(70, 70);



  // const [imageUrl, setImageUrl] = useState([]);
  // const [check,setCheck] = useState(false);
  // let randomImageUrl;
  // let randomIndex;

//   Axios.get('https://busy-red-colt-toga.cyclic.app/getmushroom_cat3').then((response)  => {
//     setImageUrl(response.data);
// });

// if(check===false)
// {
//   randomIndex = imageUrl[Math.floor(Math.random() * imageUrl.length)];
//   randomImageUrl = imageUrl?.[randomIndex]?.forest_image;
//   setCheck(true);
// }

// console.log(randomIndex)

  // const getNewImageUrl = () => {
  //   Axios.get('https://busy-red-colt-toga.cyclic.app/getmushroom_cat3')
  //     .then((response)  => {
  //       const randomIndex = Math.floor(Math.random() * response.data.length);
  //       const randomImageUrl = response.data?.[randomIndex]?.forest_image;
  //       setImageUrl(response.data);
  //       setTextureUrl(`https://busy-red-colt-toga.cyclic.app/images/${randomImageUrl}`);
  //     });
  // };

const map = useLoader(TextureLoader, pic1);
const map2 = useLoader(TextureLoader,pic2);
const map3 = useLoader(TextureLoader,pic3);
const map4 = useLoader(TextureLoader,pic4);
const map5 = useLoader(TextureLoader,pic5);
const map6 = useLoader(TextureLoader,pic6);
const map7 = useLoader(TextureLoader,pic7);
const map8 = useLoader(TextureLoader,pic8);
const map9 = useLoader(TextureLoader,pic3);

  const forest1 = useLoader(TextureLoader,for1);
  const forest2 = useLoader(TextureLoader,for2);
  const forest3 = useLoader(TextureLoader,for3);
  const forest4 = useLoader(TextureLoader,for4);
  const forest5 = useLoader(TextureLoader,for5);
  const forest6 = useLoader(TextureLoader,for6);
  const forest7 = useLoader(TextureLoader,for7);



  const herbs1 = useLoader(TextureLoader,herb1);
  const herbs2 = useLoader(TextureLoader,herb2);
  const herbs3 = useLoader(TextureLoader,herb3);
  const herbs4 = useLoader(TextureLoader,herb4);
  const herbs5 = useLoader(TextureLoader,herb5);
  const herbs6 = useLoader(TextureLoader,herb6);
  const herbs7 = useLoader(TextureLoader,herb7);
  const herbs8 = useLoader(TextureLoader,herb8);


  const refs = useLoader(TextureLoader,ref);
  const nameclassforests = useLoader(TextureLoader,nameclassforest);
  const nameclassherbs = useLoader(TextureLoader,nameclassherb);
  const nameclassmushrooms = useLoader(TextureLoader,nameclassmushroom);


  const usetextures = useLoader(TextureLoader, book);
  const modRef3 = useRef()
  useFrame((state, delta) => {
    modRef3.current.rotation.x = modRef3.current.rotation.y = modRef3.current.rotation.z += delta
  })
  

  
  return (  
   <>
        <mesh  ref={modRef3}  position={([-0.85, 12.5, 60])}   > 
          <boxGeometry args={[4,4.7,1.295]}/>
          <meshPhysicalMaterial  map={usetextures}/>
        </mesh>
         <mesh  ref={nameclass1} receiveShadow >
        <boxBufferGeometry args={[10.05,5.15,0.5]}/>
        <meshPhysicalMaterial    map={nameclassforests}/>
      </mesh>
      <mesh  ref={nameclass3} receiveShadow >
        <boxBufferGeometry args={[10.05,5.15,0.5]}/>
        <meshPhysicalMaterial    map={nameclassherbs}/>
      </mesh>
      <mesh  ref={nameclass2} receiveShadow >
        <boxBufferGeometry args={[10.05,5.15,0.5]}/>
        <meshPhysicalMaterial    map={nameclassmushrooms}/>
      </mesh>






      <mesh  ref={refplaneimage5} receiveShadow >
        <boxBufferGeometry args={[22.8,11.1,0.5]}/>
        <meshStandardMaterial    map={map} />
      </mesh>
      <mesh  ref={refplaneimage4} receiveShadow >
        <boxBufferGeometry args={[8.05,4.15,0.5]}/>
        <meshPhysicalMaterial   map={map2} />
      </mesh>
      <mesh  ref={refplaneimage000} receiveShadow >
        <boxBufferGeometry args={[0.25,11.9,9.6]}/>
        <meshPhysicalMaterial   map={map2}/>
      </mesh>
      <mesh  ref={refplaneimage001} receiveShadow >
        <boxBufferGeometry args={[0.25,11.9,9.6]}/>
        <meshPhysicalMaterial   map={map3}/>
      </mesh>
      <mesh  ref={refplaneimage0001} receiveShadow >
        <boxBufferGeometry args={[0.25,11.9,9.6]}/>
        <meshPhysicalMaterial   map={map8}/>
      </mesh>
      <mesh  ref={refplaneimage01} receiveShadow >
        <boxBufferGeometry args={[0.25,11.9,9.6]}/>
        <meshPhysicalMaterial   map={map5}/>
      </mesh>
      <mesh  ref={refplaneimage1} receiveShadow >
        <boxBufferGeometry args={[8.05,4.15,0.5]}/>
        <meshPhysicalMaterial   map={map6}/>
      </mesh>
      <mesh  ref={refplaneimage0} receiveShadow >
        <boxBufferGeometry args={[0.25,11.9,9.6]}/>
        <meshPhysicalMaterial   map={map7}/>
      </mesh>
      <mesh  ref={refplaneimage0012} receiveShadow >
        <boxBufferGeometry args={[0.25,11.9,9.6]}/>
        <meshPhysicalMaterial   map={map4}/>
      </mesh>










      <mesh  ref={refplaneimage2} receiveShadow >
        <boxBufferGeometry args={[8.05,4.15,0.5]}/>
        <meshPhysicalMaterial   map={forest1}/>
      </mesh>
      <mesh  ref={refplaneimage222} receiveShadow >
        <boxBufferGeometry args={[9.2,11.2,0.5]}/>
        <meshPhysicalMaterial   map={forest2}/>
      </mesh>
      <mesh  ref={refplaneimage8} receiveShadow >
        <boxBufferGeometry args={[22.8,11.1,0.5]}/>
        <meshPhysicalMaterial   map={forest3} />
      </mesh>
      <mesh  ref={refplaneimage3} receiveShadow >
        <boxBufferGeometry args={[8.05,4.15,0.5]}/>
        <meshPhysicalMaterial   map={forest4}/>
      </mesh>   
      <mesh  ref={refplaneimage22} receiveShadow >
        <boxBufferGeometry args={[0.25,11.9,9.6]}/>
        <meshPhysicalMaterial   map={forest5}/>
      </mesh>
      <mesh  ref={refplaneimage33} receiveShadow >
        <boxBufferGeometry args={[0.25,11.9,9.6]}/>
        <meshPhysicalMaterial   map={forest6}/>
      </mesh>
      <mesh  ref={refplaneimage333} receiveShadow >
        <boxBufferGeometry args={[9.2,11.2,0.5]}/>
        <meshPhysicalMaterial   map={forest7}/>
      </mesh>

      <mesh  ref={refplaneimage134} receiveShadow >
        <boxBufferGeometry args={[0.25,11.9,25.6]}/>
        <meshPhysicalMaterial   map={forest6}/>
      </mesh>




      <mesh  ref={refplaneimage} receiveShadow >
        <boxBufferGeometry args={[8.05,4.15,0.5]}/>
        <meshPhysicalMaterial    map={herbs1}/>
      </mesh>
      <mesh  ref={refplaneimage13} receiveShadow >
        <boxBufferGeometry args={[9.2,11.2,0.5]}/>
        <meshPhysicalMaterial   map={herbs2} />
      </mesh>
      <mesh  ref={refplaneimage10} receiveShadow >
        <boxBufferGeometry args={[0.25,11.4,9.6]}/>
        <meshPhysicalMaterial   map={herbs3} />
      </mesh>
      <mesh  ref={refplaneimage2223} receiveShadow >
        <boxBufferGeometry args={[0.25,11.9,25.6]}/>
        <meshPhysicalMaterial   map={herbs4}/>
      </mesh>
      <mesh  ref={refplaneimage6} receiveShadow >
        <boxBufferGeometry args={[5.65,8.30,0.5]}/>
        <meshPhysicalMaterial   map={ herbs5} />
      </mesh>
      <mesh  ref={refplaneimage9} receiveShadow >
        <boxBufferGeometry args={[0.25,11.4,9.6]}/>
        <meshPhysicalMaterial   map={herbs6} />
      </mesh>
      <mesh  ref={refplaneimage7} receiveShadow >
        <boxBufferGeometry args={[22.8,11.1,0.5]}/>
        <meshPhysicalMaterial   map={herbs7} />
      </mesh>
      <mesh  ref={refplaneimage12} receiveShadow >
        <boxBufferGeometry args={[9.2,11.2,0.5]}/>
        <meshPhysicalMaterial   map={herbs8} />
      </mesh>





      <mesh  ref={refplaneimage11} receiveShadow >
        <boxBufferGeometry args={[0.1,25,25]}/>
        <meshPhysicalMaterial   map={refs} />
      </mesh>
      </>    
        );
      }
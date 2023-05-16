import * as THREE from 'three'
import { useLoader  } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";
export  const Planes = ({ ...props }) => {

   const [refL] = useBox(() => ({ 
      type: "static", 
      args: [5,50,70],
      position: [40, 20, 30],
      }));
   const [refL1] = useBox(() => ({ 
      type: "static", 
      args: [5,50,70],
      position: [40, 20, 140],
      }));

      const [refL2] = useBox(() => ({ 
         type: "static", 
         args: [5,0,70],
         position: [40, 30, 100],
      }));

      const [refR] = useBox(() => ({ 
         type: "static", 
         args: [5,0,70],
         position: [-40, 30, 100],
      }));

      const [refR1] = useBox(() => ({ 
         type: "static", 
         args: [5,50,70],
         position: [-40, 20, 30],
      }));

      const [refR2] = useBox(() => ({ 
         type: "static", 
         args: [5,50,70],
         position: [-40, 20, 140],
      }));



      const [refplanes] = useBox(() => ({ 
         type: "static", 
         args: [12,28,1],
         position: [15, 5, 100.7],
      }));
      
      const [refplanes2] = useBox(() => ({ 
         type: "static", 
         args: [12,28,1],
         position: [-16, 5, 100.7],
      }));

      const [refplanes3] = useBox(() => ({ 
         type: "static", 
         args: [12,28,1],
         position: [58, 5, 85],
      }));
      
      const [refplanes4] = useBox(() => ({ 
         type: "static", 
         args: [12,28,1],
         position: [91, 5, 85],
      }));
      const [refplanes5] = useBox(() => ({ 
         type: "static", 
         args: [12,28,1],
         position: [-93, 5, 85],
      }));
      
      const [refplanes6] = useBox(() => ({ 
         type: "static", 
         args: [12,28,1],
         position: [-57, 5, 85],
      }));

      // const [refbox] = useBox(() => ({ 
      //    type: "static", 
      //    args: [4.2,4.1,4.4],
      //    position: [-15, 5, 40],
      // }));
      const [refbox1] = useBox(() => ({ 
         type: "static", 
         args: [4.2,4.1,4.4],
         position: [-0.85, 5, 60],
      }));


      // const [refbox2] = useBox(() => ({ 
      //    type: "static", 
      //    args: [4.2,4.1,4.4],
      //    position: [18.2, 5, 40],
      // }));


  const usetexture = useLoader(THREE.TextureLoader,process.env.PUBLIC_URL + "/imagess/wall/WhiteWall.jpg");
  usetexture.wrapS = THREE.RepeatWrapping;
  usetexture.wrapT = THREE.RepeatWrapping;
  usetexture.repeat.set(70, 70);
  
  const usetexture2 = useLoader(THREE.TextureLoader,process.env.PUBLIC_URL + "/imagess/ground/BAZALTao.jpg");
  usetexture2.wrapS = THREE.RepeatWrapping;
  usetexture2.wrapT = THREE.RepeatWrapping;
  usetexture2.repeat.set(70, 70);
 

  return (  
   <>
      <mesh  ref={refL} receiveShadow >
        <boxBufferGeometry args={[5,30,70]}/>
        <meshPhysicalMaterial  map={usetexture}/>
      </mesh>
      <mesh  ref={refL1} receiveShadow >
            <boxBufferGeometry args={[5,30,70]}/>
            <meshPhysicalMaterial  map={usetexture}/>
      </mesh>
      <mesh  ref={refL2} receiveShadow >
            <boxBufferGeometry args={[5,10,70]}/>
            <meshPhysicalMaterial  map={usetexture}/>
      </mesh>
      <mesh  ref={refR} receiveShadow >
            <boxBufferGeometry args={[5,10,70]}/>
            <meshPhysicalMaterial  map={usetexture}/>
      </mesh>
      <mesh  ref={refR1} receiveShadow >
            <boxBufferGeometry args={[5,30,70]}/>
            <meshPhysicalMaterial  map={usetexture}/>
      </mesh>
      <mesh  ref={refR2} receiveShadow >
            <boxBufferGeometry args={[5,30,70]}/>
            <meshPhysicalMaterial  map={usetexture}/>
      </mesh>
      <mesh  ref={refplanes} receiveShadow >
        <boxBufferGeometry args={[12,25,1]}/>
        <meshPhysicalMaterial  map={usetexture}/>
      </mesh>
      <mesh  ref={refplanes2} receiveShadow >
        <boxBufferGeometry args={[12,25,1]}/>
        <meshPhysicalMaterial  map={usetexture}/>
      </mesh>
      <mesh  ref={refplanes3} receiveShadow >
        <boxBufferGeometry args={[12,25,1]}/>
        <meshPhysicalMaterial  map={usetexture}/>
      </mesh>
      <mesh  ref={refplanes4} receiveShadow >
        <boxBufferGeometry args={[12,25,1]}/>
        <meshPhysicalMaterial  map={usetexture}/>
      </mesh>
      <mesh  ref={refplanes5} receiveShadow >
        <boxBufferGeometry args={[12,25,1]}/>
        <meshPhysicalMaterial  map={usetexture}/>
      </mesh>
      <mesh  ref={refplanes6} receiveShadow >
        <boxBufferGeometry args={[12,25,1]}/>
        <meshPhysicalMaterial  map={usetexture}/>
      </mesh>
      {/* <mesh  ref={refbox} receiveShadow >
        <boxBufferGeometry args={[4.2,4.1,4.4]}/>
        <meshPhysicalMaterial  map={usetexture}/>
      </mesh> */}
      <mesh  ref={refbox1} receiveShadow >
        <boxBufferGeometry args={[2,8,2]}/>
        <meshPhysicalMaterial  map={usetexture}/>
      </mesh>

      {/* <mesh  ref={refbox2} receiveShadow >
        <boxBufferGeometry args={[4.2,4.1,4.4]}/>
        <meshPhysicalMaterial  map={usetexture}/>
      </mesh> */}
      </>      
  )
}
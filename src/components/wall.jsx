import * as THREE from 'three'
import React, { useMemo } from 'react';
import { useBox } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";

import { 
    MTLLoader, OBJLoader, DDSLoader
} from 'three-stdlib';
THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader())

export const Wall = ({ 
    scale,
    position,
    mapUrl
})  => {
    let texture;
    const size = 5;
    const materials = useLoader(MTLLoader, process.env.PUBLIC_URL +"/models/wall/wall.mtl")
    const obj = useLoader(OBJLoader, process.env.PUBLIC_URL+ "/models/wall/wall.obj", (loader) => {
        materials.preload()
        loader.setMaterials(materials)
      })

    const [refFront] = useBox(() => ({ 
        type: "static", 
        args: [800, 50, 1], /*scale*/
        position: [0, 0, 0], 
    }));
    const [refBack] = useBox(() => ({ 
        type: "static", 
        args: [1400, 50, 1],
        position: [0, 0, 162],
    }));
    const [refL] = useBox(() => ({ 
        type: "static", 
        args: [1, 50, 2600],
        position: [-106, 0, 0],
    }));
    const [refR] = useBox(() => ({ 
        type: "static", 
        args: [1, 50, 800],
        position: [105, 0, 0],
    }));
    const [refTop] = useBox(() => ({ 
        type: "static", 
        args: [800, 300, 800],
        position: [0, 80, 0],
    }));
    
    texture =  useMemo(() => new THREE.TextureLoader().load(mapUrl), [mapUrl]);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(size, size);
   


    obj.traverse( function ( child ) {
        if ( child.isMesh ) {
            child.castShadow = true;
            child.receiveShadow = true;
            child.material.side = THREE.DoubleSide;
            child.material.map = texture;
            child.material.metalness = 0;
            child.material.roughness = 1;
        }
    })
    
    return (
        <>
        <mesh ref={refFront}/>
        <mesh ref={refL}/>
        <mesh ref={refR}/>
        <mesh ref={refBack}/>
        <mesh ref={refTop}/>
       <primitive 
        scale={scale}
        position={position}
        object={obj}
        dispose={null}
       />

       </>
    )
}



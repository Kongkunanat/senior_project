import React, { useMemo } from 'react';
import { usePlane } from '@react-three/cannon';
import * as THREE from 'three';

export const Ground = ({ 
    marbleAlphaMap, 
    marbleMap
}) => {

    const size = 4.6;

    const [ref] = usePlane(() => ({ 
		rotation: [-Math.PI / 2, 0, 0], position: [0, 5, 0]
    }));


    marbleMap = useMemo(() => new THREE.TextureLoader().load(marbleMap), [marbleMap]);
    marbleMap.wrapS = THREE.MirroredRepeatWrapping;
    marbleMap.wrapT = THREE.MirroredRepeatWrapping;
    marbleMap.repeat.set(size, size);

    marbleAlphaMap = useMemo(() => new THREE.TextureLoader().load(marbleAlphaMap), [marbleAlphaMap]);
    marbleAlphaMap.wrapS = THREE.MirroredRepeatWrapping;
    marbleAlphaMap.wrapT = THREE.MirroredRepeatWrapping;
    marbleAlphaMap.repeat.set(size, size);



    return (
		<>
            <mesh ref={ref} receiveShadow>
                <planeBufferGeometry attach="geometry" args={[400, 400]} />
                <meshPhysicalMaterial 
                    attach="material"
                    reflectivity={0}
                    clearcoat={1}
                    transparent
                    roughness={0.5}
                    metalness={0.3}
                >
                    <primitive attach="map" object={marbleMap} />
                    <primitive attach="alphaMap" object={marbleAlphaMap} />
                </meshPhysicalMaterial>
            </mesh>
		</>
    );
}
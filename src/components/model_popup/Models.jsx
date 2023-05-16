import { useGLTF} from '@react-three/drei';
import { useRef, useState,useEffect} from 'react';
import { useFrame} from '@react-three/fiber';
import { a } from '@react-spring/three';
import { Select  } from '@react-three/postprocessing'


export function Models(props) {
    const group = useRef()
    const [hovered, set] = useState(false)
    const prevRef = useRef()
    const { nodes, materials } = useGLTF(process.env.PUBLIC_URL+ "/models/mushrooms/scene.gltf")
    useEffect(() => void (prevRef.current = hovered), [hovered])
    useFrame((state) => {
      const time = state.clock.getElapsedTime()
      group.current.rotation.y = Math.sin(time / 2)
    })
    return (
      <Select enabled={hovered}>
      <a.group ref={group} {...props} scale={0.2} 
      onPointerOver={(event) => set(true)} 
      onPointerOut={(event) => set(false)}>
  
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_2.geometry} material={materials.standardSurface2SG} />
          <mesh geometry={nodes.Object_3.geometry} material={materials.standardSurface3SG} />
        </group>
      </a.group>
      </Select>
    )
  }
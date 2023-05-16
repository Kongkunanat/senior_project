import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export  function Models(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(process.env.PUBLIC_URL+ "/models/victorian_window/scene.gltf")
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.8, 0.8, 0.8]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, -31.44, -8.53]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes['Object009_Material_#48_0'].geometry} material={materials.Material_48} />
          </group>
          <group rotation={[-Math.PI / 2, 0, -Math.PI]}>
            <mesh geometry={nodes['win_Material_#49_0'].geometry} material={materials.Material_49} />
          </group>
          <group position={[0, 25.12, 9.95]} rotation={[-Math.PI, 0, 0]}>
            <mesh geometry={nodes['glass_Material_#47_0'].geometry} material={materials.Material_47} />
          </group>
        </group>
      </group>
    </group>
  )
}
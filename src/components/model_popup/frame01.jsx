import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export  function Framemodel01(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(process.env.PUBLIC_URL + "/models/frame_01/scene.gltf")
  return (
    <group ref={group} {...props} dispose={null} >
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh geometry={nodes.Frame_01_C_Frame_01_C_0.geometry} material={materials.Frame_01_C} />
        </group>
      </group>
    </group>
  )
}

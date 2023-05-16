import  { useRef, useState,useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { a } from '@react-spring/three';
import { Select  } from '@react-three/postprocessing'

export  function FrameModel(props) {
  const group = useRef()
  const [hovered, set] = useState(false)
  const prevRef = useRef()
  const { nodes, materials } = useGLTF(process.env.PUBLIC_URL + "/models/photo_frame/scene.gltf")
  useEffect(() => void (prevRef.current = hovered), [hovered])
  return (
    <Select enabled={hovered}>
    <a.group ref={group} {...props}     onPointerOver={(event) => set(true)} 
      onPointerOut={(event) => set(false)}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.1, 0.1, 0.1]}>
            <mesh geometry={nodes.painting_m_painting_0.geometry} material={materials.m_painting} />
          </group>
          <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.shadow_m_shadow_0.geometry} material={materials.m_shadow} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.1, 0.1, 0.1]}>
            <mesh geometry={nodes.frame_insA_45o_m_frame_insA_45o_0.geometry} material={materials.m_frame_insA_45o} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.1, 0.1, 0.1]}>
            <mesh geometry={nodes.frame_insB_45o_m_frame_insB_45o_0.geometry} material={materials.m_frame_insB_45o} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.1, 0.1, 0.1]}>
            <mesh
              geometry={nodes.frame_insA_shadow_m_frame_insA_shadow_0.geometry}
              material={materials.m_frame_insA_shadow}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.1, 0.1, 0.1]}>
            <mesh
              geometry={nodes.frame_insB_shadow_m_frame_insB_shadow_0.geometry}
              material={materials.m_frame_insB_shadow}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.1, 0.1, 0.1]}>
            <mesh geometry={nodes.frame_insB_m_frame_insB_0.geometry} material={materials.m_frame_insB} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.1, 0.1, 0.1]}>
            <mesh geometry={nodes.frame_insA_m_frame_insA_0.geometry} material={materials.m_frame_insA} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.frame_m_frame_0.geometry} material={materials.m_frame} />
          </group>
        </group>
      </group>
    </a.group>
    </Select>
  )
}

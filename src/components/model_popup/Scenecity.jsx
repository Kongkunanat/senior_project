import { useGLTF } from '@react-three/drei'

export function Modelcity(props) {
  const { nodes, materials } = useGLTF(process.env.PUBLIC_URL+ "/models/city_map_framed_wall_art_print_amsterdam/scene.gltf")
  return (
    <group {...props} dispose={null}>
      <group position={[0, 100, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, -0.48, 0]}>
          <mesh geometry={nodes.City_Map_Amsterdam_50x50_PRINT_0.geometry} material={materials.PRINT} />
          <mesh geometry={nodes.City_Map_Amsterdam_50x50_FRAME_0.geometry} material={materials.FRAME} />
        </group>
      </group>
    </group>
  )
}



import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from "three";
import for1 from "../../src/imagess/forest/แจง.jpg";


export  function Effectforbox4(props) {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const [selected, setSelected] = useState(false)
 
  useFrame(() => {
    ref.current.rotation.x  = hovered
    ? MathUtils.lerp(ref.current.rotation.x, -Math.PI * 2, 0.025)
    : MathUtils.lerp(ref.current.rotation.x, 0, 0.025)

    ref.current.position.z = hovered
      ? MathUtils.lerp(ref.current.position.z, ref.current.position.z-9.5, 0.075)
      : MathUtils.lerp(ref.current.position.z+2, 7, 0.025)
  })

  const forest1 = useLoader(TextureLoader,for1);

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={() => {
        setSelected(!selected)
      }}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}>
      <boxBufferGeometry args={[8.05,4.15,0.5]}/>
      <meshPhysicalMaterial map={forest1} />
    </mesh>
  )
}

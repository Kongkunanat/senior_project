import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from "three";
import herb5 from "../../src/imagess/herb/มะนาวโห่พันธุ์เล็ก.jpg";

export  function Effectforbox2(props) {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const [selected, setSelected] = useState(false)
 
  useFrame(() => {
    ref.current.rotation.x  = hovered
    ? MathUtils.lerp(ref.current.rotation.x, -Math.PI * 2, 0.025)
    : MathUtils.lerp(ref.current.rotation.x, 0, 0.025)

    ref.current.position.z = hovered
      ? MathUtils.lerp(ref.current.position.z, ref.current.position.z-9, 0.075)
      : MathUtils.lerp(ref.current.position.z+2, 7, 0.025)
  })

  const herbs5 = useLoader(TextureLoader,herb5);

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={() => {
        setSelected(!selected)
      }}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}>
      <boxBufferGeometry args={[5.7,8.25,0.5]}/>
      <meshPhysicalMaterial map={herbs5} />
    </mesh>
  )
}

import { PointerLockControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from 'react';

export const FPV = () => {
	const { camera, gl } = useThree()
	const controls = useRef()
	useEffect(() => {
        document.addEventListener("click", () => {
            controls.current.lock()
        })
    }, [])
	return (<PointerLockControls ref={controls} args={[camera, gl.domElement]}/>)
}
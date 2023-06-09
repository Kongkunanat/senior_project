import { useFrame, useThree } from "@react-three/fiber"
import { useSphere } from "@react-three/cannon"
import { useEffect, useRef } from "react"
import { Vector3 } from "three"
import { useKeyboard } from "../hooks/useKeyboard"
import { FPV } from './FPV'

const JUMP_FORCE = 2;
const SPEED = 40;
const height = 6;

export const Player = () => {
	const { moveBackward, moveForward, moveRight, moveLeft, jump } = useKeyboard()

	const { camera } = useThree()
	const [ref, api] = useSphere(() => ({
		mass: 1,
		type: 'Dynamic',
		position: [0,0.5+height, 80],
	}))

	const vel = useRef([0, 0, 0])
	useEffect(() => {
		api.velocity.subscribe((v) => vel.current = v)
	}, [api.velocity])

	const pos = useRef([0, 0, 0])
	useEffect(() => {
		api.position.subscribe((p) => pos.current = p)
	}, [api.position])

	useFrame(() => {
		camera.position.copy(new Vector3(pos.current[0], pos.current[1]+height, pos.current[2]))

		const direction = new Vector3()

		const frontVector = new Vector3(
			0,
			0,
			(moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
		)

		const sideVector = new Vector3(
			(moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
			0,
			0,
		)

		direction
			.subVectors(frontVector, sideVector)
			.normalize()
			.multiplyScalar(SPEED)
			.applyEuler(camera.rotation)

		api.velocity.set(direction.x, vel.current[1], direction.z)

		if (jump && Math.abs(vel.current[1]) < 0.05) {
			api.velocity.set(vel.current[0], JUMP_FORCE, vel.current[2])
		}
	})

	return (
		<>
		<FPV />
		<mesh ref={ref}>   </mesh>
		</>
	)
}
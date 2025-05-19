import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'

useGLTF.preload('/earth.glb')

export default function Model() {
  const group = useRef<Group>(null)
  const { scene } = useGLTF('/earth.glb')

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.003
    }
  })

  return (
    <group ref={group} scale={2.9} rotation={[0.3, 3.35, 0]} > 
      <primitive object={scene} />
    </group>
  )
}

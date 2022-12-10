/* eslint-disable react/no-unknown-property */
// import * as Drei from '@react-three/drei'
import React, { useRef, FC } from 'react'

// import { useGLTF } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { Mesh } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// import { useLoader } from '@react-three/fiber'

type ModelProps = {
  position: [x: number, y: number, z: number]
}

const LoadModel = () => {
  const gltf = useLoader(GLTFLoader, '/assets/guitar_Model.gltf')
  return (
    <primitive
      object={gltf.scene}
      rotation={[0, 0.1, 1.5]}
      scale={[0.08, 0.08, 0.08]}
      dispose={null}
    />
  )
}

const AboutModel: FC<ModelProps> = (props) => {
  // const gltf = useGLTF('/assets/guitar.glb')
  const mesh = useRef<Mesh>(null!)
  useFrame(() => (mesh.current.rotation.x += 0.008))
  return (
    <mesh {...props} ref={mesh}>
      <LoadModel />
    </mesh>
  )
}

export default AboutModel

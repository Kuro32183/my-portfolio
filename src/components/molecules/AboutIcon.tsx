/* eslint-disable react/no-unknown-property */
/* eslint-disable react/display-name */
import React from 'react'

import { PresentationControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'

import AboutModel from '~/components/atoms/AboutModel'

// const AboutModel = dynamic(() => import('../atoms/AboutModel'))

const Rig = ({ v = new Vector3() }) => {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 2, state.mouse.y / 2, 10),
      0.1
    )
  })
}

const AboutIcon: React.FC = React.memo(() => {
  return (
    <div
      style={{
        width: '80vw',
        height: '40vh',
        background: 'transparent',
        margin: '0 auto',
      }}
    >
      <Canvas>
        <ambientLight />
        <Rig />
        <fog attach="fog" color={'#fff'} near={1} far={0} />
        <pointLight position={[20, 20, 20]} />
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          //   snap={{ mass: 4, tension: 200 }}
          // rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <AboutModel position={[0, 0, 0]} />
        </PresentationControls>
        {/* <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
	  <Environment preset='city' /> */}
      </Canvas>
    </div>
  )
})

export default AboutIcon

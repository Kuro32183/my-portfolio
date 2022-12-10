import React, { FC, useCallback } from 'react'

import Particles from 'react-particles'
import type { Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'
import { ISourceOptions } from 'tsparticles-engine'
import { Box } from '@chakra-ui/react'

import particlesOptions from './particles.json'

const NightScene: FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])
  return (
    <Box
      background="#000000"
      position="fixed"
      zIndex="0"
      display={{ lg: 'none' }}
    >
      <Particles
        options={particlesOptions as ISourceOptions}
        init={particlesInit}
        className=""
      />
    </Box>
  )
}

export default NightScene

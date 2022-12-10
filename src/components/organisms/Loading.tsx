import { FC } from 'react'

import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'

import LoadingText from '~/components/molecules/LoadingText'
const Loading: FC = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ y: -1500, opacity: 0 }}
      >
        <Box fontSize="2.5rem" textAlign="center" fontWeight="bold">
          <LoadingText />
        </Box>
      </motion.div>
    </>
  )
}

export default Loading

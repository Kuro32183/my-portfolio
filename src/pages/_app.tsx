/* eslint-disable @next/next/inline-script-id */
/* eslint-disable no-unused-vars */
import 'styles/globals.css'
import 'styles/main.scss'
// import { useEffect, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/provider'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

// import Loading from '~/components/organisms/Loading'

import theme from 'libs/styles'
// import { LoadingBox } from '~/libs/chakraBox'
import MyHead from '~/components/organisms/MyHead'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  console.log(router.pathname)

  // const [isLoading, setIsLoading] = useState<boolean>(true)
  // useEffect(() => {
  //   setIsLoading(true)
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 3000)
  // }, [])
  // if (isLoading) {
  //   return (
  //     <>
  //       <MyHead />
  //       <AnimatePresence
  //         exitBeforeEnter
  //         onExitComplete={() => window.scrollTo(0, 0)}
  //       >
  //         <LoadingBox
  //           position="fixed"
  //           top="50%"
  //           left="50%"
  //           transform="translate(-50%, -50%)"
  //         >
  //           <Loading />
  //         </LoadingBox>
  //       </AnimatePresence>
  //     </>
  //   )
  // }

  return (
    <>
      <MyHead />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <AnimateSharedLayout>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </AnimateSharedLayout>
      </AnimatePresence>
    </>
  )
}

export default MyApp

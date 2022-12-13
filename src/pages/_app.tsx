/* eslint-disable @next/next/inline-script-id */
/* eslint-disable no-unused-vars */
import 'styles/globals.css'
import 'styles/main.scss'

import { ChakraProvider } from '@chakra-ui/provider'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
// import { UseEffectScroll } from 'react-use-smooth-scroll'
import 'react-use-smooth-scroll/dist/index.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import theme from 'libs/styles'
import MyHead from '~/components/organisms/MyHead'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  console.log(router.pathname)

  return (
    <>
      <MyHead />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <AnimateSharedLayout>
          <ChakraProvider theme={theme}>
            {/* <UseEffectScroll> */}
            <Component {...pageProps} />
            {/* </UseEffectScroll> */}
          </ChakraProvider>
        </AnimateSharedLayout>
      </AnimatePresence>
    </>
  )
}

export default MyApp

import React, { useEffect, useRef } from 'react'

// eslint-disable-next-line import/order
import { Box } from '@chakra-ui/react'

// eslint-disable-next-line import/order
import { timeline } from 'motion'
// eslint-disable-next-line import/order
// import imagesLoaded from 'imagesloaded'
import { TimelineDefinition } from '@motionone/dom/types/timeline/types'

import LoadingImage from '~/components/atoms/LoadingImage'

// import useLocomotiveScroll from '~/hooks/useLocomotiveScroll'

// const preloadImages = (selector: string) => {
//   return new Promise((resolve) => {
//     imagesLoaded(
//       document.querySelectorAll(selector),
//       { background: true },
//       resolve
//     )
//   })
// }

export default function Loading() {
  const countRef = useRef<HTMLUListElement | null>(null)
  const loaderRef = useRef<HTMLDivElement | null>(null)

  // const [locomotiveRef] = useLocomotiveScroll({
  //   ref: scrollRef,
  //   smooth: true,
  //   smoothMobile: true,
  // })

  // useEffect(() => {
  //   Promise.all([preloadImages('.grid-item-media')]).then(() => {
  //     if (locomotiveRef.current) {
  //   locomotiveRef.current.update()
  //     }
  //   })
  // }, [])
  //ONLY FIRST LOADING
  // useEffect(() => {
  //   function loadedPage() {
  //     const loadingID = document.getElementById('loading')
  //     loadingID!.classList.add('loadingNone')
  //   }

  //   if (!sessionStorage.getItem('visited')) {
  //     sessionStorage.setItem('visited', 'first')
  //     window.addEventListener('load', function () {
  //       setTimeout(loadedPage, 30000)
  //     })
  //     setTimeout(loadedPage, 30000)
  //   } else {
  //     loadedPage()
  //   }
  // })

  useEffect(() => {
    const sequence2: TimelineDefinition = [
      [countRef.current, { opacity: 0 }, { at: '<' }],
      [loaderRef.current, { y: '-130vh' }, { at: '-0.5' }],
    ] as TimelineDefinition

    timeline(sequence2, {
      defaultOptions: { easing: [0.77, 0, 0.175, 1], duration: 1, delay: 3 },
    })
  }, [])

  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        // inset="0"
        // m="auto"
        zIndex="999"
        bg="#000000"
        id="loading"
        ref={loaderRef}
      >
        <Box
          position="absolute"
          top="60%"
          left="50%"
          h="200px"
          w="200px"
          minHeight="200px"
          maxHeight="300px"
        >
          <LoadingImage />
        </Box>
      </Box>
    </>
  )
}

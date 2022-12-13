/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/named */
import React, { useRef } from 'react'

import { SimpleGrid, Box, UnorderedList, Spacer } from '@chakra-ui/react'
import type {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPropsContext,
} from 'next'
import { useScroll, useTransform } from 'framer-motion'
// eslint-disable-next-line import/order
import dynamic from 'next/dynamic'
import LazyLoad from 'react-dom-lazyload-component'

// Introduction
const SmIntro = dynamic(
  () =>
    import('~/components/template/Intro/SmIntro').then((mod) => {
      if (window.innerWidth < 520) {
        return mod.SmIntro
      }
      return mod.SmIntroHide
    }) as any,
  { ssr: false }
)

const MdIntro = dynamic(
  () =>
    import('~/components/template/Intro/MdIntro').then((mod) => {
      if (window.innerWidth >= 520 && window.innerWidth <= 960) {
        return mod.MdIntro
      }
      return mod.MdIntroHide
    }) as any,
  { ssr: false }
)

const LgIntro = dynamic(
  () =>
    import('~/components/template/Intro/LgIntro').then((mod) => {
      if (window.innerWidth >= 960) {
        return mod.LgIntro
      }
      return mod.LgIntroHide
    }) as any,
  { ssr: false }
)

// About
// const About = React.lazy(() => import('~/components/template/About'))

// Function
const HomeFunctionsMobile = dynamic(
  () =>
    import('~/components/template/FunctionsMobile').then((mod) => {
      if (window.innerWidth < 960) {
        return mod.HomeFunctionsMobile
      }
      return mod.HomeFunctionsMobileHide
    }) as any,
  { ssr: false }
)
const FunctionsDesktop = dynamic(
  () =>
    import('~/components/template/FunctionsDesktop').then((mod) => {
      if (window.innerWidth >= 960) {
        return mod.FunctionsDesktop
      }
      return mod.FunctionsDesktopHide
    }) as any,
  { ssr: false }
)

// Blog
const Blogs = React.lazy(() => import('~/components/template/Blog/Blogs'))

//NightScene
const ProductCard = React.lazy(
  () => import('~/components/template/Product/ProductCard')
)

import { fetchBlogs, fetchProducts } from 'libs/fetchApi'
import { DesktopBox, MobileBox } from '~/libs/chakraBox'
import Layout from '~/components/template/Layout'
import About from '~/components/template/About'
import HiddenTitle from '~/components/atoms/HiddenTitle'
import NightScene from '~/components/organisms/NightScene/NightScene'
import SectionTitle from '~/components/molecules/SectionTitle'
import Loading from '~/components/organisms/Loading'
import Footer from '~/components/organisms/Footer'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const products = await fetchProducts()
  const blogs = await fetchBlogs()
  return {
    props: {
      products,
      blogs,
    },
    revalidate: 300,
  }
}

const Home: NextPage<PageProps> = (props) => {
  const { scrollY } = useScroll()
  const screenHeight = 2550
  const opacityBg = useTransform(
    scrollY,
    [
      screenHeight - 700,
      screenHeight - 200,
      screenHeight + 2400,
      screenHeight + 2650,
    ],
    [0, 1, 1, 0]
  )
  const { blogs, products } = props

  return (
    <>
      <Layout>
        <Box as="div">
          <Loading />
          <Box
            id="intro"
            as="div"
            h="100vh"
            w="100vw"
            bg="#000000"
            zIndex="-1"
            display={{ lg: 'none' }}
          />
          {/* Introduction */}

          <Box as="div" bg="#000000" zIndex="-1">
            <HiddenTitle title={'イントロダクション'} />
            <Box as="div" display={{ base: 'block', md: 'none' }}>
              <SmIntro />
            </Box>
            <Box as="div" display={{ base: 'none', md: 'block', lg: 'none' }}>
              <MdIntro />
            </Box>
            <Box as="div" display={{ base: 'none', lg: 'block' }}>
              <LgIntro />
            </Box>
          </Box>

          <Box as="div" position="relative" zIndex="40" h="100%" bg="#000000">
            {/* NightScene */}

            <Box as="div">
              <HiddenTitle title={'ナイトシーン'} />
              <NightScene />
            </Box>

            {/* About */}
            <Box id="about" as="div" h={{ base: '100vh' }} pt="4rem">
              <HiddenTitle title={'著書について'} />
              {/* <LazyLoad> */}
              <About />
              {/* </LazyLoad> */}
            </Box>
            <Spacer h="20vh"></Spacer>

            <Box id="work">
              <HiddenTitle title={'当サイトについて'} />
              <MobileBox
                minWidth="100vw"
                minHeight="100vh"
                display={{ base: 'block', lg: 'none' }}
              >
                <HomeFunctionsMobile />
              </MobileBox>
              <DesktopBox
                style={{ opacity: opacityBg }}
                minWidth="100vw"
                minHeight="100vh"
                display={{ base: 'none', lg: 'block' }}
              >
                <FunctionsDesktop />
              </DesktopBox>
            </Box>

            <Spacer h="20vh"></Spacer>

            {/* Product */}
            <Box id="products" pt="2rem" as="div" px={{ md: '3rem', lg: '0' }}>
              <HiddenTitle title={'製作品一覧'} />
              <SectionTitle
                title={'Products'}
                src={`/title/wrench.svg`}
                alt={'products'}
              />
              <LazyLoad>
                <SimpleGrid
                  columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
                  gap={{ base: 6, md: 4, lg: 4 }}
                  px={{ base: 16, sm: 20, md: 5, lg: 20 }}
                >
                  {products.contents.map((product) => {
                    return <ProductCard product={product} key={product.id} />
                  })}
                </SimpleGrid>
              </LazyLoad>
            </Box>
            <Spacer h="40vh"></Spacer>

            {/* Blog */}
            <Box
              id="blogs"
              h="100vh"
              as="div"
              margin="0 auto"
              pt="2rem"
              textAlign="center"
            >
              <HiddenTitle title={'記事一覧'} />
              <SectionTitle
                title={'Blog'}
                src={'/title/pencil.svg'}
                alt={'blog'}
              />
              <LazyLoad>
                <UnorderedList
                  list-style="none"
                  display={{ base: 'inline-block', lg: 'flex' }}
                  justifyContent={{ lg: 'center' }}
                  role="list"
                >
                  {blogs.contents.map((blog) => (
                    <Blogs blog={blog} key={blog.id} />
                  ))}
                </UnorderedList>
              </LazyLoad>
            </Box>
            <Footer />
          </Box>
        </Box>
      </Layout>
    </>
  )
}

export default Home

/* eslint-disable import/order */
import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ProductBox, ProductImageBox } from 'libs/chakraBox'
import Link from 'next/link'

import { Product } from 'types/product'
import summary from 'utils/summary'

const ProductCard = (props: { product: Product }) => {
  const { product } = props

  const imageVariants = {
    beforeHover: {},
    onHover: { scale: 1.1 },
  }
  const textVariants = {
    beforeHover: { opacity: 0 },
    onHover: { opacity: 1 },
  }
  return (
    <Box
      key={product.id}
      maxWidth={{ base: '100%', lg: '90%' }}
      cursor="pointer"
      position="relative"
      m="10px auto"
      fontFamily="nijimi"
    >
      <Link
        href={`/products/${product.id}`} //prefetch
        prefetch={false}
      >
        <a>
          <ProductBox
            initial="beforeHover"
            whileHover="onHover"
            position="relative"
            maxWidth="250px"
            w={{ base: '230px', md: '100%', lg: '100%' }}
            h={{ base: '160px', md: '200px', lg: '200px' }}
            // overflow="hidden"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            zIndex="5"
          >
            <ProductImageBox
              src={product.thumbnail?.url}
              alt="product image"
              layoutId={product.thumbnail?.url}
              variants={imageVariants}
              loading="lazy"
              position="absolute"
              objectFit="contain"
              top="0"
              left="0"
              w="full"
              borderRadius="10px"
              zIndex="10"
              border="1px solid  #8b8b8b"
              decoding="async"
              display="inline"
            />
            {/* description */}
            <motion.div
              style={{
                overflow: 'hidden',
                padding: '0.5rem',
                zIndex: '15',
                background: 'RGBA(0, 0, 0, 0.68)',
                borderRadius: '5px',
              }}
              variants={textVariants}
            >
              {
                // meta descriptionが入力されていればそちらを出力し、無ければ本文の先頭140文字を出力
                product.description ? (
                  <Text minH={18} py={2} noOfLines={3} lineHeight="6" size="sm">
                    {product.description}
                  </Text>
                ) : (
                  <Text
                    size="sm"
                    minH={20}
                    py={2}
                    noOfLines={3}
                    lineHeight="6"
                    dangerouslySetInnerHTML={{
                      __html: summary(product.body),
                    }}
                  ></Text>
                )
              }
            </motion.div>
          </ProductBox>
        </a>
      </Link>
    </Box>
  )
}

export default ProductCard

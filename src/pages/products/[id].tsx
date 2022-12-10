import type { NextPage, GetStaticProps } from 'next'
import { PageConfig } from 'next'

import SingleProduct from '~/components/template/ProductPage/SingleProduct'
import blogClient from 'libs/blogClient'
import type { Product as ProductType, ProductListDetail } from 'types/product'
import MyHead from '~/components/organisms/MyHead'

export const config: PageConfig = {
  unstable_runtimeJS: false,
}

export const getStaticPaths = async () => {
  const data = await blogClient.getList<ProductType>({
    endpoint: 'product',
  })

  const paths = data.contents.map((content) => `/products/${content.id}`)

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id as string

  const data = await blogClient.getListDetail<ProductType>({
    endpoint: 'product',
    contentId: id,
  })
  return {
    props: {
      data,
    },
    revalidate: 300,
  }
}

type Props = {
  data: ProductListDetail
}

const PublicId: NextPage<Props> = ({ data }) => {
  return (
    <>
      <MyHead />
      <SingleProduct data={data} />
    </>
  )
}

export default PublicId

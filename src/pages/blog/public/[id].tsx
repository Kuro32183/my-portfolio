import type { NextPage, GetStaticProps } from 'next'
import { PageConfig } from 'next'

import SingleProduct from '~/components/template/BlogPage/SingleBlog'
import blogClient from 'libs/blogClient'
import type { Blog as BlogType, BlogListDetail } from 'types'
import MyHead from '~/components/organisms/MyHead'

export const config: PageConfig = {
  unstable_runtimeJS: false,
}

export const getStaticPaths = async () => {
  const data = await blogClient.getList<BlogType>({
    endpoint: 'blog',
    queries: {
      filters: 'private[equals]false',
    },
  })

  const paths = data.contents.map((content) => `/blog/public/${content.id}`)

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id as string

  const data = await blogClient.getListDetail<BlogType>({
    endpoint: 'blog',
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
  data: BlogListDetail
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

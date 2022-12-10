/* eslint-disable import/named */
/* eslint-disable import/no-named-as-default */
import blogClient from 'libs/blogClient'
import { BlogList, Blog } from 'types'
import { ProductList, Product } from 'types/product'
// import { toDateWithDelimiter } from 'utils/date'

// product
export const fetchProducts = async () => {
  const products = await blogClient.get<ProductList>({
    endpoint: 'product',
    queries: {
      fields: [
        'id',
        'title',
        'thumbnail',
        'description',
        'createdAt',
        'updatedAt',
        'publishedAt',
        'revisedAt',
      ],
    },
  })
  return products
}

export const fetchProduct = async (id: string) => {
  const product = await blogClient.get<Product>({
    endpoint: 'product',
    contentId: id,
  })
  return { product }
}

// blog
export const fetchBlogs = async () => {
  const blogs = await blogClient.get<BlogList>({
    endpoint: 'blog',
    queries: {
      fields: [
        'id',
        'private',
        'title',
        'description',
        'createdAt',
        'updatedAt',
        'publishedAt',
        'revisedAt',
      ],
    },
  })
  return blogs
}

export const fetchBlog = async (id: string) => {
  const blog = await blogClient.get<Blog>({
    endpoint: 'blog',
    contentId: id,
  })
  return { blog }
}

/* eslint-disable import/named */
import {
  MicroCMSListResponse,
  MicroCMSListContent,
  MicroCMSImage,
} from 'microcms-js-sdk'

export type Blog = {
  title?: string
  body?: string
  thumbnail?: MicroCMSImage
  private: boolean
  description?: string
  id?: string
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
  revisedAt?: string
}
export type BlogList = MicroCMSListResponse<Blog>
export type BlogListDetail = Blog & MicroCMSListContent

// //article

// type ListContents<T> = {
//   contents: T[]
//   totalCount: number
//   offset: number
//   limit: number
// }

// type Common<T> = {
//   id?: string
//   createdAt?: string
//   updatedAt?: string
//   publishedAt?: string
//   revisedAt?: string
// } & T

// type image = {
//   url: string
//   height: number
//   width: number
// }

// export type ArticlesList = ListContents<Article>
// //add
// export type ArticleListDetail = Article & MicroCMSListContent

// export type Article = Common<{
//   title?: string
//   description?: string
//   content?: string
//   category?: Category
//   tags?: Tag[]
//   mainvisual?: image
// }>

// export type TagsList = ListContents<Tag>

// type Tag = Common<{
//   tag?: string
//   icon?: image
// }>

// export type CategoriesList = ListContents<Category>

// export type Category = Common<{
//   name?: string
// }>

// export type AccountsList = ListContents<Account>

// export type Account = Common<{
//   name?: string
//   url?: string
//   image?: image
//   color?: string
// }>

// export type Meta = Common<{
//   title?: string
//   url?: string
//   description?: string
//   author?: string
//   authorId?: string
//   authorImage?: image
// }>

// // declare module '@auth0/nextjs-auth0' {
// //   export interface UserProvider {
// //     user: null
// //   }
// // }

// // export type User = {
// //   user: string
// // }

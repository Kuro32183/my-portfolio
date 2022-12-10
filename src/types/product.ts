/* eslint-disable import/named */
import {
  MicroCMSListResponse,
  MicroCMSListContent,
  //   MicroCMSImage,
} from 'microcms-js-sdk'

export type Product = {
  title?: string
  body?: string
  thumbnail?: thumbnail
  description?: string
  id?: string
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
  revisedAt?: string
}

type thumbnail = {
  url: string
  height: number
  width: number
}
export type ProductList = MicroCMSListResponse<Product>
export type ProductListDetail = Product & MicroCMSListContent

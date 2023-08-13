import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import { StaticImageData } from 'next/image';

type ImageType = {
  sourceUrl?: string | null
  sizes?: string
  altText?: string
  blurDataURL?: string
  width?: number
  height?: number
  staticImageData?: StaticImageData // for default featured images
  imgur?: string // image uploaded to imgur
} | null

type Category = {
  name: string
  uri: string
  // "slug" is obligatory but we set it "optional" here because the categories taken
  // from Notion don't have slug
  slug?: string | null
  id?: string
  description?: string
  style?: {
    bgColor: string
    textColor: string
    bdColor?: string
    titleColor?: string // Used in header of category page
  }
  featuredImage?: ImageType
  fontello?: string
  backgroundClassName?: string // used for index page
}

type Tag = {
  name: string
  id?: string
  slug?: string
  uri?: string
}

type PostHeaderType = {
  title: string
  featuredImage: ImageType
  date?: string
  categories?: Category[]
  tags?: Tag[]
  authors?: Author[]
  selected?: boolean
  bookCover?: ImageType
  showToc?: boolean
  contentCheck?: boolean // content of this post has been checked after v4?
}

interface Post extends PostHeaderType {
  slug: string
  id?: string
  uri: string
  excerpt?: RichTextItemResponse[]
}

type AnnotationIgnoreField =
  | 'bold'
  | 'italic'
  | 'strikethrough'
  | 'underline'
  | 'code'
  | 'color'

export { AnnotationIgnoreField as A, ImageType as I, Post as P };

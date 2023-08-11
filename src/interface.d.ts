import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { StaticImageData } from 'next/image'

export type SiteTheme = 'dark' | 'light'

export type EnvMode = 'dev' | 'prod'

export type ImageType = {
  sourceUrl?: string | null
  sizes?: string
  altText?: string
  blurDataURL?: string
  width?: number
  height?: number
  staticImageData?: StaticImageData // for default featured images
  imgur?: string // image uploaded to imgur
} | null

export type OptionalCatchAllProps = { params: OptionalCatchAllParams }
export type OptionalCatchAllParams = { slug: string[] }
export type DynamicSegmentParamsProps = { params: DynamicSegmentParams }
export type DynamicSegmentParams = { slug: string }

export type NotionTagData = {
  id: string
  name: string
  color: string
}

export type Category = {
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

export type Tag = {
  name: string
  id?: string
  slug?: string
  uri?: string
}

export type PostAndPageACF = {
  excerpt?: string
}

export type PostHeaderType = {
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

export interface Post extends PostHeaderType {
  slug: string
  id?: string
  uri: string
  excerpt?: RichTextItemResponse[]
}

export type Author = {
  slug?: string | null
  id: string
  name?: string | null
  uri: string
  description?: string | null
  avatarUrl?: string | null
  icon?: string | null
  role?: string | null
  email?: string | null
  website?: string | null
  posts?: Post[] | null
}

export type Page = {
  id?: string
  title: string
  uri: string
  slug?: string
}

export type NotionSorts = {
  property: string
  direction: 'ascending' | 'descending'
}

export type SlugTypeLabels =
  | 'author'
  | 'category'
  | 'tag'
  | 'selected'
  | 'all'
  | 'singlePost'
  | 'about'
  | 'thanks'
  | 'privacy'
  | 'viet-bai'
  | 'newsletter'
  | 'page'
export type GroupTypeReturn = { categories: Category[] } | { tags: Tag[] } | { authors: Author[] }

/**
 * NOTION DATA
 */

export type NotionPost = {
  id: string
  created_time: string
  last_edited_time?: string
  cover?: {
    external?: {
      url: string
    }
  }
  properties?: {
    name: {
      title: { plain_text: string }[]
    }
    url: string
    categories?: {
      multi_select: { name: string }[]
    }
    tag?: {
      multi_select: NotionTagData[]
    }
    author?: {
      select: { name: string }
    }
    excerpt?: {
      rich_text: { plain_text: string }[]
    }
    bookCover?: BookCoverProperty
  }
}

export type NotionAuthor = {
  id: string
  icon?: {
    emoji: string
  }
  properties: {
    role?: {
      select: { name: string }
    }
    website?: { url: string }
    avatar?: {
      files: { external: { url: string }; file: { url: string } }[]
    }
    description?: {
      rich_text: { plain_text: string }[]
    }
    email?: { email: string }
    name: { title: { plain_text: string }[] }
    slug?: { rich_text: { plain_text: string }[] }
  }
}

export type NotionTag = {
  id: string
  properties: {
    name: { title: { plain_text: string }[] }
    description: { rich_text: { plain_text: string }[] }
    slug: { rich_text: { plain_text: string }[] }
  }
}

type BookCoverProperty = {
  files: { external: { url: string }; file: { url: string } }[]
}

export type NotionHeader = {
  cover?: { external: { url: string }; file: { url: string } }
  properties: {
    name: { title: { plain_text: string }[] }
    finalCreatedDate: { formula: { date: { start: string } } }
    categories: { multi_select: { name: string }[] }
    tag: { multi_select: NotionTagData[] }
    authors: { relation: { id: string }[] }
    selected: { checkbox: boolean }
    showToc: { checkbox: boolean }
    bookCover: BookCoverProperty
    slug: { rich_text: { plain_text: string }[] }
    contentCheck?: { checkbox: boolean }
  }
}

export type AnnotationIgnoreField =
  | 'bold'
  | 'italic'
  | 'strikethrough'
  | 'underline'
  | 'code'
  | 'color'

export type TextIgnoreField = 'hyperlink' | AnnotationIgnoreField

export type SearchResult = {
  id: string
  title: string
  slug: string
  categoryNames: string[]
  isPublished: boolean
  isSelected: boolean
  titleHighlighted: string
  textHighlighted: string
  isBookPost: boolean
  isFake?: boolean // used to not perform the request
}

export type ImgurUrlType = 't' | 'm' | 'l' | 'h'

export type BookmarkPreview = {
  url: string
  title?: string
  description: string | null
  favicon?: string
  imageSrc: string | null
}

declare module '*.png'
declare module '*.svg'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.webp'

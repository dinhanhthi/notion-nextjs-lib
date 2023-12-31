import slugify from 'slugify'

import { Post } from '../interface'

export function cleanText(text?: string) {
  if (!text) return undefined
  return text.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim()
}

/**
 * Convert "7c2e54318e52416ca5769831454bf08d" or "7c2e5431-8e52-416c-a576-9831454bf08d"
 * to "7c2e5431-8e52-416c-a576-9831454bf08d"
 */
export function idToUuid(id: string): string | null {
  if (!id) {
    return null
  }

  id = id.split('?')[0]
  const match = id.match(/\b([a-f0-9]{32})\b/)

  if (match) {
    return `${id.slice(0, 8)}-${id.slice(8, 4 + 8)}-${id.slice(12, 4 + 12)}-${id.slice(
      16,
      4 + 16
    )}-${id.slice(20)}`
  }

  const match2 = id.match(/\b([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})\b/)
  if (match2) {
    return match2[1]
  }

  return null
}

/**
 * Convert "Nguyễn Văn Đông" to "nguyen-van-dong"
 */
export function makeSlugText(text?: string | null): string | undefined {
  if (!text) return undefined
  return slugify(text, {
    lower: true,
    locale: 'vi',
    remove: /[:?&".,/\\]/g
  })
}

/**
 * Get a right start_cursor for pagination based on current page and posts
 * @param posts
 * @param postsPerPage
 * @param currentPage
 * @returns next_cursor or `undefined` (it has to be `undefined`, not `null` because
 * Notion API doesn't accept `null` value for `start_cursor`)
 */
export function getStartCursorForCurrentPage(
  currentPage: number,
  posts: Post[],
  postsPerPage: number
): string | undefined {
  if (posts?.length === 0) return undefined
  if (currentPage === 1) return undefined
  const numPages = Math.ceil(posts.length / postsPerPage)
  if (currentPage > numPages) return undefined
  return posts[(currentPage - 1) * postsPerPage]?.id
}

export function isDateAfter(date1?: string, date2?: string): boolean {
  if (!date1 || !date2) return false
  const dateOne = new Date(date1).setHours(0, 0, 0, 0)
  const dateTwo = new Date(date2).setHours(0, 0, 0, 0)
  return dateOne > dateTwo
}

import {
  QueryDatabaseParameters,
  QueryDatabaseResponse
} from '@notionhq/client/build/src/api-endpoints'

import { NotionSorts } from '../interface'

/**
 * We needs this method to be used in outside-nextjs environment. For example, in ./scripts/ud_images.ts
 */
export async function getNotionDatabaseWithoutCache(
  dataId: string,
  notionToken: string,
  notionVersion: string,
  filter?: QueryDatabaseParameters['filter'],
  startCursor?: string,
  pageSize?: number,
  sorts?: NotionSorts[]
): Promise<QueryDatabaseResponse | undefined> {
  try {
    const url = `https://api.notion.com/v1/databases/${dataId}/query`
    const requestBody = {
      filter,
      sorts,
      start_cursor: startCursor,
      page_size: pageSize ?? 50
    }
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${notionToken}`,
        'Notion-Version': notionVersion as string,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    return res.json()
  } catch (error: any) {
    console.error(error)
    // Retry after a number of seconds in the returned header
    const retryAfter = error?.response?.headers['retry-after'] || error['retry-after']
    if (retryAfter) {
      console.log(`Retrying after ${retryAfter} seconds`)
      await new Promise(resolve => setTimeout(resolve, retryAfter * 1000 + 500))
      return await getNotionDatabaseWithoutCache(
        dataId,
        notionToken,
        notionVersion,
        filter,
        startCursor,
        pageSize,
        sorts
      )
    }
    return
  }
}

/**
 * We needs this method to be used in outside-nextjs environment. For example, in ./scripts/ud_images.ts
 */
export const getNotionPageWithoutCache = async (
  pageId: string,
  notionToken: string,
  notionVersion: string
) => {
  const url = `https://api.notion.com/v1/pages/${pageId}`
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${notionToken}`,
      'Notion-Version': notionVersion as string
    }
  })
  return res.json()
}

/**
 * We needs this method to be used in outside-nextjs environment. For example, in ./scripts/ud_images.ts
 */
export const getNotionBlocksWithoutCache = async (
  pageId: string,
  notionToken: string,
  notionVersion: string,
  pageSize?: number,
  startCursor?: string
) => {
  let url = `https://api.notion.com/v1/blocks/${pageId}/children`
  if (pageSize) url += `?page_size=${pageSize}`
  if (startCursor) url += `&start_cursor=${startCursor}`
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${notionToken}`,
      'Notion-Version': notionVersion as string
    }
  })
  return res.json()
}

/**
 * https://developers.notion.com/reference/retrieve-a-database
 */
export async function retrieveNotionDatabaseWithoutCache(
  dataId: string,
  notionToken: string,
  notionVersion: string
) {
  const url = `https://api.notion.com/v1/databases/${dataId}`
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${notionToken}`,
      'Notion-Version': notionVersion as string
    }
  })
  return res.json()
}

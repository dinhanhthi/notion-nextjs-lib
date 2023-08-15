/**
 * This file is used to get data from Notion via the unofficial APIs
 */
import got from 'got'

import { idToUuid } from '../helpers/helpers'
import { NotionPageChunk } from '../types/notion-web.interface'

export class NotionWeb {
  private readonly _apiBaseUrl: string
  private readonly _authToken?: string
  private readonly _activeUser?: string
  private readonly _userTimeZone: string

  constructor({
    apiBaseUrl = 'https://www.notion.so/api/v3',
    authToken,
    activeUser,
    userTimeZone = 'America/New_York'
  }: {
    apiBaseUrl?: string
    authToken?: string
    userLocale?: string
    userTimeZone?: string
    activeUser?: string
  } = {}) {
    this._apiBaseUrl = apiBaseUrl
    this._authToken = authToken
    this._activeUser = activeUser
    this._userTimeZone = userTimeZone
  }

  /**
   * To get the block data of a page, we need to get the block ids of the page first.
   */
  public async getBlockIdsOfPage(
    pageId: string,
    {
      limit = 100,
      chunkNumber = 0
    }: {
      limit?: number
      chunkNumber?: number
    }
  ) {
    const headers: any = {
      'Content-Type': 'application/json',
      cookie: `token_v2=${process.env.NOTION_TOKEN_V2}`,
      'x-notion-active-user-header': process.env.NOTION_ACTIVE_USER
    }

    if (!process.env.NOTION_DB_POSTS) {
      throw new Error('process.env.NOTION_DB_POSTS is not defined')
    }

    const body = {
      page: {
        id: idToUuid(pageId)
      },
      limit: limit || 100,
      chunkNumber: chunkNumber || 0,
      cursor: { stack: [] },
      verticalColumns: false
    }

    const url = `${this._apiBaseUrl}/loadCachedPageChunk`
    const chunks = (await got
      .post(url, {
        body: JSON.stringify(body),
        headers
      })
      .json()) as NotionPageChunk

    const recordMap = chunks?.recordMap

    if (!recordMap?.block) {
      throw new Error(`Notion page not found "${idToUuid(pageId)}"`)
    }

    return Object.keys(recordMap.block)
  }
}

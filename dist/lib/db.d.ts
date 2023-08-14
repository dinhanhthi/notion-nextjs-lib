import { QueryDatabaseParameters, QueryDatabaseResponse, ListBlockChildrenResponse } from '@notionhq/client/build/src/api-endpoints';
import { N as NotionSorts } from '../interface.d-1ae9c039.js';
import 'next/image';

/**
 * We needs this method to be used in outside-nextjs environment. For example, in ./scripts/ud_images.ts
 */
declare function getNotionDatabaseWithoutCache(dataId: string, notionToken: string, notionVersion: string, filter?: QueryDatabaseParameters['filter'], startCursor?: string, pageSize?: number, sorts?: NotionSorts[]): Promise<QueryDatabaseResponse | undefined>;
/**
 * We needs this method to be used in outside-nextjs environment. For example, in ./scripts/ud_images.ts
 */
declare const getNotionPageWithoutCache: (pageId: string, notionToken: string, notionVersion: string) => Promise<any>;
/**
 * We needs this method to be used in outside-nextjs environment. For example, in ./scripts/ud_images.ts
 */
declare const getNotionBlocksWithoutCache: (pageId: string, notionToken: string, notionVersion: string, pageSize?: number, startCursor?: string) => Promise<any>;
/**
 * https://developers.notion.com/reference/retrieve-a-database
 */
declare function retrieveNotionDatabaseWithoutCache(dataId: string, notionToken: string, notionVersion: string): Promise<any>;
/**
 * Get all nested blocks (in all levels) of a block.
 *
 */
declare function getBlocks(blockId: string, notionToken: string, notionVersion: string, initNumbering?: string, getPageUri?: (pageId: string) => Promise<string | undefined>, parseImgurUrl?: (url: string) => string): Promise<ListBlockChildrenResponse['results']>;
/**
 * Get blurDataURL (base64) of an image
 *
 * REMARK: This method MUST be placed in this file, otherwise, there will be an error of "Can't resolve 'fs'"
 */
declare const getPlaceholderImage: (src: string) => Promise<{
    base64: string;
    width: number;
    height: number;
}>;

export { getBlocks, getNotionBlocksWithoutCache, getNotionDatabaseWithoutCache, getNotionPageWithoutCache, getPlaceholderImage, retrieveNotionDatabaseWithoutCache };

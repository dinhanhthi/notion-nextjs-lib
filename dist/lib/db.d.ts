import { QueryDatabaseParameters, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
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

export { getNotionBlocksWithoutCache, getNotionDatabaseWithoutCache, getNotionPageWithoutCache, retrieveNotionDatabaseWithoutCache };

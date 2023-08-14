import { Post } from '../interface.js';
import '@notionhq/client/build/src/api-endpoints';
import 'next/image';

declare function cleanText(text?: string): string;
/**
 * Convert "7c2e54318e52416ca5769831454bf08d" or "7c2e5431-8e52-416c-a576-9831454bf08d"
 * to "7c2e5431-8e52-416c-a576-9831454bf08d"
 */
declare function idToUuid(id: string): string | null;
/**
 * Convert "Nguyễn Văn Đông" to "nguyen-van-dong"
 */
declare function makeSlugText(text?: string | null): string | undefined;
/**
 * Get a right start_cursor for pagination based on current page and posts
 * @param posts
 * @param postsPerPage
 * @param currentPage
 * @returns next_cursor or `undefined` (it has to be `undefined`, not `null` because
 * Notion API doesn't accept `null` value for `start_cursor`)
 */
declare function getStartCursorForCurrentPage(currentPage: number, posts: Post[], postsPerPage: number): string | undefined;

export { cleanText, getStartCursorForCurrentPage, idToUuid, makeSlugText };

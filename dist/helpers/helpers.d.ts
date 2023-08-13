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

export { cleanText, idToUuid, makeSlugText };

import { TextRichTextItemResponse, RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import { AnnotationIgnoreField } from '../interface.js';
import 'next/image';

declare function generateTextAnnotationClasses(annotations: TextRichTextItemResponse['annotations'], ignore?: AnnotationIgnoreField[]): string;
declare function getJoinedRichText(richTextArr?: RichTextItemResponse[]): string;
declare function mapColorClass(color: string): string;
declare function getIndentLevelClass(opts: {
    level: number;
    isList?: boolean;
    insideList?: boolean;
    insideColumn?: boolean;
    insideQuote?: boolean;
}): string;
declare function convertHeadingIdToSlug(headingId: string, richTextArr: RichTextItemResponse[]): string;
declare function getYoutubeVideoId(url?: string): string | null;

export { convertHeadingIdToSlug, generateTextAnnotationClasses, getIndentLevelClass, getJoinedRichText, getYoutubeVideoId, mapColorClass };

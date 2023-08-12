import { TextRichTextItemResponse, RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import { A as AnnotationIgnoreField } from './interface.d-45d1a809.js';
import 'next/image';

declare function generateTextAnnotationClasses(annotations: TextRichTextItemResponse['annotations'], ignore?: AnnotationIgnoreField[]): string;
declare function mapColorClass(color: string): string;
declare function getIndentLevelClass(level: number, isList: boolean, isInsideList?: boolean): string;
declare function getJoinedRichText(richTextArr?: RichTextItemResponse[]): string;
declare function convertHeadingIdToSlug(headingId: string, richTextArr: RichTextItemResponse[]): string;
declare function getYoutubeVideoId(url?: string): string | null;

export { convertHeadingIdToSlug, generateTextAnnotationClasses, getIndentLevelClass, getJoinedRichText, getYoutubeVideoId, mapColorClass };

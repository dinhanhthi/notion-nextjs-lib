import { RichTextItemResponse, TextRichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import { AnnotationIgnoreField } from '@src/interface';
export declare function generateTextAnnotationClasses(annotations: TextRichTextItemResponse['annotations'], ignore?: AnnotationIgnoreField[]): string;
export declare function mapColorClass(color: string): string;
export declare function getIndentLevelClass(level: number, isList: boolean, isInsideList?: boolean): string;
export declare function getJoinedRichText(richTextArr?: RichTextItemResponse[]): string;
export declare function convertHeadingIdToSlug(headingId: string, richTextArr: RichTextItemResponse[]): string;
export declare function getYoutubeVideoId(url?: string): string | null;

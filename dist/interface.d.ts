import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import { StaticImageData } from 'next/image';

type OptionalCatchAllProps = {
    params: OptionalCatchAllParams;
};
type OptionalCatchAllParams = {
    slug: string[];
};
type DynamicSegmentParamsProps = {
    params: DynamicSegmentParams;
};
type DynamicSegmentParams = {
    slug: string;
};
type ImageType = {
    sourceUrl?: string | null;
    sizes?: string;
    altText?: string;
    blurDataURL?: string;
    width?: number;
    height?: number;
    staticImageData?: StaticImageData;
    imgur?: string;
} | null;
type PostHeaderType = {
    title: string;
    featuredImage?: ImageType;
    date?: string;
    createdDate?: string;
    categories?: Category[];
    tags?: Tag[];
    authors?: Author[];
    selected?: boolean;
    bookCover?: ImageType;
    showToc?: boolean;
    contentCheck?: boolean;
    isBlog?: boolean;
    isDraft?: boolean;
    icon?: {
        emoji?: string;
        img?: ImageType;
    };
};
interface Post extends PostHeaderType {
    slug: string;
    id?: string;
    uri: string;
    excerpt?: RichTextItemResponse[];
}
type Page = {
    id?: string;
    title: string;
    uri: string;
    slug?: string;
};
type Category = {
    name: string;
    uri: string;
    slug?: string | null;
    id?: string;
    description?: string;
    style?: {
        bgColor: string;
        textColor: string;
        bdColor?: string;
        titleColor?: string;
    };
    featuredImage?: ImageType;
    fontello?: string;
    backgroundClassName?: string;
};
type Tag = {
    name: string;
    id?: string;
    slug?: string;
    uri?: string;
    icon?: ImageType;
    className?: string;
};
type Author = {
    slug?: string | null;
    id: string;
    name?: string | null;
    uri: string;
    description?: string | null;
    avatarUrl?: string | null;
    icon?: string | null;
    role?: string | null;
    email?: string | null;
    website?: string | null;
    posts?: Post[] | null;
};
type NotionSorts = {
    property: string;
    direction: 'ascending' | 'descending';
};
type AnnotationIgnoreField = 'bold' | 'italic' | 'strikethrough' | 'underline' | 'code' | 'color';
type TextIgnoreField = 'hyperlink' | AnnotationIgnoreField;
type SearchResult = {
    id: string;
    title: string;
    slug: string;
    categoryNames: string[];
    isPublished: boolean;
    isSelected: boolean;
    titleHighlighted: string;
    textHighlighted: string;
    isBookPost: boolean;
    isFake?: boolean;
};
type BookmarkPreview = {
    url: string;
    title?: string;
    description: string | null;
    favicon?: string;
    imageSrc: string | null;
};

export { AnnotationIgnoreField, Author, BookmarkPreview, Category, DynamicSegmentParams, DynamicSegmentParamsProps, ImageType, NotionSorts, OptionalCatchAllParams, OptionalCatchAllProps, Page, Post, PostHeaderType, SearchResult, Tag, TextIgnoreField };

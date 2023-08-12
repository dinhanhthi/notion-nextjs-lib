import React from 'react';
interface CarouselProps<T> {
    readonly items: T[];
    readonly renderItem: (props: CarouselRenderItemProps<T>) => React.ReactElement<CarouselItemProps>;
}
interface CarouselRenderItemProps<T> {
    readonly item: T;
    readonly isSnapPoint: boolean;
    readonly index: number;
}
export declare const Carousel: <T>({ items, renderItem }: CarouselProps<T>) => import("react/jsx-runtime").JSX.Element;
interface CarouselItemProps {
    readonly isSnapPoint: boolean;
    readonly children?: React.ReactNode;
    readonly widthClass?: string;
}
export declare const CarouselItem: ({ isSnapPoint, children, widthClass }: CarouselItemProps) => import("react/jsx-runtime").JSX.Element;
export {};

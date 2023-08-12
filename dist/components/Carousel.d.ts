import * as react_jsx_runtime from 'react/jsx-runtime';
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
declare const Carousel: <T>({ items, renderItem }: CarouselProps<T>) => react_jsx_runtime.JSX.Element;
interface CarouselItemProps {
    readonly isSnapPoint: boolean;
    readonly children?: React.ReactNode;
    readonly widthClass?: string;
}
declare const CarouselItem: ({ isSnapPoint, children, widthClass }: CarouselItemProps) => react_jsx_runtime.JSX.Element;

export { Carousel, CarouselItem };

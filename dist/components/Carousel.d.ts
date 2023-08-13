import * as react_jsx_runtime from 'react/jsx-runtime';
import React__default from 'react';

interface CarouselProps<T> {
    readonly items: T[];
    readonly renderItem: (props: CarouselRenderItemProps<T>) => React__default.ReactElement<CarouselItemProps>;
}
interface CarouselRenderItemProps<T> {
    readonly item: T;
    readonly isSnapPoint: boolean;
    readonly index: number;
}
declare const Carousel: <T>({ items, renderItem }: CarouselProps<T>) => react_jsx_runtime.JSX.Element;
interface CarouselItemProps {
    readonly isSnapPoint: boolean;
    readonly children?: React__default.ReactNode;
    readonly widthClass?: string;
}
declare const CarouselItem: ({ isSnapPoint, children, widthClass }: CarouselItemProps) => react_jsx_runtime.JSX.Element;

export { Carousel, CarouselItem };

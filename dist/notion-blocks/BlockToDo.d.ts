/// <reference types="react" />
import { ToDoBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
export default function BlockToDo(props: {
    block: ToDoBlockObjectResponse;
    children?: React.ReactNode;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;

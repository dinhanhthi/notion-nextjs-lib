import * as react_jsx_runtime from 'react/jsx-runtime';

type SearchModalProps = {
    url: string;
    isOpen: boolean;
    closeModal: () => void;
    slugPrefix?: string;
    className?: string;
    errorMessage?: string;
    noResultsMessage?: string;
    foundResultsMessage?: string;
    placeholder?: string;
};
declare function SearchModal(props: SearchModalProps): react_jsx_runtime.JSX.Element;

export { SearchModal as default };

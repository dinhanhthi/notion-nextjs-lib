import * as react_jsx_runtime from 'react/jsx-runtime';

type DateProps = {
    dateString: string;
    dateLabel?: string;
    format?: string;
    className?: string;
    humanize?: boolean;
    humanizeOpts?: {
        today?: string;
        yesterday?: string;
        daysAgo?: string;
        weeksAgo?: string;
        monthsAgo?: string;
    };
};
declare function DateComponent(props: DateProps): react_jsx_runtime.JSX.Element;

export { DateComponent as default };

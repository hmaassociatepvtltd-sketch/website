import {Check} from "lucide-react";

export const components = {
    h1: (props) => (
        <h1 className={'text-xl sm:text-2xl font-bold font-josefin-sans tracking-tight text-gray-900 dark:text-white my-3 border-b border-gray-100 dark:border-zinc-800 pb-2'}>
            {props.children}
        </h1>
    ),
    h2: (props) => (
        <h2 className={'text-lg sm:text-xl font-bold font-josefin-sans tracking-tight text-gray-800 dark:text-slate-200 mt-4 mb-2'}>
            {props.children}
        </h2>
    ),
    h3: (props) => (
        <h3 className={'text-base sm:text-lg font-semibold font-josefin-sans tracking-tight text-gray-800 dark:text-slate-200 mt-3 mb-1.5'}>
            {props.children}
        </h3>
    ),
    h4: (props) => (
        <h4 className={'text-base font-semibold font-josefin-sans text-gray-800 dark:text-slate-200 mt-3 mb-1'}>
            {props.children}
        </h4>
    ),
    h5: (props) => (
        <h5 className={'text-sm font-semibold font-josefin-sans text-gray-700 dark:text-slate-300 mt-2 mb-1'}>
            {props.children}
        </h5>
    ),
    h6: (props) => (
        <h6 className={'text-xs font-semibold uppercase tracking-wider font-josefin-sans text-primary mt-2 mb-1'}>
            {props.children}
        </h6>
    ),
    p: (props) => (
        <p className={'text-base md:text-lg font-poppins whitespace-normal break-words leading-relaxed my-2.5 text-muted-foreground'}>
            {props.children}
        </p>
    ),
    ul: (props) => (
        <ul className={'list-disc pl-6 mb-4 font-poppins text-base md:text-lg space-y-2'}>
            {props.children}
        </ul>
    ),
    ol: (props) => (
        <ol className={'list-decimal pl-6 mb-4 font-poppins text-base md:text-lg space-y-2'}>
            {props.children}
        </ol>
    ),
    li: (props) => (
        <li className={'relative flex flex-row items-start my-1'}>
               <span className={'min-h-4 translate-y-1/3 min-w-4 text-white rounded-full bg-primary flex justify-center items-center shrink-0'}>
                   <Check size={10} strokeWidth={4}/>
               </span>
            <span className={'ml-2.5 text-base md:text-lg font-poppins text-muted-foreground'}>{props.children}</span>
        </li>
    ),
    a: (props) => (
        <a className={'text-blue-600 hover:underline font-poppins'} {...props}>
            {props.children}
        </a>
    ),
    strong: (props) => (
        <strong className={'font-bold font-poppins text-foreground dark:text-slate-100'}>
            {props.children}
        </strong>
    ),
    em: (props) => (
        <em className={'italic font-poppins text-gray-600'}>
            {props.children}
        </em>
    ),
    blockquote: (props) => (
        <blockquote className={'border-l-4 border-gray-300 pl-4 py-1 italic text-gray-600 my-4 font-poppins'}>
            {props.children}
        </blockquote>
    ),
    img: (props) => (
        <img alt={props.alt} className={'max-w-full h-auto rounded-lg my-4'} src={props.url} />
    ),
    code: (props) => (
        <code className={'bg-gray-100 text-purple-700 px-1.5 py-0.5 rounded text-sm font-mono'}>
            {props.children}
        </code>
    ),
    pre: (props) => (
        <pre className={'bg-gray-800 text-white p-4 rounded-lg overflow-x-auto my-4 font-mono text-sm'}>
            {props.children}
        </pre>
    ),
    // Table components
    table: (props) => (
        <table className={'w-full border-collapse my-6 font-poppins'}>
            {props.children}
        </table>
    ),
    thead: (props) => (
        <thead className={'bg-gray-100'}>
        {props.children}
        </thead>
    ),
    tbody: (props) => (
        <tbody>
        {props.children}
        </tbody>
    ),
    tr: (props) => (
        <tr className={'border-b border-gray-200 hover:bg-gray-50'}>
            {props.children}
        </tr>
    ),
    th: (props) => (
        <th className={'text-left p-3 font-semibold text-gray-700 border-b-2 border-gray-300'}>
            {props.children}
        </th>
    ),
    td: (props) => (
        <td className={'p-3 text-gray-800 border-b border-gray-200'}>
            {props.children}
        </td>
    ),
    // Horizontal rule
    hr: (props) => (
        <hr className={'my-8 border-t-2 border-gray-200'} {...props} />
    ),
};
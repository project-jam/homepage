"use client"
import ReactMarkdown from "react-markdown"

interface MarkdownProps {
  content: string
}

export function Markdown({ content }: MarkdownProps) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="text-[#de7f18] text-xl font-medium mt-6 mb-3 animate-fade-in" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-[#de7f18] text-lg font-medium mt-5 mb-2 animate-fade-in stagger-1" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-[#de7f18] text-base font-medium mt-4 mb-2 animate-fade-in stagger-2" {...props} />
        ),
        h4: ({ node, ...props }) => (
          <h4 className="text-[#de7f18] text-sm font-medium mt-3 mb-1 animate-fade-in stagger-3" {...props} />
        ),
        p: ({ node, ...props }) => <p className="text-[#f2d9c0] mb-4 animate-fade-in" {...props} />,
        a: ({ node, ...props }) => <a className="text-[#de7f18] hover:underline" {...props} />,
        ul: ({ node, ...props }) => (
          <ul className="list-disc list-inside mb-4 text-[#f2d9c0] animate-fade-in stagger-1" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal list-inside mb-4 text-[#f2d9c0] animate-fade-in stagger-1" {...props} />
        ),
        li: ({ node, ...props }) => <li className="mb-1" {...props} />,
        blockquote: ({ node, ...props }) => (
          <blockquote
            className="border-l-4 border-[#45311b] pl-4 italic my-4 text-[#f2d9c0] animate-fade-in"
            {...props}
          />
        ),
        code: ({ node, inline, ...props }) =>
          inline ? (
            <code className="bg-[#080604] px-1 py-0.5 rounded text-[#fefefe]" {...props} />
          ) : (
            <code className="block bg-[#080604] p-3 rounded-md overflow-x-auto text-[#fefefe] my-4" {...props} />
          ),
        pre: ({ node, ...props }) => <pre className="bg-transparent p-0 animate-fade-in stagger-2" {...props} />,
        img: ({ node, ...props }) => (
          <img className="rounded-md my-4 max-w-full h-auto animate-fade-in" {...props} alt={props.alt || ""} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}


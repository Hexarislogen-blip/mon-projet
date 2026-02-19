import Link from "next/link";

interface BlogLayoutProps {
  title: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
}

export default function BlogLayout({ title, date, readTime, category, content }: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-[#111]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-28 pb-20">
        {/* Back */}
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-[#666] hover:text-[#111] transition-colors mb-10">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Retour au blog
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0ea5e9] bg-[#0ea5e910] border border-[#0ea5e925] rounded-full px-3 py-1">{category}</span>
          <span className="text-[12px] text-[#999]">{date}</span>
          <span className="text-[12px] text-[#999]">{readTime} de lecture</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111] leading-tight mb-10">{title}</h1>

        {/* Separator */}
        <div className="border-t border-[#eee] mb-10" />

        {/* Content */}
        <article className="space-y-5">
          {content.map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return <h2 key={i} className="text-xl font-bold text-[#111] mt-10 mb-4">{paragraph.slice(3)}</h2>;
            }
            if (paragraph.startsWith("### ")) {
              return <h3 key={i} className="text-lg font-semibold text-[#222] mt-8 mb-3">{paragraph.slice(4)}</h3>;
            }
            if (paragraph.startsWith("```")) {
              return (
                <pre key={i} className="bg-[#0a0a0a] text-[#e5e5e5] text-sm rounded-lg p-5 overflow-x-auto font-mono leading-relaxed">
                  <code>{paragraph.slice(3)}</code>
                </pre>
              );
            }
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n").filter(l => l.startsWith("- "));
              return (
                <ul key={i} className="space-y-2 pl-1">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-[15px] text-[#444] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] mt-2 shrink-0" />
                      {item.slice(2)}
                    </li>
                  ))}
                </ul>
              );
            }
            if (paragraph.startsWith("> ")) {
              return (
                <blockquote key={i} className="border-l-2 border-[#0ea5e9] pl-5 py-1 text-[15px] text-[#555] italic">
                  {paragraph.slice(2)}
                </blockquote>
              );
            }
            return <p key={i} className="text-[15px] text-[#444] leading-relaxed">{paragraph}</p>;
          })}
        </article>

        {/* Footer separator */}
        <div className="border-t border-[#eee] mt-16 pt-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-xs text-[#999] uppercase tracking-wider mb-1">Écrit par</p>
              <p className="text-sm font-semibold text-[#111]">Hector Sedo</p>
            </div>
            <Link href="/blog" className="text-sm text-[#0ea5e9] hover:text-[#0284c7] transition-colors font-medium">
              Voir tous les articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { MDXComponents } from "mdx/types";

function VideoGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">{children}</div>
  );
}

function Video({ src, label }: { src: string; label: string }) {
  return (
    <figure className="space-y-2">
      <video
        src={src}
        controls
        className="w-full rounded-xl bg-black"
        preload="metadata"
      />
      <figcaption className="text-xs text-gray-500 text-center">
        {label}
      </figcaption>
    </figure>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-6 rounded-xl border border-blue-100 bg-blue-50 px-5 py-4 text-sm text-blue-800">
      {children}
    </div>
  );
}

const mdxComponents: MDXComponents = {
  VideoGrid,
  Video,
  Callout,
};

export default mdxComponents;

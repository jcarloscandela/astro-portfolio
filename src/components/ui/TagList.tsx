import React from "react";

interface TagListProps {
  tags: string[];
}

export function TagList({ tags }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {tags.map((tag) => (
        <a
          key={tag}
          href={`/tags/${encodeURIComponent(tag)}`}
          className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground border border-border hover:bg-accent transition-colors"
        >
          {tag}
        </a>
      ))}
    </div>
  );
}

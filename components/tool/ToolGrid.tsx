import { ToolCard } from "./ToolCard";



export function ToolsGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
      {tools.map((tool, index) => (
        <ToolCard
          key={index}
          title={tool.title}
          description={tool.description}
          icon={tool.icon}
          href={tool.href}
        />
      ))}
    </div>
  );
}
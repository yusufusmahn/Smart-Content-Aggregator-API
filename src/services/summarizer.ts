export const generateSummary = (content: string): string => {
  if (!content) return "";

  const sentences = content.split(/(?<=[.!?])\s+/);

  const summary = sentences.slice(0, 2).join(" ");

  return summary;
};

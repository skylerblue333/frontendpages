import type { ReactNode } from "react";

interface TranslationLayerProps {
  children?: ReactNode;
  content?: string;
  enabled?: boolean;
  targetLanguage?: string;
  className?: string;
}

export function TranslationLayer({ children, content, enabled = false, targetLanguage = "English", className }: TranslationLayerProps) {
  return (
    <span className={className} data-translation-enabled={enabled} data-target-language={targetLanguage}>
      {children ?? content}
    </span>
  );
}

export default TranslationLayer;

import { useEffect } from "react";
import { usePortfolioContext } from "../portfolio-context";

export const blogUI = {
  eng: { intro: "Architecture notes, migration write-ups and lessons from real projects.", read: "Read article", back: "Back to blog", source: "Original article by Lianel Artiles on Medium", locale: "en" },
  esp: { intro: "Notas de arquitectura, migraciones y aprendizajes de proyectos reales.", read: "Leer artículo", back: "Volver al blog", source: "Artículo original de Lianel Artiles en Medium", locale: "es" },
  fre: { intro: "Notes d’architecture, migrations et leçons de projets concrets.", read: "Lire l’article", back: "Retour au blog", source: "Article original de Lianel Artiles sur Medium", locale: "fr" },
};

export function useBlogLanguage() {
  const { languages } = usePortfolioContext();
  const language: keyof typeof blogUI = languages.esp ? "esp" : languages.fre ? "fre" : "eng";
  return { language, ui: blogUI[language] };
}

export function useBlogMetadata(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} | Lianel Artiles`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [title, description]);
}

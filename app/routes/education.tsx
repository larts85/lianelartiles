import Education from "../../src/Components/education";
import { usePortfolioContext } from "../portfolio-context";

export default function EducationRoute() {
  const { languages, darkMode } = usePortfolioContext();
  const EducationComponent = Education as any;
  return <EducationComponent languages={languages} darkMode={darkMode} />;
}

import About from "../../src/Components/aboutMe";
import { usePortfolioContext } from "../portfolio-context";

export default function AboutRoute() {
  const { languages } = usePortfolioContext();
  const AboutComponent = About as any;
  return <AboutComponent languages={languages} />;
}

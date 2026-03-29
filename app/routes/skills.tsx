import Skills from "../../src/Components/skills";
import { usePortfolioContext } from "../portfolio-context";

export default function SkillsRoute() {
  const { languages } = usePortfolioContext();
  const SkillsComponent = Skills as any;
  return <SkillsComponent languages={languages} />;
}

import Resume from "../../src/Components/resume";
import { usePortfolioContext } from "../portfolio-context";

export default function ResumeRoute() {
  const { languages } = usePortfolioContext();
  const ResumeComponent = Resume as any;
  return <ResumeComponent languages={languages} />;
}

import Projects from "../../src/Components/projects";
import { usePortfolioContext } from "../portfolio-context";

export default function ProjectsRoute() {
  const { languages, darkMode, isMobile } = usePortfolioContext();
  const ProjectsComponent = Projects as any;
  return <ProjectsComponent languages={languages} darkMode={darkMode} isMobile={isMobile} />;
}

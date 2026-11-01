import LandingPage from "../../src/Components/landingPage";
import { usePortfolioContext } from "../portfolio-context";

export default function HomeRoute() {
  const { languages } = usePortfolioContext();
  const LandingPageComponent = LandingPage as any;
  return <LandingPageComponent languages={languages} />;
}

import Contact from "../../src/Components/contactme";
import { usePortfolioContext } from "../portfolio-context";

export default function ContactRoute() {
  const { languages } = usePortfolioContext();
  const ContactComponent = Contact as any;
  return <ContactComponent languages={languages} />;
}

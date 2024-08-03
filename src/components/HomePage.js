import { AllCards } from "./AllCards";
import CardData from "../data/CardData.json";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Text } from "./Text";
function HomePage() {
  return (
    <div className="home-page">
      <Nav />
      <Text />
      <AllCards />
      
      <Footer />
    </div>
  );
}

export { HomePage };

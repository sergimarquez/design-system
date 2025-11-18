import { Button, Card, Text, Stack, Badge, Grid, Link } from "@sergi-marquez/design-system";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ComponentsShowcase from "./components/ComponentsShowcase";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-background-secondary)" }}>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ComponentsShowcase />
      <Footer />
    </div>
  );
}

export default App;


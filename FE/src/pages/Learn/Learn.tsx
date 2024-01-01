import PageLayout from "../../layout/page-layout";
import Divider from "../../components/divider";
import HeroSection from "./components/hero";
import ModellingSection from "./components/modelling-section";
import TexturingSection from "./components/texturing-section";
import LightingSection from "./components/lighting-section";
import RenderingSection from "./components/rendering-section";

const Learn = () => {
  return (
    <PageLayout>
      <div>
        <HeroSection />
        <ModellingSection />
        <TexturingSection />
        <LightingSection />
        <RenderingSection />
      </div>
    </PageLayout>
  );
};

export default Learn;

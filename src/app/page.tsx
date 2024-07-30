import { ImagesSliderDemo } from "./Hero/Hero-ui";
import Article from "../components/Article/Article";
import FeaturesW from "../components/FeaturesWeb/FeaturesW";
import Testimonial from "../components/Testimonials/Testimonial";
import Sectionc from "../components/Sections/Sections";
import FeaturesM from "../components/FeaturesMobile/FeaturesM";
import Figure from "../components/Figure/Figure";

export default function Home() {
  return (
    <>
      <ImagesSliderDemo />
      <Article />
      <FeaturesW />
      <FeaturesM />
      <Figure />
      <Testimonial />
      <Sectionc />
    </>
  );
}

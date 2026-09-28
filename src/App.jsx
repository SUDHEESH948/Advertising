
import IntroHero from "./components/IntroHero";
import AboutServices from "./components/AboutServices";
import MediaShowcase from "./components/MediaShowcase";
import GalleryNews from "./components/GalleryNews";
import ContactFooter from "./components/ContactFooter";
import Media from "./components/media";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <IntroHero />

      <Media />

      <AboutServices />

      <MediaShowcase />

      <GalleryNews />

      <ContactFooter />
    </div>
  );
}
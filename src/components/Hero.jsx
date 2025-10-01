import Button from "./Button";
import heroMobile from "../assets/image-hero-mobile.webp";
import heroMobile2x from "../assets/image-hero-mobile@2x.webp";
import heroTablet from "../assets/image-hero-tablet.webp";
import heroTablet2x from "../assets/image-hero-tablet@2x.webp";
import heroDesktop from "../assets/image-hero-desktop.webp";
import heroDesktop2x from "../assets/image-hero-desktop@2x.webp";

export default function Hero() {
  return (
    <section className="py-16 md:px-11 lg:px-20 flex flex-col md:flex-row gap-12 md:gap-6 lg:gap-8">
      <div className="flex-1 px-5">
        <h1 className="text-preset-2 lg:text-preset-1 mb-6">
          Maximize skill, minimize budget
        </h1>
        <p className="text-preset-5 text-gray-500 mb-10">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <Button variant="orange">Get started</Button>
      </div>
      <div className="flex-1 relative">
        <picture className="md:absolute md:-top-40 md:-right-60 md:max-w-xl lg:max-w-none md:pointer-events-none">
          <source
            srcSet={`${heroDesktop} 1x, ${heroDesktop2x} 2x`}
            media="(min-width: 64rem)"
          />
          <source
            srcSet={`${heroTablet} 1x, ${heroTablet2x} 2x`}
            media="(min-width: 48rem)"
          />
          <img
            src={heroMobile}
            srcSet={`${heroMobile} 1x, ${heroMobile2x} 2x`}
            alt="Hero banner"
            className="w-full h-auto"
          />
        </picture>
      </div>
    </section>
  );
}

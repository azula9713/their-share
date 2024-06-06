import CTAButton from "../../common/ctaButton/CTAButton";

import HeroImage from "../../../assets/hero.png";

function Hero() {
  return (
    <div className="pt-10 bg-white dark:bg-gray-900">
      <section className="flex flex-wrap items-center font-sans px-4 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm pb-20">
        {/* Column-1 */}
        <div className="px-3 w-full lg:w-2/5">
          <div className="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-lg lg:text-left">
            <h2 className="mb-4 text-3xl font-bold text-left lg:text-5xl text-dark dark:text-light">
              Say goodbye to{" "}
              <span className="text-3xl lg:text-5xl text-primary leading-none">
                awkward
              </span>{" "}
              money conversations!
            </h2>
            <p className="visible mx-0 mt-3 mb-0 text-sm leading-relaxed text-left text-slate-500 dark:text-slate-300">
              Track and split your group expenses seamlessly with Their Share.
            </p>
          </div>
          <div className="text-center lg:text-left flex flex-col lg:flex-row items-center justify-start space-y-3 lg:space-x-5 lg:space-y-0 sm:max-w-screen-sm lg:max-w-lg">
            <CTAButton text="Start Splitting" hierarchy="primary" />
            <CTAButton text="Key Features" hierarchy="secondary" />
          </div>
        </div>
        {/* Column-2 */}
        <div className="px-3 mb-12 mt-5 lg:mt-0 w-full lg:mb-0 lg:w-3/5">
          {/* Illustrations Container */}
          <div className="flex justify-center items-center">
            <img
              src={HeroImage}
              alt="hero"
              className="block max-w-full h-auto align-middle lg:max-w-lg"
            />
          </div>
        </div>
      </section>
      {/* Parallax Background */}
      <section
        className="flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center justify-center items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?auto=format&fit=crop&w=880&q=80)",
        }}
      >
        <h1 className="text-white text-5xl font-semibold mt-20 mb-10">
          This is Parallax Effect
        </h1>
        <span className="text-center font-bold my-20 text-white/90">
          <a
            href="https://egoistdeveloper.github.io/twcss-to-sass-playground/"
            target="_blank"
            className="text-white/90 hover:text-white"
          >
            Convetert to SASS
          </a>
          <hr className="my-4" />
          <a
            href="https://unsplash.com/photos/8Pm_A-OHJGg"
            target="_blank"
            className="text-white/90 hover:text-white"
          >
            Image Source
          </a>
          <hr className="my-4" />
          <p>
            <a
              href="https://github.com/EgoistDeveloper/my-tailwind-components/blob/main/src/templates/parallax-landing-page.html"
              target="_blank"
              className="text-white/90 hover:text-white"
            >
              Source Code
            </a>
            |
            <a
              href="https://egoistdeveloper.github.io/my-tailwind-components/./src/templates/parallax-landing-page.html"
              target="_blank"
              className="text-white/90 hover:text-white"
            >
              Full Preview
            </a>
          </p>
        </span>
      </section>
    </div>
  );
}

export default Hero;

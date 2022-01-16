import React from "react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="px-5 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-12 lg:py-8">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">
                {t("Main.1")}
              </p>
            </div>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
              {/* Everything you
							<br className='hidden md:block' />
							can imagine{" "}
							<span className='inline-block text-deep-purple-accent-400'>
								is real
							</span> */}
              {t("Translate.11")}
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              {t("Translate.10")}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="/"
              className="w-32 transition duration-300 hover:shadow-lg"
            >
              <img
                src={""}
                className="object-cover object-top w-full h-auto mx-auto"
                alt=""
              />
            </a>
            <a
              href="/"
              className="w-32 transition duration-300 hover:shadow-lg"
            >
              <img
                src={""}
                className="object-cover object-top w-full h-auto mx-auto"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="w-2/5">
            {/* <img className='object-cover' src={""} alt='' />
             */}
            <div class="mockup-phone ">
              <div class="camera"></div>
              <div class="display">
                <div class="artboard phone-1 artboard-demo">{t("Main.1")}</div>
              </div>
            </div>
          </div>
          <div className="w-5/12 -ml-16 lg:-ml-32 z-10">
            {/* <img className='object-cover' src={""} alt='' />
             */}
            <div class="mockup-phone border-primary">
              <div class="camera"></div>
              <div class="display">
                <div class="artboard phone-1 artboard-demo">{t("Main.1")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

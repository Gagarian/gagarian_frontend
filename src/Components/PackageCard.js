import React from "react";

const PackageCard = () => {
  return (
    <div class="w-full md:w-1/2 lg:w-1/3 px-4">
      <div
        class="
        bg-gray-300
        rounded-xl
        relative
        z-10
        overflow-hidden
        border border-primary border-opacity-20
        shadow-pricing
        py-10
        px-8
        sm:p-12
        lg:py-10 lg:px-6
        xl:p-12
        mb-10
        "
      >
        <span class="text-primary font-semibold text-lg block mb-4">
          Wende late package
        </span>
        <h2 class="font-bold text-dark mb-5 text-[42px]">
          49.99 Birr
          <span class="text-base text-body-color font-medium">plus TAX</span>
        </h2>
        <p
          class="
            text-base text-body-color
            pb-8
            mb-8
            border-b border-[#F2F2F2]
            "
        >
          Perfect for a full day for single Bachlore.
        </p>
        <div class="mb-7">
          <p class="text-base text-body-color leading-loose mb-1">1 User</p>
          <p class="text-base text-body-color leading-loose mb-1">
            2 Nech Teff Injera
          </p>
          <p class="text-base text-body-color leading-loose mb-1">
            2 Key Teff Injera
          </p>
          <p class="text-base text-body-color leading-loose mb-1">
            1 liter Tej
          </p>
          <p class="text-base text-body-color leading-loose mb-1">1 Mulmul</p>
          <p class="text-base text-body-color leading-loose mb-1"></p>
        </div>
        <a
          href="javascript:void(0)"
          class="
            w-full
            block
            text-base
            font-semibold
            text-primary
            bg-transparent
            border border-[#D4DEFF]
            rounded-md
            text-center
            p-4
            hover:text-white hover:bg-primary hover:border-primary
            transition
            "
        >
          Choose Wende late package
        </a>
        <div>
          <span class="absolute right-0 top-7 z-[-1]">
            <svg
              width="77"
              height="172"
              viewBox="0 0 77 172"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="86"
                  y1="0"
                  x2="86"
                  y2="172"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3056D3" stop-opacity="0.09" />
                  <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;

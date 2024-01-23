// import React from "react";
import Navbar from "./Navbar";
import BgPattern from "../assets/images/Background pattern.png";
import heroImage from "../assets/images/hero-image.png";
import avatars from "../assets/images/Avatars.png";
import reviews from "../assets/images/Reviews.png";
import shopify from "../assets/images/Shopify.com svg.png";
import coinbase from "../assets/images/Coinbase svg.png";
import dropbox from "../assets/images/Dropbox svg.png";
import intercom from "../assets/images/Intercom svg.png";
import marvel from "../assets/images/Marvel svg.png";
import automatic from "../assets/images/Automattic svg.png";
import WhyClearLink from "./WhyClearLink";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import Sales from "./Sales";
import Footer from "./Footer";

// import bots from "../assets/images/bots.png";

const HeroSection = () => {
  return (
    <div>
      <img src={BgPattern} alt="" className="absolute inset-0 w-full h-full" />
      <div className="mx-20 relative z-10">
        <Navbar />
      </div>
      <div className="mx-20 relative z-10">
        <section className=" dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-inter font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl text-[#1D2939]">
                Uniting the world,one video call at a time
              </h1>
              <p className="max-w-xl mb-6 font-normal font-inter text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Experience the future of communication with ClearLink – where
                crystal-clear video conferencing meets unparalleled simplicity.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Start your free trial
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-blue-700  rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <svg
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.1055 16.6576C8.76001 16.6577 7.43546 16.6614 6.11094 16.6564C5.47164 16.654 4.86811 16.5139 4.3315 16.1442C3.56327 15.6149 3.12949 14.8887 3.01861 13.9621C2.98113 13.6488 2.98556 13.3362 2.98539 13.0229C2.98425 10.9455 2.98131 8.86806 2.98695 6.79064C2.9886 6.18281 3.10841 5.59641 3.44285 5.07727C4.00967 4.19738 4.81401 3.70243 5.86856 3.66999C6.59987 3.64749 7.33238 3.66512 8.06434 3.66161C8.37756 3.6601 8.69078 3.64441 9.0039 3.6469C9.16936 3.64822 9.21906 3.58032 9.21747 3.42089C9.21122 2.79354 9.21224 2.16607 9.21681 1.53869C9.22015 1.08077 9.41712 0.798293 9.79064 0.695422C10.222 0.576624 10.6529 0.836671 10.7401 1.27491C10.7644 1.39695 10.7766 1.52328 10.7775 1.64776C10.7815 2.21937 10.7867 2.79116 10.7759 3.3626C10.7721 3.56333 10.8208 3.64295 11.0403 3.64938C12.0371 3.67858 13.0339 3.64762 14.0305 3.66484C15.3009 3.6868 16.3239 4.39259 16.7939 5.57421C16.9078 5.86043 16.9722 6.16212 16.98 6.47028C17.0425 8.92365 16.991 11.3772 16.9749 13.8305C16.9655 15.2594 15.7609 16.4917 14.3282 16.6275C14.0915 16.6499 13.8558 16.6583 13.6189 16.6582C12.4547 16.6579 11.2906 16.6578 10.1055 16.6576ZM5.95679 5.19887C5.14194 5.25783 4.57093 5.84107 4.55078 6.65545C4.53751 7.19192 4.54734 7.72896 4.54713 8.26574C4.54644 10.0225 4.54337 11.7793 4.54632 13.5361C4.54786 14.4586 5.12844 15.0894 6.01631 15.0928C8.66539 15.1031 11.3146 15.1029 13.9636 15.0923C14.8449 15.0887 15.4486 14.4534 15.4496 13.5693C15.4523 11.2967 15.4527 9.02399 15.4494 6.75133C15.4481 5.8244 14.8263 5.1986 13.9013 5.19743C11.2661 5.19409 8.63095 5.19711 5.95679 5.19887Z"
                    fill="#175CD3"
                  />
                  <path
                    d="M2.04289 8.95246C2.04291 10.4377 2.04309 11.9021 2.04278 13.3665C2.04272 13.6527 2.04173 13.6475 1.75323 13.6545C1.45013 13.6619 1.15185 13.6395 0.875652 13.5071C0.309544 13.2358 0.0295195 12.7576 0.0148384 12.1526C-0.00951087 11.149 0.00137854 10.1444 0.0104841 9.14037C0.0179942 8.31219 0.675786 7.66167 1.50414 7.64184C2.04325 7.62892 2.04324 7.62892 2.04305 8.15752C2.04296 8.41553 2.04294 8.67354 2.04289 8.95246Z"
                    fill="#175CD3"
                  />
                  <path
                    d="M17.9575 11.2538C17.9576 10.118 17.9613 9.00313 17.9541 7.88831C17.9529 7.70085 18.0042 7.63472 18.1997 7.63604C18.5028 7.63808 18.7995 7.65679 19.0785 7.78075C19.676 8.04617 19.9738 8.5285 19.9869 9.16374C20.0073 10.1528 20.0016 11.1426 19.9897 12.1319C19.9791 13.0027 19.3085 13.6507 18.4321 13.651C17.8764 13.6513 17.9634 13.7273 17.9589 13.177C17.9537 12.5429 17.9576 11.9088 17.9575 11.2538Z"
                    fill="#175CD3"
                  />
                  <path
                    d="M7.18439 9.88261C6.30831 9.65632 5.95708 8.60443 6.49951 7.87652C6.86572 7.38509 7.54175 7.25075 8.11797 7.53854C8.61749 7.78803 8.88209 8.44916 8.71367 9.02693C8.54707 9.59846 7.98614 9.97544 7.38664 9.91733C7.32448 9.9113 7.26312 9.89697 7.18439 9.88261Z"
                    fill="#175CD3"
                  />
                  <path
                    d="M13.7153 8.94561C13.513 9.89539 12.3155 10.2594 11.5976 9.56177C11.2151 9.19004 11.121 8.5618 11.3775 8.03621C11.5806 7.61991 12.1592 7.32903 12.6447 7.39914C13.2114 7.48098 13.6178 7.87095 13.7227 8.41302C13.7568 8.58872 13.757 8.75679 13.7153 8.94561Z"
                    fill="#175CD3"
                  />
                  <path
                    d="M7.8998 13.4796C7.77567 13.6078 7.63491 13.6534 7.47486 13.6527C7.15519 13.6514 6.83545 13.6561 6.51585 13.6512C6.18533 13.6462 5.99046 13.4496 5.9922 13.1338C5.9939 12.8244 6.19505 12.6275 6.52577 12.6223C6.83147 12.6174 7.13734 12.6183 7.44307 12.6221C7.95291 12.6284 8.17162 13.0269 7.8998 13.4796Z"
                    fill="#175CD3"
                  />
                  <path
                    d="M9.77294 13.6532C9.65486 13.6525 9.55709 13.6565 9.45998 13.6503C9.17661 13.6322 8.98073 13.4296 8.97101 13.1498C8.96179 12.8846 9.16262 12.6401 9.43681 12.6281C9.80504 12.612 10.1753 12.6106 10.5433 12.6301C10.8481 12.6463 11.008 12.8553 10.9992 13.1683C10.9912 13.4517 10.8016 13.6412 10.5037 13.6505C10.2672 13.6579 10.0303 13.6528 9.77294 13.6532Z"
                    fill="#175CD3"
                  />
                  <path
                    d="M13.8357 12.7487C14.0108 12.9437 14.0597 13.1501 13.9485 13.3765C13.8386 13.6 13.6396 13.6576 13.4073 13.6539C13.1076 13.6492 12.8078 13.6556 12.5081 13.6515C12.1741 13.6469 11.975 13.4518 11.9756 13.1381C11.9762 12.8311 12.1822 12.6279 12.5105 12.6224C12.8241 12.6172 13.1379 12.6218 13.4516 12.6217C13.5878 12.6217 13.7139 12.6529 13.8357 12.7487Z"
                    fill="#175CD3"
                  />
                </svg>
                <span className="ml-2 font-medium ">Discover AI assistant</span>
              </a>

              <div className="flex items-center mt-5 gap-4">
                <div className="flex -space-x-4 rtl:space-x-reverse">
                  <img src={avatars} alt="avatars" />
                </div>
                <div className="font-medium dark:text-white">
                  <img src={reviews} alt="reviews" />
                </div>
              </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src={heroImage} alt="videoImage" />
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
            <h2 className="mb-8 lg:mb-16 text-lg font-medium tracking-tight leading-tight text-center text-gray-600 dark:text-white md:text-xl">
              Join 1,500+ companies already video conferencing the ClearLink way
            </h2>
            <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
              <a href="#" className="flex justify-center items-center">
                <img src={shopify} alt="shopify" />
              </a>
              <a href="#" className="flex justify-center items-center">
                <img src={coinbase} alt="coinbase" />
              </a>
              <a href="#" className="flex justify-center items-center">
                <img src={dropbox} alt="dropbox" />
              </a>

              <a href="#" className="flex justify-center items-center">
                <img src={intercom} alt="intercom" />
              </a>
              <a href="#" className="flex justify-center items-center">
                <img src={marvel} alt="marvel" />
              </a>
              <a href="#" className="flex justify-center items-center">
                <img src={automatic} alt="automatic" />
              </a>
            </div>
          </div>
        </section>
      </div>
      <WhyClearLink />
      <Testimonials />
      <Faq />
      <Sales />
      <Footer />
    </div>
  );
};

export default HeroSection;

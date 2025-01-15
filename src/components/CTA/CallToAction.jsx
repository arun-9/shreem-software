import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-purple-100 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
            Let’s Build Your Future Together
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Discover innovative software solutions crafted by Shreem Software Pvt. Ltd. to elevate
            your business to new heights. Contact us today to begin your journey!
          </p>
          <a
            href="/contact"
            className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-violet-600 dark:hover:bg-violet-700 focus:outline-none dark:focus:ring-violet-800"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

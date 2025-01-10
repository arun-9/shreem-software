import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../components/images/undraw_real_time_sync_re_nky7.svg";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="relative bg-gradient-to-r from-violet-950 to-violet-900 pt-20 dark:bg-violet-950 min-h-screen">
      <section className="container flex min-h-screen flex-col items-center justify-center md:h-[500px] relative z-10">
        <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left px-4 py-6"
          >
            <h1 className="text-4xl"> Empowering Your Business with Innovative Solutions</h1>
            <p>
              At Shree, we provide cutting-edge software solutions to help your business grow and
              thrive in a digital world. Whether it's custom development, cloud solutions, or mobile
              apps, we are here to make it happen.
            </p>
            {/*<div className="space-x-4">
              <a
                href="/services"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-semibold transition duration-300"
              >
                Explore Services
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 py-2 px-6 rounded-full font-semibold transition duration-300"
              >
                Get in Touch
              </a>
            </div>*/}
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto max-w-xs p-6"
          >
            <img src={Banner} alt="No image" className="hover:drop-shadow-md" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;

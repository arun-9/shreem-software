import React from "react";

const HeroVideo = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
      {/* Video Background */}
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>
      </div>

      {/* Hero Content */}
      <div className="video-content space-y-2 z-20">
        <h1 className="font-light text-6xl">Welcome to Shree Software Pvt Ltd</h1>
        <h3 className="font-light text-3xl">
          "At Shreem Software Pvt. Ltd., we craft innovative digital solutions tailored to transform
          businesses and drive growth."
        </h3>
      </div>
    </section>
  );
};

export default HeroVideo;

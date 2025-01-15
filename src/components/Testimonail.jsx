import React from "react";
import PropTypes from "prop-types";

const testimonialData = [
  {
    img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial22_user1.png",
    text: "Shreem Software transformed our business operations with their custom software solutions. Their team’s expertise and dedication ensured we had a seamless experience from start to finish. Highly recommend them!",
    user: "Mary Tyler",
    profession: "Traveller",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial22_user2.png",
    text: "The level of professionalism and innovation at Shreem Software is unmatched. Their enterprise software streamlined our processes and boosted our efficiency significantly. Truly a game-changer!",
    user: "Emily Berry",
    profession: "Traveller",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial22_user3.png",
    text: "Working with Shreem Software was a pleasure. Their team not only understood our unique needs but also delivered a robust and scalable product ahead of schedule. Exceptional service!",
    user: "John Alex",
    profession: "Traveller",
  },
];

const TestimonialItem = ({ data }) => {
  const { img, text, user, profession } = data;
  return (
    <div className="bg-white dark:bg-[#404156] shadow-xl border border-gray-300 dark:border-gray-600 rounded-b-xl h-full p-6 lg:p-12">
      <div className="w-full mx-auto flex justify-center">
        <div className="w-40 h-40 -mt-28 inline-flex justify-center items-center rounded-full border-4 border-white dark:border-[#404156] mx-auto">
          <img src={img} alt={user} className="rounded-full w-full" />
        </div>
      </div>
      <div className="p-6 pb-0 text-center">
        <p className="text-[17px] leading-[1.7] opacity-60 text-black-600">{text}</p>
        <h4 className="text-xl font-medium mt-12 mb-2 text-black-700">{user}</h4>
        <h6 className="text-violet-500">{profession}</h6>
      </div>
    </div>
  );
};
TestimonialItem.propTypes = {
  data: PropTypes.object.isRequired,
};

const Testimonial22 = () => {
  return (
    <section className="ezy__testimonial22 dark py-14 md:py-24 bg-violet-100 dark:bg-[#2E2F41] text-zinc-900 dark:text-white border border-gray-300 dark:border-gray-600">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center mb-6 md:mb-12">
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl md:text-[55px] font-bold mb-6 text-violet-600">
              What People Says
            </h2>
            <div className="max-w-xl">
              <p className="text-lg leading-6 opacity-60 text-black">
                At Shreem Software Pvt. Ltd., our clients consistently praise our commitment to
                delivering innovative and tailored solutions. From seamless software integrations to
                exceptional customer support, we are proud to empower businesses with cutting-edge
                technology.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {testimonialData.map((data, i) => (
            <div className="col-span-3 md:col-span-1 mt-24 md:mt-12" key={i}>
              <TestimonialItem data={data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial22;

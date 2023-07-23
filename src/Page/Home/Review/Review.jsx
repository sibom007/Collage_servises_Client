import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Review = () => {
  const [cards, setcard] = useState([]);

  useEffect(() => {
    fetch(`https://collage-servises-server.vercel.app/rivewerdata`)
      .then((res) => res.json())
      .then((data) => setcard(data));
  }, []);
  console.log(cards);

  return (
    <div>
      <h1 className="text-5xl font-semibold text-center">Review Section</h1>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={Autoplay}
        className="mySwiper"
      >
        {cards.map((card) => (
          <SwiperSlide key={card._id}>
            <div className="flex items-center justify-evenly">
              <div>
                <img
                  className="w-[340px] h-[260px] border-8 rounded"
                  src={card.img}
                  alt=""
                />
              </div>
              <div>
                <p className="text-4xl font-semibold">{card.name}</p>
                <p className="text-4xl font-semibold">{card.collagename}</p>
                <p className="text-4xl font-semibold">Rating : {card.Rating}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;

"use client";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import axios from "axios";
import Loading from "../loading";

export default function BannerSlider() {

  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL
  const [sliderData, setSliderData] = useState([])


  const fetchSliderData = () => {
    axios.get(`${apiBaseUrl}/slider/view`)
      .then((res) => res.data)
      .then((finalRes) => {
        setSliderData(finalRes.SliderData)
      })
  }


  useEffect(() => {
    fetchSliderData()
  }, [])


  // let sliderData = [
  //   {
  //     heading: ["Live Classes", "Mentor Support"],
  //     description:
  //       "Join daily live classes with expert mentors to boost your real-time learning experience.",
  //     src: "/live-classes.JPG",
  //   },
  //   {
  //     heading: ["Doubt Sessions", "Mentor Support"],
  //     description:
  //       "Get instant doubt resolution from experienced mentors for better concept clarity.",
  //     src: "/doubtSolving.JPG",
  //   },
  //   {
  //     heading: ["Practical Learning", "Live Examples"],
  //     description:
  //       "Master concepts through real-world examples and hands-on practical sessions.",
  //     src: "/practicalTraining.JPG",
  //   },
  //   {
  //     heading: ["Tour & Travel", "Institute Trips"],
  //     description:
  //       "Explore, learn, and grow with guided educational trips and institute-sponsored tours.",
  //     src: "/tourTravel.JPG",
  //   },
  // ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: false,
  };

  return (

    <>
      {sliderData.length >= 1
        ?
        <div className="w-[100%]">
          <Slider {...settings}>
            {sliderData.map((item, index) => {
              return (
                <div key={index} className="">
                  <div className="w-[100%] lg:h-[90vh] h-[90vh] bg-cover relative">
                    <img
                      className="w-[100%] h-[100%] object-cover object-center "
                      src={item.sliderImage}
                      alt=""
                    />
                    <div className="w-[100%] h-[100%] absolute left-0 top-0 bg-gradient-to-r from-black/95 via-black/50 to-black/5"></div>

                    <motion.div
                      className="max-w-[600px] absolute top-[13%] left-[5%]"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 3 }}
                    >
                      <h2 className="font-bold capitalize lg:text-[45px] text-[30px] tracking-widest text-gray-50">
                        <Typewriter
                          options={{
                            strings: [item.sliderHeadlineFirst, item.sliderHeadlineSecond],
                            autoStart: true,
                            loop: true,
                            delay: 75,
                          }}
                        />
                      </h2>

                      <motion.p
                        className="max-w-[450px] mt-4 text-[20px] lg:leading-[35px] tracking-widest text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                      >
                        {item.sliderDescription}
                      </motion.p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        :
        <div>
          <Loading />
        </div>

      }

    </>

  );
}

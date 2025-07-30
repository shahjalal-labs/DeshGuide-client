// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
// import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
//
// const Slider = () => {
//   const slides = [
//     {
//       img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2046&q=80",
//       heading: "Discover Bangladesh",
//       sub: "Where culture meets adventure under the stars",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1589320011596-4e41b9a5b0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       heading: "Cox's Bazar Nights",
//       sub: "World's longest natural sea beach under moonlight",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       heading: "Sundarbans Mystique",
//       sub: "Explore the mangrove forests under a starlit sky",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1596466596120-2a8e4b5ddd8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       heading: "Sajek Valley Dreams",
//       sub: "Cloud-covered hills under the night sky",
//     },
//   ];
//
//   return (
//     <div className="relative overflow-hidden h-[60vh] md:h-[70vh] w-full">
//       <Swiper
//         modules={[Autoplay, EffectFade, Pagination, Navigation]}
//         effect="fade"
//         speed={1200}
//         autoplay={{ delay: 6000, disableOnInteraction: false }}
//         loop={true}
//         pagination={{
//           clickable: true,
//           el: ".swiper-custom-pagination",
//           bulletClass: "swiper-bullet",
//           bulletActiveClass: "swiper-bullet-active",
//         }}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         className="h-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index} className="relative">
//             {/* Image with dark overlay */}
//             <div className="absolute inset-0">
//               <img
//                 src={slide.img}
//                 alt={slide.heading}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 backdrop-blur-[1px]"></div>
//             </div>
//
//             {/* Content */}
//             <div className="container mx-auto relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="max-w-3xl"
//               >
//                 <motion.h1
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.6, delay: 0.4 }}
//                   className="text-4xl md:text-6xl font-bold tracking-wide text-white mb-4 text-shadow-lg"
//                 >
//                   {slide.heading}
//                 </motion.h1>
//
//                 <motion.p
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.6 }}
//                   className="text-xl md:text-2xl text-indigo-200 mb-8 glow-text animate-pulse-slow"
//                 >
//                   {slide.sub}
//                 </motion.p>
//
//                 <motion.a
//                   href="/all-trips"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 300,
//                     damping: 15,
//                     delay: 0.8,
//                   }}
//                   whileHover={{
//                     scale: 1.05,
//                     boxShadow: "0 0 25px rgba(99, 102, 241, 0.8)",
//                     textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   className="relative inline-block px-8 py-3.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white font-bold rounded-full text-lg tracking-wide overflow-hidden group"
//                 >
//                   <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-700 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
//                   <span className="relative z-10 flex items-center gap-2">
//                     <span className="inline-block animate-pulse-slow">🌏</span>
//                     Explore Now
//                   </span>
//                   <span className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 group-hover:animate-ping-once transition-all duration-500"></span>
//                 </motion.a>
//               </motion.div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//
//       {/* Custom Navigation */}
//       <div className="swiper-button-prev absolute left-4 top-1/2 z-10 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white cursor-pointer hover:bg-indigo-600/50 transition-all">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M15 19l-7-7 7-7"
//           />
//         </svg>
//       </div>
//       <div className="swiper-button-next absolute right-4 top-1/2 z-10 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white cursor-pointer hover:bg-indigo-600/50 transition-all">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9 5l7 7-7 7"
//           />
//         </svg>
//       </div>
//
//       {/* Custom Pagination */}
//       <div className="swiper-custom-pagination absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2"></div>
//
//       {/* Custom styles */}
//       <style jsx global>{`
//         .swiper-bullet {
//           display: inline-block;
//           width: 12px;
//           height: 12px;
//           background: rgba(255, 255, 255, 0.5);
//           border-radius: 50%;
//           margin: 0 6px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }
//         .swiper-bullet-active {
//           background: rgba(99, 102, 241, 1);
//           box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
//           transform: scale(1.2);
//         }
//
//         @keyframes pulse-glow {
//           0%,
//           100% {
//             text-shadow: 0 0 8px rgba(99, 102, 241, 0.7);
//           }
//           50% {
//             text-shadow: 0 0 15px rgba(99, 102, 241, 1);
//           }
//         }
//
//         .animate-pulse-slow {
//           animation: pulse-glow 3s infinite ease-in-out;
//         }
//
//         @keyframes ping-once {
//           0% {
//             transform: scale(1);
//             opacity: 1;
//           }
//           75%,
//           100% {
//             transform: scale(2);
//             opacity: 0;
//           }
//         }
//
//         .animate-ping-once {
//           animation: ping-once 0.8s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };
//
// export default Slider;
//-------------

import { Carousel } from "react-responsive-carousel";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      heading: "Experience Bangladesh",
      sub: "Your gateway to authentic cultural adventures and hidden gems",
      location: "Nationwide Tours",
      rating: 4.9,
      color: "cyan",
    },
    {
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      heading: "Cox's Bazar Beach",
      sub: "World's longest natural sea beach with golden sunsets",
      location: "Cox's Bazar",
      rating: 4.8,
      color: "purple",
    },
    {
      img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      heading: "Sundarbans Mangrove",
      sub: "UNESCO World Heritage site with Royal Bengal Tigers",
      location: "Sundarbans",
      rating: 4.7,
      color: "indigo",
    },
    {
      img: "https://images.unsplash.com/photo-1464822759844-d150baec0494?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      heading: "Hill Tracts Adventure",
      sub: "Discover tribal culture and misty mountain landscapes",
      location: "Bandarban & Rangamati",
      rating: 4.6,
      color: "pink",
    },
    {
      img: "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      heading: "Heritage Dhaka",
      sub: "Explore 400 years of Mughal architecture and old city charm",
      location: "Old Dhaka",
      rating: 4.5,
      color: "emerald",
    },
    {
      img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      heading: "Tea Garden Serenity",
      sub: "Rolling green hills and aromatic tea plantations",
      location: "Sylhet Division",
      rating: 4.8,
      color: "teal",
    },
  ];

  const customRenderArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <motion.button
        onClick={onClickHandler}
        title={label}
        whileHover={{ scale: 1.1, x: -3 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-6 top-1/2 z-20 -translate-y-1/2 w-14 h-14 rounded-full bg-black/30 backdrop-blur-md border border-gray-600/50 flex items-center justify-center text-white hover:bg-indigo-600/60 hover:border-indigo-400/80 transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] group"
      >
        <FaChevronLeft className="text-lg group-hover:text-cyan-300 transition-colors duration-300" />
      </motion.button>
    );

  const customRenderArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <motion.button
        onClick={onClickHandler}
        title={label}
        whileHover={{ scale: 1.1, x: 3 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-6 top-1/2 z-20 -translate-y-1/2 w-14 h-14 rounded-full bg-black/30 backdrop-blur-md border border-gray-600/50 flex items-center justify-center text-white hover:bg-indigo-600/60 hover:border-indigo-400/80 transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] group"
      >
        <FaChevronRight className="text-lg group-hover:text-cyan-300 transition-colors duration-300" />
      </motion.button>
    );

  const customRenderIndicator = (onClickHandler, isSelected, index, label) => {
    const slide = slides[index];
    return (
      <motion.button
        onClick={onClickHandler}
        onFocus={onClickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        title={`${label} ${index + 1}`}
        aria-label={`${label} ${index + 1}`}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className={`
          inline-block w-4 h-4 mx-2 rounded-full cursor-pointer transition-all duration-300 backdrop-blur-sm border-2
          ${
            isSelected
              ? `bg-${slide.color}-500 border-${slide.color}-400 shadow-[0_0_15px_rgba(99,102,241,0.8)] animate-pulse`
              : "bg-white/30 border-gray-400/50 hover:bg-white/50 hover:border-white/70"
          }
        `}
      />
    );
  };

  return (
    <div className="relative overflow-hidden h-[60vh]  w-full rounded-3xl">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={6000}
        transitionTime={1000}
        swipeable={true}
        emulateTouch={true}
        selectedItem={currentSlide}
        onChange={setCurrentSlide}
        renderArrowPrev={customRenderArrowPrev}
        renderArrowNext={customRenderArrowNext}
        renderIndicator={customRenderIndicator}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[70vh] md:h-[80vh]">
            {/* Background Image with Parallax Effect */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.img
                src={slide.img}
                alt={slide.heading}
                className="w-full h-full object-cover scale-110"
                initial={{ scale: 1.1 }}
                animate={{ scale: currentSlide === index ? 1 : 1.1 }}
                transition={{ duration: 8, ease: "easeOut" }}
              />

              {/* Multi-layer Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
              <div
                className={`absolute inset-0 bg-gradient-to-br from-${slide.color}-900/20 via-transparent to-purple-900/20`}
              ></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 left-10 z-10">
              <motion.div
                className="flex items-center space-x-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-gray-600/50"
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: currentSlide === index ? 1 : 0,
                  x: currentSlide === index ? 0 : -50,
                }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <FaMapMarkerAlt className={`text-${slide.color}-400`} />
                <span className="text-white text-sm font-medium">
                  {slide.location}
                </span>
              </motion.div>
            </div>

            <div className="absolute top-10 right-10 z-10">
              <motion.div
                className="flex items-center space-x-1 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-gray-600/50"
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: currentSlide === index ? 1 : 0,
                  x: currentSlide === index ? 0 : 50,
                }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <FaStar className="text-yellow-400" />
                <span className="text-white text-sm font-medium">
                  {slide.rating}
                </span>
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
              <AnimatePresence mode="wait">
                {currentSlide === index && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.9 }}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="max-w-4xl"
                  >
                    {/* Heading */}
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className={`
                        text-5xl md:text-7xl font-black tracking-tight text-white mb-6
                        bg-gradient-to-r from-white via-${slide.color}-200 to-white bg-clip-text text-transparent
                        drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]
                      `}
                    >
                      {slide.heading}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className={`
                        text-xl md:text-3xl text-${slide.color}-200 mb-10 font-light
                        drop-shadow-[0_0_20px_rgba(99,102,241,0.5)]
                      `}
                    >
                      {slide.sub}
                    </motion.p>

                    {/* CTA Button */}
                    <div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.6,
                      }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: `0 0 40px rgba(99, 102, 241, 0.8)`,
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        relative inline-flex items-center gap-3 px-10 py-4 
                        bg-gradient-to-r from-${slide.color}-600 via-purple-600 to-indigo-600 
                        hover:from-${slide.color}-500 hover:via-purple-500 hover:to-indigo-500
                        text-white font-bold rounded-full text-lg tracking-wide 
                        transition-all duration-300 overflow-hidden group
                        border-2 border-${slide.color}-400/50 hover:border-${slide.color}-300
                        backdrop-blur-sm
                      `}
                    >
                      <motion.span
                        className="text-2xl"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      >
                        🌏
                      </motion.span>
                      <span className="relative z-10">
                        <Link to="/all-trips">Book Your Tour</Link>
                      </span>

                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-full border-2 border-white/30 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>

                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Glow Effect */}
            <div
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-${slide.color}-500/30 to-transparent blur-3xl`}
            ></div>
          </div>
        ))}
      </Carousel>

      {/* Animated Progress Bar */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-gray-600/50">
          <span className="text-white/70 text-sm font-medium">
            {String(currentSlide + 1).padStart(2, "0")}
          </span>
          <div className="w-16 h-1 bg-gray-600/50 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r from-${slides[currentSlide].color}-400 to-purple-400 rounded-full`}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 6, repeat: Infinity }}
              key={currentSlide}
            />
          </div>
          <span className="text-white/70 text-sm font-medium">
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slider;

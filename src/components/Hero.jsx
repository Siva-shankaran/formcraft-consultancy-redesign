import { useState, useEffect } from "react";

import hero1 from "../assets/hero/hero1.jpeg";
import hero2 from "../assets/hero/hero2.jpeg";
import hero3 from "../assets/hero/hero3.jpeg";
import hero4 from "../assets/hero/hero4.jpeg";

const images = [hero1, hero2, hero3, hero4];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[4000ms] ${
  current === index
    ? "opacity-100 scale-110"
    : "opacity-0 scale-100"
}`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Fixed Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center">

        <div className="text-white px-6">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl mx-auto">
  Engineering Precision
  <br />
  <span className="text-orange-400">
    for Modern Construction
  </span>
</h1>

<p className="mt-8 text-lg md:text-xl text-gray-200">
  Design • Manufacturing • Refurbishment • Technical Support
</p>

<button className="mt-10 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
  Explore Services →
</button>

        </div>

      </div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">

    ↓

    <p className="text-sm">
        Scroll
    </p>

</div>
    </section>
  );
}

export default Hero;
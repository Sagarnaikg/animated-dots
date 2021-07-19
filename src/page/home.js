import React, { useEffect, useState } from "react";
// gsap
import { TweenMax } from "gsap";

const animation = () => {
  TweenMax.to(".home", 0.0, {
    visibility: "visible",
  });
  TweenMax.staggerFrom(
    [".yellow", ".red", ".blue"],
    0.8,
    {
      opacity: 0,
      x: 20,
      ease: "power3.easeOut",
    },
    0.2
  );
};

const Home = () => {
  useEffect(() => {
    animation();
  }, []);

  const clickAnimation = (element) => {
    const eleList = [".yellow", ".red", ".blue"];

    eleList.forEach((ele) => {
      if (ele == element) {
        TweenMax.to(ele, 0.4, {
          width: 50,
          height: 50,
          ease: "power3.easeOut",
        });
      } else {
        TweenMax.to(ele, 0.4, {
          width: 35,
          height: 35,
          ease: "power3.easeOut",
        });
      }
    });
  };

  return (
    <div className="home">
      <div className="info">Click the dots and see the magic</div>
      <div
        className="circle yellow"
        onClick={() => clickAnimation(".yellow")}
      ></div>
      <div className="circle red" onClick={() => clickAnimation(".red")}></div>
      <div
        className="circle blue "
        onClick={() => clickAnimation(".blue")}
      ></div>
    </div>
  );
};

export default Home;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const hero = () => {
  useGSAP(() => {
    console.log("useGSAP");
    gsap.to("#hero", {
      opacity: 1,
      delay: 0.5,
    });

    gsap.to("#author_and_date", {
      opacity: 1,
      y: -50,
      delay: 1,
    });
  }, []);

  return (
    <section className="w-full nav-height relative">
      <div className="h-5/6 w-full flex-center">
        <p id="hero" className="hero-title">
          我的职业经历回顾
        </p>
      </div>

      <div
        id="author_and_date"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <p className="font-normal text-xl hero-subtitle">2019~2024 李赛飞</p>
      </div>
    </section>
  );
};
export default hero;

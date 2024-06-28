"use client";
import { motion } from "framer-motion";

function BenefitsItem({ title, img, index }) {
  const benefitsVariants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
      },
    }),
    whileHover: { scale: 1.05 },
    hidden: {
      opacity: 0,
    },
  };
  return (
    <motion.div
      variants={benefitsVariants}
      initial="hidden"
      whileHover="whileHover"
      whileInView="visible"
      viewport={{ once: false }}
      custom={index}
      className="w-fit flex items-center gap-x-4"
    >
      <img
        src={img}
        alt=""
        width={70}
        height={70}
        className="rounded-full border-2 border-peach"
      />
      <div className="flex flex-col gap-y-1 text-white font-medium text-base">
        {title}
      </div>
    </motion.div>
  );
}

export default function Benefits() {
  const benefitsList = [
    { title: "Вигідні ціни", img: "/img/icons/Ben1.png" },
    { title: "Розрахунок одразу", img: "/img/icons/Ben2.png" },
    { title: "Безпечні угоди", img: "/img/icons/Ben3.png" },
    { title: "Викуп неробочої техніки", img: "/img/icons/Ben4.png" },
  ];
  return (
    <div className="w-full mx-auto max-w-7xl flex flex-col lg:flex-row items-start gap-y-5 lg:items-center py-4 lg:py-4 justify-center lg:justify-between">
      {benefitsList.map((item, index) => {
        return <BenefitsItem title={item.title} img={item.img} index={index} />;
      })}
    </div>
  );
}

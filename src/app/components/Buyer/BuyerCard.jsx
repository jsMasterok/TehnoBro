"use client";
import { delay, motion } from "framer-motion";
import Image from "next/image";

export default function BuyerCard({ title, img, index }) {
  const cardVariants = {
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
      variants={cardVariants}
      initial="hidden"
      whileHover="whileHover"
      whileInView="visible"
      viewport={{ once: false }}
      custom={index}
      className="w-full p-4 rounded-md border-2 border-peach flex items-center gap-x-2"
    >
      <Image src={img} width={100} height={100} className="" />
      <span className="font-medium text-white text-xl">{title}</span>
    </motion.div>
  );
}

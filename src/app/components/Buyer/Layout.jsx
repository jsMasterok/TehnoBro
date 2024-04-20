"use client";

import BuyerCard from "@/app/components/Buyer/BuyerCard";
import { motion } from "framer-motion";

export default function Layout() {
  const cards = [
    {
      title: "Комп'ютери в зборі",
      img: "/img/icons/pc.png",
    },
    {
      title: "Комплектуючі для ПК",
      img: "/img/icons/mother.png",
    },
    {
      title: "Відеокарти",
      img: "/img/icons/vga.png",
    },
    {
      title: "Майнінг ферми",
      img: "/img/icons/mining.png",
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col bg-graphite-black pt-4 pb-8 px-2 overflow-hidden">
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col justify-around">
        <h2 className="text-white font-semibold text-4xl text-center inline-flex items-center gap-x-4 w-fit mx-auto">
          Що ми купуємо{" "}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.3,
            }}
            viewport={{ once: false }}
          >
            🤔
          </motion.p>
        </h2>
        <div className="w-full grid grid-cols-2 gap-8">
          {cards.map((card, i) => {
            return (
              <BuyerCard key={i} title={card.title} img={card.img} index={i} />
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.5,
          }}
          viewport={{ once: false }}
          className="text-center text-white text-sm font-medium border-2 border-peach rounded-md py-4 px-16"
        >
          Оперативна гуртовна скупка ваших відеокарт або майнінг ферм у зборі.
          Перевірка вашого обладнання у нас в офісі в Києві або приїзд до вас на
          об'єкт Оплата одразу після перевірки Розрахунок будь-яким зручним
          способом: Гривня, Доллар, USDT Усі технічні моменти та можливі
          складнощі беремо на себе
        </motion.div>
      </div>
    </div>
  );
}

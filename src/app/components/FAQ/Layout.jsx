"use client";

import { motion } from "framer-motion";

export default function Layout() {
  const benefits = [
    {
      text: "Цікавлять усі моделі карт або комплектуючих, пишіть, обов'язково домовимось. 😉",
    },
    {
      text: "Перевірка у нас в Києві / Приїзд до вас / Робота через гаранта. Робимо все, щоб будь яка угода була швидкою і зручною для вас. 🤝🏻",
    },
    {
      text: "В пріорітеті кількість, можна 100+. Оплата у будь-якій валюті: Доллар, Гривня, USDT 💸",
    },
    {
      text: "Будь-яка угода не більше дня. Привезли карти (або ми за ними приїхали), пару годин і гроші у вас на руках. ☝🏻",
    },
  ];

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
    <div className="w-full h-screen flex flex-col bg-graphite-black pt-4 pb-8 px-2 overflow-hidden">
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col justify-around">
        <h2 className="text-white font-semibold text-4xl text-center inline-flex items-center gap-x-4 w-fit mx-auto">
          Чому саме ми
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.2,
            }}
            viewport={{ once: false }}
          >
            🧐
          </motion.p>
        </h2>
        <div className="w-full grid grid-cols-2 gap-8">
          {benefits.map((item, index) => {
            return (
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileHover="whileHover"
                whileInView="visible"
                viewport={{ once: false }}
                custom={index}
                key={index}
                className="w-full p-4 rounded-md border-2 border-peach flex items-center gap-x-2 font-medium text-white text-base justify-center h-24"
              >
                {item.text}
              </motion.div>
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
          Наша задача зробити процес викупу вашого обладнання максимально
          зручним для вас. Усі технічні питання беремо на себе (Логістика,
          розбір рігів, прошивка та перевірка відеокарт). Оплата одразу після
          отримання та перевірки обладнання. Майже будь-яка угода не більше дня,
          тобто гроші ви отримуєте у той же день. Досвід роботи у сфері вже
          більше 6-ти років
        </motion.div>
      </div>
    </div>
  );
}

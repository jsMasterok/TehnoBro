"use client";

import { motion } from "framer-motion";

export default function Layout() {
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.3,
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

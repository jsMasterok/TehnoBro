"use client";
import { motion } from "framer-motion";

export default function CallBackForm() {
  return (
    <motion.form
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{
        duration: 0.5,
      }}
      action="POST"
      className="w-full px-8 py-4 bg-gradient-to-br rounded-md flex flex-col from-gradient-from to-gradient-to"
    >
      <h3 className="text-2xl font-semibold text-white">
        Швидкий викуп вашої техніки
      </h3>
      <span className="text-base font-medium text-white">
        Залиште заявку і ми зв'яжемося з вами 🚀
      </span>
      <div className="grid grid-cols-12 gap-x-2 gap-y-3 my-2">
        <div className="w-full col-span-6">
          <input
            type="text"
            placeholder="Ваше ім'я"
            className="p-1 w-full rounded border-0 focus:border-0 focus:ring-0 placeholder:text-sm"
          />
        </div>
        <div className="w-full col-span-6">
          <input
            type="tel"
            placeholder="Ваш номер телефону"
            className="p-1 w-full rounded border-0 focus:border-0 focus:ring-0 placeholder:text-sm"
          />
        </div>
        <div className="col-span-12 w-full">
          <textarea
            placeholder="Короткий опис того що б ви хотіли продати"
            className="p-1 w-full rounded border-0 focus:border-0 focus:ring-0 placeholder:text-sm"
            rows={3}
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="w-fit rounded px-8 mx-auto text-center py-2 bg-graphite-black text-white border border-graphite-black hover:border-white transition-all"
      >
        Дізнатись ціну
      </button>
    </motion.form>
  );
}

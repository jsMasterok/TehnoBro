"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Layout() {
  return (
    <div className="w-full h-full lg:h-screen flex flex-col bg-graphite-black pt-4 pb-8 px-2 overflow-hidden">
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col justify-around">
        <h2 className="text-white font-semibold text-2xl lg:text-4xl text-center inline-flex items-center gap-x-1 lg:gap-x-4 w-fit mx-auto">
          Потрібно продати швидше
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.2,
            }}
            viewport={{ once: false }}
          >
            😎
          </motion.p>
        </h2>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4 my-4">
          <div className="flex flex-col gap-y-2">
            <h4 className="text-lg font-semibold text-white">Адресса</h4>
            <span className="text-white font-medium text-base">
              м.Київ,вул.Вадима Гетьмана,27.
            </span>
          </div>
          <div className="flex flex-col gap-y-2">
            <h4 className="text-lg font-semibold text-white">Контакти</h4>
            <Link
              href={"tel:+380660557776"}
              className="text-peach underline underline-offset-4 font-medium text-base"
            >
              +38 (066)-055-77-76
            </Link>
          </div>
          <div className="flex flex-col gap-y-2">
            <h4 className="text-lg font-semibold text-white">Графік</h4>
            <span className="text-white font-medium text-base">
              11:00 до 20:00 ПН-ПТ
            </span>
          </div>
          <div className="flex flex-col gap-y-2">
            <h4 className="text-lg font-semibold text-white">Мессенджери</h4>
            <Link
              href={"tel:+380660557776"}
              className="text-peach underline underline-offset-4 font-medium text-base inline-flex items-center gap-x-2"
            >
              +38 (066)-055-77-76
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-telegram"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
              </svg>
            </Link>
          </div>
        </div>
        <motion.iframe
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: false }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.1040851992807!2d30.444570376389738!3d50.43916188817664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cea077242231%3A0xdeca15f0ddd47b66!2z0YPQuy4g0JLQsNC00LjQvNCwINCT0LXRgtGM0LzQsNC90LAsIDI3LCDQmtC40LXQsiwgMDIwMDA!5e0!3m2!1sru!2sua!4v1713570831146!5m2!1sru!2sua"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></motion.iframe>
      </div>
    </div>
  );
}

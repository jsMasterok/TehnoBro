"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2 }}
      className="w-full"
    >
      <div className="w-full mx-auto max-w-7xl flex items-center justify-between">
        <Image src={"/img/LOGO.png"} width={100} height={100} />
        <div className="flex items-center gap-x-1 lg:gap-x-8">
          <span className="text-base hidden lg:flex font-medium text-peach underline-offset-4 hover:underline items-center gap-x-1 cursor-pointer">
            <span className="hidden lg:block">Як нас знайти</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pin-map-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"
              />
              <path
                fill-rule="evenodd"
                d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
              />
            </svg>
          </span>
          <span className="text-base hidden font-medium text-peach underline-offset-4 hover:underline lg:flex items-center gap-x-1 cursor-pointer">
            <span className="hidden lg:block">Зворотній зв'язок</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
            </svg>
          </span>
          <Link
            href={"tel:+380660557776"}
            className="text-base font-medium text-peach underline-offset-4 hover:underline flex items-center gap-x-1 cursor-pointer"
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
    </motion.header>
  );
}

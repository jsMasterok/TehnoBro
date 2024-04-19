"use client";
import { ReactTyped } from "react-typed";

export default function Title() {
  return (
    <div className="w-full flex items-center justify-center h-full">
      <ReactTyped
        className="text-4xl text-white font-semibold custom_strong"
        strings={[
          "Швидкий викуп <strong>комп'ютерів</strong>",
          "Швидкий викуп <strong>моніторів</strong>",
          "Швидкий викуп <strong>майнінг ферм</strong>",
          "Швидкий викуп <strong>комплектуючих</strong>",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </div>
  );
}

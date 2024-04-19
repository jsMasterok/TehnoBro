export default function Benefits() {
  return (
    <div className="w-full mx-auto max-w-7xl flex items-center justify-between">
      <div className="w-fit flex items-center gap-x-4">
        <img
          src={"/img/icons/Ben1.png"}
          alt=""
          width={70}
          height={70}
          className="rounded-full border-2 border-peach"
        />
        <div className="flex flex-col gap-y-1 text-white font-medium text-base">
          Вигідні ціни
        </div>
      </div>
      {/*  */}
      <div className="w-fit flex items-center gap-x-4">
        <img
          src={"/img/icons/Ben2.png"}
          alt=""
          width={70}
          height={70}
          className="rounded-full border-2 border-peach"
        />
        <div className="flex flex-col gap-y-1 text-white font-medium text-base">
          Розрахунок одразу
        </div>
      </div>
      {/*  */}
      <div className="w-fit flex items-center gap-x-4">
        <img
          src={"/img/icons/Ben3.png"}
          alt=""
          width={70}
          height={70}
          className="rounded-full border-2 border-peach"
        />
        <div className="flex flex-col gap-y-1 text-white font-medium text-base">
          Безпечні угоди
        </div>
      </div>
      {/*  */}
      <div className="w-fit flex items-center gap-x-4">
        <img
          src={"/img/icons/Ben4.png"}
          alt=""
          width={70}
          height={70}
          className="rounded-full border-2 border-peach"
        />
        <div className="flex flex-col gap-y-1 text-white font-medium text-base">
          Викуп неробочої техніки
        </div>
      </div>
    </div>
  );
}

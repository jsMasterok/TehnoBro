import CallBackForm from "@/app/components/Hero/CallBackForm";
import Header from "@/app/components/Hero/Header";
import Title from "@/app/components/Hero/Title";
import Benefits from "@/app/components/Hero/Benefits";

import CallBackModal from "@/app/components/Modals/CallBackModal";

export default function HeroSection() {
  return (
    <div className="w-full h-screen flex flex-col bg-graphite-black pt-4 pb-8 px-2">
      <Header />
      <div className="w-full h-full flex flex-col justify-between">
        <div className="w-full h-full flex flex-col justify-center">
          <div className="grid grid-cols-12 max-w-7xl mx-auto w-full gap-x-2">
            <div className="col-span-5">
              <CallBackForm />
            </div>
            <div className="col-span-7">
              <Title />
            </div>
          </div>
        </div>
        <Benefits />
      </div>
      <CallBackModal isOpen={false} />
    </div>
  );
}

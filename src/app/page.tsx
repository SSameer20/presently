import { Meteors } from "@/components/meteors";
import { TextAnimateDemo } from "../components/ui/TextAnimate";

export function Hero({ className }: { className?: string }) {
  return (
    <div
      className={`relative ${className} overflow-hidden w-full h-screen flex flex-col justify-center items-center text-center px-6`}
    >
      <Meteors number={10} />

      {/* Background Glows */}
      <div className="absolute top-0 left-[-10vw] h-[1px] w-[1px] shadow-[0_0_200px_60px_#578FCA] rounded-full" />
      <div className="absolute top-[20vh] left-[-20vw] h-[1px] w-[1px] shadow-[0_0_200px_60px_#FFCCE1] rounded-full" />

      {/* Text Section */}
      <div className="w-full flex flex-col gap-5">
        <TextAnimateDemo
          by="character"
          text="Managing slides"
          className="md:text-6xl text-4xl font-semibold"
        />
        <div className="flex flex-wrap gap-3 justify-center items-center">
          <TextAnimateDemo
            by="character"
            text="with"
            className="md:text-6xl text-4xl font-semibold"
          />
          <TextAnimateDemo
            by="character"
            text="Presently"
            delay={10}
            className="md:text-6xl text-4xl font-semibold text-[#7FA1C3]"
          />
        </div>
        <TextAnimateDemo
          by="character"
          text="Perfect for presentations, pitches, and reports."
          delay={10}
          className="text-lg md:text-xl font-sans text-[#6e6e6c]"
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="dark text-foreground bg-background w-full h-screen flex justify-center items-center">
      <Hero />
    </div>
  );
}

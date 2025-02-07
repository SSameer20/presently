import { Meteors } from "@/components/meteors";
import { TextAnimateDemo } from "../ui/TextAnimate";

export function Hero() {
  return (
    <>
      <Meteors number={10} />
      <div className="w-1/3 flex flex-col gap-5">
        <TextAnimateDemo
          by="character"
          text="Managing slides"
          className="text-6xl font-semibold w-full text-center"
        />
        <div className="flex gap-5 w-full justify-center items-center">
          <TextAnimateDemo
            by="character"
            text="with"
            className="text-6xl font-semibold text-center"
          />
          <TextAnimateDemo
            by="character"
            text="Presently"
            delay={10}
            className="text-6xl font-semibold text-[#7FA1C3] text-center"
          />
        </div>
        <span className="w-full text-center">
          Perfect for presentations, pitches, and reports.
        </span>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <div className="dark text-foreground bg-background w-full min-h-screen flex justify-center items-center">
      <Hero />
    </div>
  );
}

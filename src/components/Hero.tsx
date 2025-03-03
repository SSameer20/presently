import { Meteors } from "@/components/meteors";
import { TextAnimateDemo } from "./ui/TextAnimate";
import { Amiko } from "next/font/google";
import { Button } from "./ui/button";
import { motion } from "motion/react";
export const amikoSemi = Amiko({ weight: "400", subsets: ["latin"] });
export const amikoBold = Amiko({ weight: "700", subsets: ["latin"] });
export function Hero({ className }: { className?: string }) {
  return (
    <div
      className={`relative ${className} overflow-hidden flex flex-col justify-center items-center text-center px-6 `}
    >
      <Meteors number={10} />

      {/* Background Glows */}
      <div className="absolute top-[-10vh] left-[30vw] h-[100vh] w-[0px] shadow-[0_0_200px_60px_#578FCA] rounded-full rotate-[-45deg] opacity-25" />
      {/* <div className="absolute top-[40vh] left-[20vw] h-[1px] w-[1px] shadow-[0_0_200px_60px_#FFCCE1] rounded-full" /> */}

      {/* Text Section */}
      <div className={`${amikoBold.className} w-full flex flex-col gap-5`}>
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
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <TextAnimateDemo
            by="word"
            animation="blurInUp"
            text="Perfect for presentations, pitches, and reports."
            className={`${amikoSemi.className} text-lg md:text-xl text-[#6e6e6c]`}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
          >
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button onClick={() => (location.href = "/pages/generate")}>
                Lets Start
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

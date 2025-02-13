"use client";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="dark text-foreground bg-background w-full min-h-[100vh] flex flex-col snap-y snap-mandatory overflow-y-auto s">
      <Hero className="w-full h-[100vh] snap-start" />
    </div>
  );
}

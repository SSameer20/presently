"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const handleCreate = () => {
    try {
      const topic = inputRef?.current?.value.trim();
      if (topic === "" || topic === undefined) {
        throw new Error("provide valid topic to generate slides");
      }
      router.push(`/pages/generate/slides?topic=${topic}`);
    } catch (error) {
      return toast({
        variant: "destructive",
        title: `${error}`,
      });
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-black via-gray-900 to-gray-950 py-10 gap-10">
      <div className="w-1/2 text-center flex flex-col gap-2">
        <span className="text-4xl font-sans font-medium text-gray-400">
          Hi, Sameer
        </span>
        <span className="text-3xl font-sans font-bold text-gray-200">
          How Can I Help You Today?
        </span>
      </div>

      <div className="w-1/2 flex flex-col gap-5">
        <Input
          type="text"
          className="border-gray-500 focus:border-gray-700 focus:border-2 p-4 h-[50px] text-gray-950 bg-white"
          placeholder="Enter topic..."
          ref={inputRef}
        />
        <Button
          className="w-[100px]"
          variant="destructive"
          onClick={handleCreate}
        >
          Create
        </Button>
      </div>
    </div>
  );
}

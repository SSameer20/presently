"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast"; // Fixed import

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { toast } = useToast();

  const handleCreate = () => {
    const topic = inputRef.current?.value; // Get and trim input value

    if (!topic) {
      toast({
        variant: "destructive",
        title: "Invalid Input",
        description: "Please enter a valid topic before proceeding.",
      });
      return;
    }

    router.push(
      `/pages/generate/slides?topic=${encodeURIComponent(topic.trim())}`
    );
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-black via-gray-900 to-gray-950 py-10 gap-10">
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

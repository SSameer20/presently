import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function page() {
  return (
    <div className="w-[100%] h-[100%] bg-gradient-to-tr from-black via-gray-900  to-gray-950 flex flex-col items-center justify-center py-10 gap-10">
      <div className="w-1/2">
        <div className="flex flex-col text-center gap-2">
          <span className="text-4xl font-sans font-medium text-gray-400">
            Hi, Sameer
          </span>
          <span className="text-3xl font-sans font-bold text-gray-200">
            How Can I help You Today ?
          </span>
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-5">
        <Input
          type="text"
          className="border-gray-500 focus:border-gray-700 focus:border-2 p-4 h-[50px] text-gray-950 bg-white"
          placeholder="Topic"
        />
        <Button className="w-[100px]" variant={"destructive"}>
          create
        </Button>
      </div>
    </div>
  );
}

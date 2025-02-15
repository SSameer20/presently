export default function Loading() {
  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-center items-center">
      <div className="flex gap-5">
        <div className="w-5 h-5 rounded-[50%] bg-white animate-bounce " />
        <div className="w-5 h-5 rounded-[50%] bg-white animate-bounce " />
        <div className="w-5 h-5 rounded-[50%] bg-white animate-bounce " />
        <div className="w-5 h-5 rounded-[50%] bg-white animate-bounce " />
      </div>
    </div>
  );
}

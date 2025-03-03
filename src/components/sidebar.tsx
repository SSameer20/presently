import Link from "next/link";

export default function Sidebar({
  className,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={`${className} relative flex flex-col justify-between gap-10 px-5 py-10 border-r`}
    >
      <div className="flex flex-col gap-10">
        <Link href="/">
          <span className="font-semibold text-2xl text-blue-400">
            Presently
          </span>
        </Link>
        <div className="flex flex-col gap-4">
          <Link href="/pages/generate">
            <span className="px-5 py-2 hover:bg-gray-800 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-all duration-200 rounded-md">
              Generate
            </span>
          </Link>
          <Link href="/pages/history">
            <span className="px-5 py-2 hover:bg-gray-800 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-all duration-200 rounded-md">
              History
            </span>
          </Link>
        </div>
      </div>
      <Link href="/pages/auth/login">
        <span className="px-5 py-2 hover:bg-red-300 hover:text-black hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-all duration-200 rounded-md">
          Logout
        </span>
      </Link>
    </div>
  );
}

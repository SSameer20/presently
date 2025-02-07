import Link from "next/link";

export default function Sidebar({ className }: { className?: string }) {
  return (
    <div className={`${className} grid grid-cols-1 gap-2`}>
      <Link href="/">
        <span className="flex gap-5">Home</span>
      </Link>
      <Link href="/pages/generate">
        <span className="flex gap-5">Generate</span>
      </Link>
      <Link href="/pages/history">
        <span className="flex gap-5">History</span>
      </Link>
      <Link href="/pages/auth/login">
        <span className="flex gap-5">Logout</span>
      </Link>
    </div>
  );
}

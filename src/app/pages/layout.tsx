import Sidebar from "@/components/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generate Slides Easily",
  description: "Create stunning, professional slides in seconds with Presently",
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative h-screen w-full overflow-y-auto overflow-x-hidden dark bg-background text-foreground flex`}
    >
      <Sidebar className="flex-shrink-0 lg:w-48" />

      <main className="flex-1 overflow-y-auto lg:w-[cal(100vh-12rem)] p-0 m-0">
        {children}
      </main>
    </div>
  );
}

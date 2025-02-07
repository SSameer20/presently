import Sidebar from "@/components/ui/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Presently | Easy AI Generated Slides",
  description:
    "Create stunning, professional slides in seconds with Presently - the AI-powered slide generator. Perfect for presentations, pitches, and reports. Save time, boost creativity, and impress your audience with AI-generated slides tailored to your needs. Try it now!",
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body
      className={`h-screen w-full overflow-y-auto overflow-x-hidden dark bg-background text-foreground flex`}
    >
      <Sidebar className="flex-1" />
      <div className="flex-auto">{children}</div>
    </body>
  );
}

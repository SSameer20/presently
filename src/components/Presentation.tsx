"use client";

import React from "react";
import pptxgen from "pptxgenjs";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Slide } from "@/lib/types";

interface Props {
  topic?: string;
  slides?: Slide[];
  className?: string;
}

export default function Presentation({
  topic = "Untitled",
  slides = [],
  className,
}: Props) {
  const createSlides = () => {
    const ppt = new pptxgen();
    ppt.defineLayout({ name: "LAYOUT_16x9", width: 10, height: 5.625 });
    ppt.layout = "LAYOUT_16x9";

    slides.forEach((item) => {
      const slide = ppt.addSlide();

      // Add title (Centered & Properly Positioned)
      if (item.title) {
        slide.addText(item.title, {
          x: 0.5,
          y: 0.3,
          w: 9, // Width spans most of the slide
          h: 1,
          fontSize: 36,
          bold: true,
          color: "363636",
          valign: "middle",
          align: "left",
        });
      }

      // Add description (Below Title with Proper Spacing)
      if (item.description) {
        slide.addText(item.description, {
          x: 0.5,
          y: 1.5, // Push it below the title
          w: 9,
          h: 1,
          fontSize: 24,
          color: "666666",
          valign: "top",
          align: "left",
        });
      }

      // Add bullet points (Well-Aligned List)
      if (item.list?.length) {
        slide.addText(
          item.list.map((li) => `• ${li}`).join("\n"), // Proper bullet formatting
          {
            x: 1, // Indent from left
            y: 2.8, // Below description
            w: 8,
            h: 3,
            fontSize: 20,
            color: "444444",
            valign: "top",
            align: "left",
          }
        );
      }
    });

    // Download PPT
    ppt.writeFile({
      fileName: `${topic
        .replace(/[^a-z0-9]/gi, "-")
        .toLowerCase()}-slides.pptx`,
    });
  };

  return (
    <Button
      onClick={createSlides}
      className={`${className} flex items-center gap-2`}
    >
      <Download className="w-4 h-4" />
      Download Presentation
    </Button>
  );
}

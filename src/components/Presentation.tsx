"use client";

import React from "react";
import pptxgen from "pptxgenjs";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface Slide {
  title?: string;
  description?: string;
  list?: string[];
}

interface Props {
  topic?: string;
  slides?: Slide[];
}

export default function Presentation({ topic, slides }: Props) {
  function createSlides() {
    const ppt = new pptxgen();

    // Set default slide size to 16:9
    ppt.defineLayout({ name: "LAYOUT_16x9", width: 10, height: 5.625 });
    ppt.layout = "LAYOUT_16x9";

    slides?.forEach((item) => {
      const slide = ppt.addSlide();

      // Add title
      if (item.title) {
        slide.addText(item.title, {
          x: 0.5,
          y: 0.5,
          w: "90%",
          fontSize: 36,
          bold: true,
          color: "363636",
        });
      }

      // Add description
      if (item.description) {
        slide.addText(item.description, {
          x: 0.5,
          y: 1.5,
          w: "90%",
          fontSize: 24,
          color: "666666",
        });
      }

      // Add bullet points
      if (item.list && item.list.length > 0) {
        item.list.map((list, index) => {
          slide.addText(list, {
            x: 0.5,
            y: 2.5 + index * 0.5,
            w: "90%",
            fontSize: 18,
            bullet: true,
            color: "666666",
          });
        });
      }
    });

    ppt.writeFile({ fileName: `${topic || "presentation"}-slides.pptx` });
  }

  return (
    <div>
      <div className="relative"></div>
      <div className="flex justify-between items-center mb-8">
        <Button onClick={createSlides} className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Save PPT
        </Button>
      </div>
    </div>
  );
}

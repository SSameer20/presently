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

export default function Presentation({
  topic = "Untitled",
  slides = [],
}: Props) {
  const createSlides = () => {
    const ppt = new pptxgen();

    // Set default slide size to 16:9
    ppt.defineLayout({ name: "LAYOUT_16x9", width: 10, height: 5.625 });
    ppt.layout = "LAYOUT_16x9";

    slides.forEach((item, index) => {
      const slide = ppt.addSlide();

      // Add title
      if (item.title) {
        slide.addText(item.title, {
          x: 0.5,
          y: index * 0.5,
          w: "90%",
          h: 0.8,
          fontSize: 36,
          bold: true,
          color: "363636",
          valign: "top",
        });
      }

      // Add description
      if (item.description) {
        slide.addText(item.description, {
          x: 0.5,
          y: item.title ? 1.5 : 0.5,
          w: "90%",
          h: 1,
          fontSize: 24,
          color: "666666",
          valign: "top",
        });
      }

      // Add bullet points
      if (item.list?.length) {
        item.list.map((li, idx) => {
          slide.addText(li, {
            x: 0.5,
            y: 2 + idx * 0.1,
            w: "90%",
            h: 2.5,
            fontSize: 18,
            bullet: true,
            color: "666666",
            valign: "top",
          });
        });
      }
    });

    ppt.writeFile({
      fileName: `${topic
        .replace(/[^a-z0-9]/gi, "-")
        .toLowerCase()}-slides.pptx`,
    });
  };

  if (!slides.length) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-gray-500">No slides to display</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <div className="relative h-[80vh] overflow-x-auto ">
        <div className="flex gap-5 px-5 py-10 snap-x snap-mandatory scrollbar-hide">
          {slides.map((item, index) => (
            <div
              key={index}
              className="min-w-[80vw] h-[60vh] snap-center bg-white rounded-lg shadow-lg p-8 flex flex-col"
            >
              {item.title && (
                <h1 className="text-4xl font-bold text-[#363636] mb-6">
                  {item.title}
                </h1>
              )}
              {item.description && (
                <p className="text-xl text-[#666666] mb-6">
                  {item.description}
                </p>
              )}
              {item.list && item.list?.length > 0 && (
                <ul className="list-disc pl-6 text-[#666666] space-y-2">
                  {item.list.map((listItem, idx) => (
                    <li key={`${index}-${idx}`} className="text-lg">
                      {listItem}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 px-5">
        <Button onClick={createSlides} className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download Presentation
        </Button>
      </div>
    </div>
  );
}

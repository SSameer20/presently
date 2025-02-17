import React from "react";
import axios from "axios";
import Presentation from "@/components/Presentation";

interface ResponseData {
  message?: string;
  data?: {
    slides?: [
      {
        title?: string;
        description?: string;
        list?: [string];
      }
    ];
  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: { topic?: string | undefined };
}) {
  const { topic } = await searchParams;
  const response = await axios.post("http://localhost:3000/api/v1/generate", {
    topic,
  });
  const data: ResponseData = response.data;
  const slides = data.data?.slides;

  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-[90vw] mx-auto">
        <h2 className="text-3xl font-bold text-gray-400">
          {topic ? `Slides: ${topic}` : "Generated Slides"}
        </h2>
        <Presentation topic={topic} slides={slides} />
      </div>
    </div>
  );
}

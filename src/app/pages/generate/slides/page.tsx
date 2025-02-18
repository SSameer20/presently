import axios from "axios";
import Presentation from "@/components/Presentation";
import { GenerateResponseData } from "@/lib/types";
interface Props {
  searchParams?: Promise<{ topic?: string }> | undefined; // make searchParams a Promise
}

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;
  const topic = params?.topic || "How AI Works";

  const response = await axios.post(
    "https://presently.sameer.digital/api/v1/generate",
    {
      topic,
    }
  );
  const data: GenerateResponseData = response.data;
  const slides = data.data?.slides || [];

  return (
    <div className="min-h-[60vh] p-8">
      <div className="max-w-[90vw] mx-auto">
        <h2 className="text-3xl font-bold text-gray-400">
          {`Generated Slides for: ${topic}`}
        </h2>
        <div className="flex gap-5 px-5 py-10 overflow-x-auto snap-x snap-mandatory">
          {slides.map((item, index) => (
            <div
              key={index}
              className="min-w-[80%] h-[70vh] snap-center bg-white rounded-lg shadow-lg p-8 flex flex-col"
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
              {item.list && item.list.length > 0 && (
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
        <Presentation topic={topic} slides={slides} />
      </div>
    </div>
  );
}

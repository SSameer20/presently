import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API = process.env.GEMINI_API_KEY || "";

export async function POST(req: NextRequest) {
  try {
    if (!API) {
      return NextResponse.json(
        { message: "API key is missing" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const topic = body?.topic?.trim();

    if (!topic) {
      return NextResponse.json(
        { message: "Topic is required" },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(API);

    const prompt = `
    Generate PowerPoint slide content in JSON format for the given topic.
     Each slide should have a title, a description, and an optional example (if relevant).
     ### Input
     Topic: "${topic}"
     ### Output Format:
     {
      "slides": 
      [
        { 
          "title": "Slide Title", 
          "description": "Slide Description", 
          "list": (optional) ["1. Any list data", "2. second line regarding topic", ... so on],
          "example": "(optional) Any example if required"
        }
      ]
    }
      Now, generate a similar JSON output for the topic: "${topic}".
       Ensure the JSON is properly formatted and does not include any code block markers.`;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const responseText = await result.response.text();

    // Remove potential code blocks
    const cleanedResponse = responseText.replace(/```json|```/g, "").trim();

    // Try parsing JSON
    let jsonData;
    try {
      jsonData = JSON.parse(cleanedResponse);
    } catch (parseError) {
      console.error("JSON Parsing Error:", parseError);
      return NextResponse.json(
        { message: "AI response is not valid JSON", rawResponse: responseText },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "success", data: jsonData });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Something went wrong",
      },
      { status: 500 }
    );
  }
}

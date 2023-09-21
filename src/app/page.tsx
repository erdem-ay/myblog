"use client";
import Editor from "@/components/editor/Editor";

import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState<string>("");

  const handleChange = (text: string) => {
    console.log(text);
  };
  return (
    <div>
      Erdem
    </div>
  );
}

import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [count,setCount] = useState(0);
  return (
    <div className="h-screen w-screen bg-orange-500 flex flex-col justify-center items-center relative">
      <div>
        <h1 className="text-5xl flex justify-center">Counter: </h1>
        <h1 className="text-5xl flex justify-center p-6" >{count}</h1>
      </div>
      <div className="flex  justify-center">
        <button className="border-2 p-2 m-2" onClick={() => setCount(count + 1)}>up</button>
        <button className="border-2 p-2 m-2" onClick={() => setCount(count - 1)}>down</button>
        <button className="border-2 p-2 m-2" onClick={() => setCount(0)}>reset</button>
      </div>
    </div>
  );
}

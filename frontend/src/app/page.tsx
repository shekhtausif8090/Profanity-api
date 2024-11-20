import CodeSection from "@/components/CodeSection";
import Demo from "@/components/Demo";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import localFont from "next/font/local";

const fontScary = localFont({
  src: "../assets/Scary.ttf",
});

export default function Home() {
  return (
    <div className="relative overflow-hidden pt-16">
      <div className="max-w-7xl py-8 px-6 w-full h-full mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          <div className="max-w-lg mx-auto w-full">
            <h1 className="text-7xl font-bold tracking-tighter ">
              <span
                className={cn("font-bold text-green-500", fontScary.className)}
              >
                P
              </span>
              rofanity
              <span
                className={cn("font-bold text-green-500", fontScary.className)}
              >
                API
              </span>
            </h1>
            <p className="text-lg text-center lg:text-left text-balance md:text-wrap mt-6">
              Detecting toxic content has always been{" "}
              <span
                className={cn("font-bold text-red-500", fontScary.className)}
              >
                slow
              </span>{" "}
              and{" "}
              <span
                className={cn("font-bold text-red-500", fontScary.className)}
              >
                expensive
              </span>
              . Not anymore. Introducing a fast, free and open-source profanity
              API for your web apps.
            </p>
            <div>
              <ul className="mt-8 space-y-2 font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-500" /> Much
                    faster and cheaper to run than AI
                  </li>
                  <li className="flex gap-1.5 items-center">
                    <Check className="h-5 w-5 shrink-0 text-green-500" /> Pretty
                    accurate
                  </li>
                  <li className="flex gap-1.5 items-center">
                    <Check className="h-5 w-5 shrink-0 text-green-500" /> 100%
                    free & open-source
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="max-w-lg mx-auto w-full ">
            <Demo />
          </div>
        </div>
        <div className="mt-24 flex justify-center items-center">
          <div className="flex flex-col">
            <h1 className="font-bold tracking-tight text-center">
              Make an API request
            </h1>
            <div className="size-4" />
            <CodeSection />
          </div>
        </div>
      </div>
    </div>
  );
}

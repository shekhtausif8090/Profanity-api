"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useMutation } from "@tanstack/react-query";
import { checkProfanity } from "@/actions";

const Demo = () => {
  const [message, setMessage] = React.useState<string>(
    "this is definitely not a swear word"
  );
  const { mutate, isPending, data, error } = useMutation({
    mutationKey: ["check-profanity", message],
    mutationFn: checkProfanity,
  });
  const successData = data && !("error" in data) ? data : undefined;

  return (
    <div className="flex flex-col bg-gray-900/5 p-4 rounded ring-1 ring-zinc-300">
      <div className="flex gap-x-6 items-baseline">
        <span className="flex bg-zinc-700 text-white rounded p-[2px_4px] select-none">
          POST
        </span>
        <p className="tracking-tight font-medium">
          profanity-api.shekhtausif3694.workers.dev
        </p>
      </div>
      <div className="flex gap-2 mt-8">
        <Input
          type="text"
          value={message}
          className="flex-4 bg-white"
          onChange={({ target }) => setMessage(target.value)}
        />
        <Button
          className="flex-2"
          onClick={() => mutate({ message })}
          disabled={isPending}
        >
          Profanity Check
        </Button>
      </div>
      <div className="mt-4  border-dotted border-2 border-zinc-300 rounded p-4 h-32 ">
        {successData ? (
          <div className="flex flex-col items-center text-center">
            <p className="font-bold">
              {successData.score > 0.95 ? (
                <span>
                  🚨🚨😱😱 OH GOD, VERY BIG PROFANITY DETECTED!! 🚨🚨😱😱{" "}
                </span>
              ) : successData.score > 0.9 ? (
                <span>🚨😱 BIG PROFANITY DETECTED!! 🚨😱 </span>
              ) : successData.score > 0.88 ? (
                <span>🚨 PROFANITY DETECTED!! 🚨 </span>
              ) : successData.score >= 0.85 ? (
                <span>😱 PRETTY SURE THIS IS A PROFANITY 😱</span>
              ) : successData.score < 0.85 ? (
                <span>Crispy clean input, no profanities : 👍👍</span>
              ) : (
                <p className="text-zinc-700">Results will be shown here</p>
              )}
            </p>
            <p className="text-sm text-zinc-700">
              score (higher is worse): {successData.score.toFixed(3)}
            </p>
          </div>
        ) : (
          <p className="text-zinc-700 grid place-content-center">
            Results will be shown here
          </p>
        )}
        {error ? (
          <p className="text-red-600 text-sm mt-2">
            <span className="font-semibold">Error:</span> {error.message}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Demo;

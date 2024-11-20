"use client";
import React from "react";
import Code from "./Code";

const codeBlock = `const res = await fetch('https://profanity-api.shekhtausif3694.workers.dev', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message }),
})`;

const CodeSection = () => {
  return (
    <div>
      <Code codeBlock={codeBlock} />
    </div>
  );
};

export default CodeSection;

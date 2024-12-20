"use client";

import { cn } from "@/lib/utils";
import { Highlight, themes } from "prism-react-renderer";

const Code = ({ codeBlock }: { codeBlock: string }) => {
  return (
    <Highlight theme={themes.vsDark} code={codeBlock} language="tsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style} className={cn(className, "w-fit p-8 rounded-md")}>
          {tokens.map((line, i) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { key, ...rest } = getLineProps({ line, key: i });
            return (
              <div key={i} style={{ position: "relative" }} {...rest}>
                <span className="text-zinc-500 select-none pr-8 ">{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;

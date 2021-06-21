import { MDXRemote } from "next-mdx-remote";
import React from "react";
import { Lesson } from "./components/lesson";
import { useStepsFromChildren } from "./mdx-to-steps";
import { presets } from "./presets/index";

export const components = {
  wrapper: Wrapper,
  StepHead: () => null,
};

export const LessonContext = React.createContext({ presetName: null });

function Wrapper({ children }) {
  const steps = useStepsFromChildren({ children });
  const { presetName } = React.useContext(LessonContext);

  const preset = presets[presetName];

  if (!preset) {
    return (
      <div>
        Error: Missing preset for <code>{presetName}</code>
      </div>
    );
  }
  return <Lesson steps={steps} preset={presets[presetName]} />;
}

export function LessonMDX({ source, presetName }) {
  return (
    <LessonContext.Provider value={{ presetName }}>
      <MDXRemote {...source} components={components} />
    </LessonContext.Provider>
  );
}
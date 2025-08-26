'use client';

import CodeConsole from '../codeConsole/codeConsole';
import { Editor } from '@monaco-editor/react';

type CodeRunnerProps = {
  content: string;
  width: string;
  editorHeight: number;
};

const LANGUAGE = 'java';

const THEME = 'vs-dark';

const CodeRunner: React.FC<CodeRunnerProps> = ({ content, width, editorHeight }) => {
  return (
    <div className={`w-${width}/100 h-auto flex flex-col mb-4 bg-stone-500`}>
      <Editor
        defaultValue={content}
        height={`${editorHeight}vh`}
        width='100%'
        options={{
          minimap: {
            enabled: false,
          },
          padding: {
            top: 8,
            bottom: 0,
          },
          lineNumbers: 'on',
          wordWrap: 'on',
          overviewRulerBorder: false,
        }}
        defaultLanguage={LANGUAGE}
        theme={THEME}
      />
      <CodeConsole />
    </div>
  );
};

export default CodeRunner;

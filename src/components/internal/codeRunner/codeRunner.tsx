'use client';

import { useState } from 'react';
import CodeConsole from '../codeConsole/codeConsole';
import { Editor } from '@monaco-editor/react';

type CodeRunnerProps = {
  content: string;
  editorHeight: number;
};

const LANGUAGE = 'java';

const THEME = 'vs-dark';

const CodeRunner: React.FC<CodeRunnerProps> = ({
  content,
  editorHeight,
}) => {
  const [code, setCode] = useState<string>(content);
  return (
    <div className={`w-[30%] h-auto flex flex-col bg-stone-500`}>
      <Editor
        value={code}
        onChange={(newValue) => setCode(newValue || '')}
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
      <CodeConsole code={code} />
    </div>
  );
};

export default CodeRunner;

'use client';

import CodeEditor from '../codeEditor/codeEditor';
import CodeConsole from '../codeConsole/codeConsole';

type CodeRunnerProps = {
  content: string;
  width: string;
  editorHeight: number;
};

const CodeRunner: React.FC<CodeRunnerProps> = ({ content, width, editorHeight }) => {
  return (
    <div className={`w-${width}/100 h-auto flex flex-col mb-4 bg-stone-500`}>
      <CodeEditor
        content={content}
        height={`${editorHeight}vh`}
        width='100%'
        minimap={false}
        readOnly={true}
      />
      <CodeConsole />
    </div>
  );
};

export default CodeRunner;

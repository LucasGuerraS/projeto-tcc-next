'use client';

import { Editor } from '@monaco-editor/react';

type CodeEditorProps = {
  content: string;
  height: string;
  width: string;
  minimap: boolean;
  readOnly: boolean;
};

const LANGUAGE = 'java';

const THEME = 'vs-dark';

const CodeEditor: React.FC<CodeEditorProps> = ({ content, height, width, minimap, readOnly }) => {
  return (
    <Editor
      height={height}
      width={width}
      options={{
        minimap: {
          enabled: minimap,
        },
        padding: {
          top: 0,
          bottom: 0
        },
        lineNumbers: 'on',
        readOnly: readOnly,
        wordWrap: 'on',
        overviewRulerBorder: false,
      }}
      defaultLanguage={LANGUAGE}
      defaultValue={content}
      theme={THEME}
    />
  );
};

export default CodeEditor;

'use client';

import { Editor } from '@monaco-editor/react';

type CodeEditorProps = {
  content: string;
  height?: string;
  width?: string;
};

const LANGUAGE = 'java';

const THEME = 'vs-dark';

const CodeEditor: React.FC<CodeEditorProps> = ({ content, height, width }) => {
  return (
    <Editor
      height={height ? height : '20vh'}
      width={width ? width : '30%'}
      defaultLanguage={LANGUAGE}
      defaultValue={content}
      theme={THEME}
    />
  );
};

export default CodeEditor;

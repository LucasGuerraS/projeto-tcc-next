'use client'

import { Editor } from '@monaco-editor/react';

type CodeEditorProps = {
    content: string;
    height: string | undefined;
    width: string | undefined;
};

const CodeEditor: React.FC<CodeEditorProps> = ({ content, height, width }) => {
  return (
    <Editor
      height={height}
      width={width}
      defaultLanguage='java'
      defaultValue={content}
      theme='vs-dark'
    />
  );
};

export default CodeEditor;
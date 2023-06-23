import React from 'react';
import MonacoEditor, {monaco} from 'react-monaco-editor';

interface Props {
  value: string;
  language?: string;
  height?: number;
  onChange?: (value: string) => void;
}

/**
 * 代码编辑器
 * @constructor
 * @author https://sonna.cn
 */
const CodeEditor: React.FC<Props> = (props) => {

  const { value, height = 480, language = 'sql', onChange } = props;
  const options = {
    selectOnLineNumbers: true,
    fontSize: 14,
    formatOnPaste: true,
    automaticLayout: true,
    minimap: {
      enabled: false,
    },
  };

  monaco.editor.defineTheme('myTheme', {
    base: 'vs',
    inherit: true,
    rules: [],
    colors: {
      'editor.foreground': '#000000',
      'editor.background': '#EDF9FA',
      'editorCursor.foreground': '#8B0000',
      'editor.lineHighlightBackground': '#0000FF20',
      'editorLineNumber.foreground': '#008800',
      'editor.selectionBackground': '#88000030',
      'editor.inactiveSelectionBackground': '#88000015'
    }
  })

  return (
    <MonacoEditor
      height={height}
      language={language}
      theme="myTheme"
      value={value}
      options={options}
      onChange={onChange}
    />
  );
};

export default CodeEditor;

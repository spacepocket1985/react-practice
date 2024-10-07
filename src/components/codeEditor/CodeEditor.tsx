import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const defaultSettings = {
  highlightActiveLine: true,
  autocompletion: true,
  foldGutter: true,
  dropCursor: true,
  allowMultipleSelections: true,
  indentOnInput: true,
  bracketMatching: true,
  closeBrackets: true,
  lintKeymap: true,
};

export const CodeEditor: React.FC<{ code: string }> = ({ code }) => (
  <CodeMirror
    style={{
      textAlign: 'start',
      whiteSpace: 'pre-wrap',
      wordBreak: 'normal',
      wordWrap: 'break-word',
      marginBottom: '10px',
    }}
    value={code}
    extensions={[EditorView.lineWrapping, javascript()]}
    basicSetup={defaultSettings}
    width="auto"
    minHeight="5rem"
    readOnly
  />
);

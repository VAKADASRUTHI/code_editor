import React, { useState } from 'react';
import styled from 'styled-components';
import { Highlight, themes } from 'prism-react-renderer';

const Container = styled.div`
  position: relative;
  font-family: 'Source Code Pro', monospace;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  background: none;
  border: none;
  color: transparent;
  caret-color: black;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  resize: none;
  font-size: 16px;
  outline: none;
`;

const Code = styled.pre`
  width: 100%;
  height: 300px;
  margin: 0;
  padding: 10px;
  overflow: auto;
  background: ${themes.github.plain.backgroundColor};
  color: ${themes.github.plain.color};
  font-size: 16px;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <Container>
      <TextArea
        value={code}
        onChange={handleChange}
        spellCheck="false"
      />
      <Highlight theme={themes.github} code={code} language="javascript">
        {({ tokens, getLineProps, getTokenProps }) => (
          <Code>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Code>
        )}
      </Highlight>
    </Container>
  );
};

export default CodeEditor;
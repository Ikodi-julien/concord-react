import React, {useEffect, useRef} from 'react';
import { quillRegister } from './quill-emoji/src/quill-emoji.js';

import 'quill/dist/quill.snow.css'; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme
import "./quill-emoji/dist/quill-emoji.css";
import './editor.scss';

const Editor = ({quill, setQuillText}) => {

  const toolbarOptions = {
    container: [],
    handlers: {
      emoji: function () {},
    },
  };
  
  const editor = useRef('editor');
  
  useEffect(() => {
    
      quillRegister();
      quill = new Quill(editor.current, {
        modules: {
          toolbar: false,
          'emoji-toolbar': true,
          'emoji-textarea': true,
          'emoji-shortname': true,
        },
        placeholder: 'Kessessé ?...',
        theme: 'snow',
      });
      
      quill.on('text-change', () => {
        const text = quill.getText();
        setQuillText(text);
      });
      
  }, [quill]);

  return (
    <div className='editor'>
      <div ref={editor}/>
    </div>
  );
};

export default Editor;

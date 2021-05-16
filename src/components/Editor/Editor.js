import React, {useEffect, useRef} from 'react';
import { quillRegister } from './quill-emoji/src/quill-emoji.js';

import 'quill/dist/quill.snow.css'; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme
import "src/vendor/quill-emoji/dist/quill-emoji.css";

export default () => {

  const toolbarOptions = {
    container: [],
    handlers: {
      emoji: function () {},
    },
  };
  
  const editor = useRef('editor');
  
  useEffect(() => {
    
      quillRegister();
      const quill = new Quill(editor.current, {
        modules: {
          toolbar: toolbarOptions,
          'emoji-toolbar': true,
          'emoji-textarea': true,
          'emoji-shortname': true,
        },
        placeholder: 'Kessessé ?...',
        theme: 'snow',
      });

  }, []);

  return (
    <div style={{ width: 500, height: 100 }}>
      <div ref={editor}/>
    </div>
  );
};

import React, {useEffect, useRef} from 'react';
import { quillRegister } from './quill-emoji/src/quill-emoji.js';

import 'quill/dist/quill.snow.css'; // Add css for snow theme
import "src/components/Editor/quill-emoji/src/scss/quill-emoji.scss";
import './editor.scss';

const Editor = (
  {
    quill, 
    setQuillContent, 
    quillContent, 
    reinitQuill,
    channelFormSubmit,
  }
) => {

  const editor = useRef('editor');
  const bindings = {
    custom: {
      key: 13,
      handler: () => channelFormSubmit()
    }
  }
  useEffect(() => {
    
      if (!quill || reinitQuill) {
        console.log('quill');
        quillRegister();
        quill = new Quill(editor.current, {
          modules: {
            toolbar: false,
            keyboard: {bindings},
            'emoji-toolbar': false,
            'emoji-textarea': true,
            'emoji-shortname': true,
          },
          placeholder: 'Kessessé ?...',
          theme: 'snow',
        });
        
        quill.setText('');
        quill.on('text-change', () => {
          const text = quill.getContents();
          setQuillContent(text);
        });
      }
      
  }, [reinitQuill]);

  return (
    <div className='editor'>
      <div ref={editor}/>
    </div>
  );
};

export default Editor;

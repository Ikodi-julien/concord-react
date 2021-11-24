import React, {useEffect, useRef} from 'react';
import { quillRegister } from './quill-emoji/src/quill-emoji.js';

import 'quill/dist/quill.snow.css'; // Add css for snow theme
import "src/components/Editor/quill-emoji/src/scss/quill-emoji.scss";
import './editor.scss';

export default (
  {
    quill, 
    setQuillContent, 
    reinitQuill,
    channelFormSubmit,
    windowSize,
  }
) => {

  const editor = useRef('editor'); // the div that will contain the editor
  const bindings = { // option for editor, bind key 'Enter' to submit form
    custom: {
      key: 13,
      handler: ({index}) => {
        if (index === 0) return;
        channelFormSubmit()
      }
    }
  }
  
  const toolbarOptions = windowSize < 770 ? false : {
    container: [
      ['bold', 'italic', 'underline', 'strike', 'code-block'],
      [{ color: [] }, { background: [] }],
    ],
    handlers: {
      emoji: function () {},
    },
  };
  
  useEffect(() => {
    if (!quill || reinitQuill) {
      if (document.querySelector('.editor .ql-toolbar')) {
        document.querySelector('.editor .ql-toolbar').remove()
      }
      quillRegister(); // registers Quill modules
      quill = new Quill(editor.current, {
        modules: {
          toolbar: toolbarOptions, // no toolbar for the editor
          keyboard: {bindings},
          'emoji-toolbar': false,
          'emoji-textarea': true,
          'emoji-shortname': true, // doesn't work with french keyboard
        },
        placeholder: 'Kessessé ?...',
        theme: 'snow',
      });
      
      quill.setText('');
      quill.focus();
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

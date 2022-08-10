import React, { useRef } from 'react';
import { useFocusTrap } from '@mantine/hooks';

import { Editor } from '@tinymce/tinymce-react';

const Journal = () => {

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    // FIXME: Editor does not get auto focused on tab change
    <div>
      <Editor
        apiKey='7zzchgz8yn4529j9xg3vsh1vkllbovqdoa7j29tqttzhaiyx'
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue='<p>This is the initial content of the editor.</p>'
        init={{
          height: 500,
          menubar: false,
          toolbar:
            'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          toolbar_mode: 'floating',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
      <button onClick={log}>Log editor content</button>
    </div>
  );
};

export default Journal;

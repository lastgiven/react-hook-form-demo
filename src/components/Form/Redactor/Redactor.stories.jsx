import React, { useState } from 'react';

import { EditorState } from 'draft-js';
import RedactorComp from './Redactor.component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Portal/Components/Form/Redactor',
  parameters: {
    docs: {
      description: {
        component: `
#Usage
\`\`\`js
import Redactor from './components/Redactor.component';
return (<Redactor {...props} />)
  \`\`\`
        `,
      },
    },
    viewMode: 'docs',
  },
  component: RedactorComp,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template = (args) => {
  const editorState = EditorState.createEmpty();
  const [richEditor, setRichEditor] = useState(editorState);

  return <RedactorComp {...args} value={richEditor} onChange={setRichEditor} />;
};

export const Redactor = Template.bind({});
Redactor.args = {
  placeholder: 'Type your reply here...',
  fullScreen: false,
  onChange: () => {},
};

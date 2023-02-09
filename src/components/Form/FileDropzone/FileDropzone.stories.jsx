import React from 'react';

import FileDropzoneComp from './FileDropzone';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Portal/Components/Form/FileDropzone',
  parameters: {
    docs: {
      description: {
        component: `
#Usage
\`\`\`js
import FileDropzone from './components/FileDropzone.component';
return (<FileDropzone {...props} />)
  \`\`\`
        `,
      },
    },
    viewMode: 'docs',
  },
  component: FileDropzoneComp,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template = (args) => <FileDropzoneComp {...args} />;

export const FileDropzone = Template.bind({});
FileDropzone.args = {
  label: 'File Upload Label',
};

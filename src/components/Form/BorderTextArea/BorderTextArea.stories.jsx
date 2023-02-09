import React from 'react';

import BorderTextAreaComp from './BorderTextArea.component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Portal/Components/Form/BorderTextArea',
  parameters: {
    docs: {
      description: {
        component: `
#Usage
\`\`\`js
import BorderTextArea from './components/BorderTextArea.component';
return (<BorderTextArea {...props} />)
  \`\`\`
        `,
      },
    },
    viewMode: 'docs',
  },
  component: BorderTextAreaComp,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template = (args) => <BorderTextAreaComp {...args} />;

export const BorderTextArea = Template.bind({});
BorderTextArea.args = {
  label: 'Text Area Label',
  name: 'v1',
};

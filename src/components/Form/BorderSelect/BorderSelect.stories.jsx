import React from 'react';

import BorderSelectComp from './BorderSelect.component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Portal/Components/Form/BorderSelect',
  parameters: {
    docs: {
      description: {
        component: `
#Usage
\`\`\`js
import BorderSelect from './components/BorderSelect.component';
return (<BorderSelect {...props} />)
  \`\`\`
        `,
      },
    },
    viewMode: 'docs',
  },
  component: BorderSelectComp,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template = (args) => <BorderSelectComp {...args} />;

export const BorderSelect = Template.bind({});
BorderSelect.args = {
  header: 'Some Options',
  name: 'v1',
  label: 'Select',
  options: [
    { text: 'Option 1', value: '1' },
    { text: 'Option 2', value: '2' },
  ],
};

import React from 'react';

import LineInputComp from './LineInput.component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Portal/Components/Form/LineInput',
  parameters: {
    docs: {
      description: {
        component: `
#Usage
\`\`\`js
import LineInput from './components/LineInput.component';
return (<LineInput {...props} />)
  \`\`\`
        `,
      },
    },
    viewMode: 'docs',
  },
  component: LineInputComp,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template = (args) => <LineInputComp {...args} />;

export const LineInput = Template.bind({});
LineInput.args = {
  label: 'Line Input Label',
  name: 'lInput',
};

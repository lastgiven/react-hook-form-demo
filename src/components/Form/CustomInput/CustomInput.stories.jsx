import React from 'react';

import CustomInputComp from './CustomInput.component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Portal/Components/Form/CustomInput',
  parameters: {
    docs: {
      description: {
        component: `
#Usage
\`\`\`js
import CustomInput from './components/CustomInput.component';
return (<CustomInput {...props} />)
  \`\`\`
        `,
      },
    },
    viewMode: 'docs',
  },
  component: CustomInputComp,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template = (args) => <CustomInputComp {...args} />;

export const CustomInput = Template.bind({});
CustomInput.args = {
  label: 'Custom Input Label',
  name: 'v1',
};

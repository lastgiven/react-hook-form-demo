import React from 'react';

import CheckBoxComp from './CheckBox.component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Portal/Components/Form/CheckBox',
  parameters: {
    docs: {
      description: {
        component: `
#Usage
\`\`\`js
import CheckBox from './components/CheckBox.component';
return (<CheckBox {...props} />)
  \`\`\`
        `,
      },
    },
    viewMode: 'docs',
  },
  component: CheckBoxComp,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template = (args) => <CheckBoxComp {...args} />;

export const CheckBox = Template.bind({});
CheckBox.args = {
  label: 'Checkbox Label',
  name: 'v1',
};

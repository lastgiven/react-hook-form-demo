import React from 'react';
import ToggleSwitchComp from './ToggleSwitch.component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Portal/Components/Form/ToggleSwitch',
  parameters: {
    docs: {
      description: {
        component: `
#Usage
\`\`\`js
import ToggleSwitch from './components/ToggleSwitch.component';
return (<ToggleSwitch {...props} />)
  \`\`\`
        `,
      },
    },
    viewMode: 'docs',
  },
  component: ToggleSwitchComp,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template = (args) => <ToggleSwitchComp {...args} />;

export const ToggleSwitch = Template.bind({});

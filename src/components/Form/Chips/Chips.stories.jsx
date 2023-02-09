import React from 'react';

import { FaAndroid } from 'react-icons/fa';
import ChipsComp from './Chips.component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Portal/Components/Form/Chips',
  parameters: {
    docs: {
      description: {
        component: `
#Usage
\`\`\`js
import Chips from './components/Chips.component';
return (<Chips {...props} />)
  \`\`\`
        `,
      },
    },
    viewMode: 'docs',
  },
  component: ChipsComp,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template = (args) => <ChipsComp {...args} />;

export const Chips = Template.bind({});
Chips.args = {
  label: 'Chips Label',
  icon: <FaAndroid size={20} />,
};

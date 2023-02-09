import React from 'react';

import { useForm } from 'react-hook-form';
import SelectCreatableComp from './SelectCreatable.component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Portal/Components/Form/SelectCreatable',
  parameters: {
    docs: {
      description: {
        component: `
#Usage
\`\`\`js
import SelectCreatable from './components/SelectCreatable.component';
return (<SelectCreatable {...props} />)
  \`\`\`
        `,
      },
    },
    viewMode: 'docs',
  },
  component: SelectCreatableComp,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template = (args) => {
  const { control } = useForm();
  return <SelectCreatableComp {...args} control={control} />;
};

export const SelectCreatable = Template.bind({});
SelectCreatable.args = {
  placeholder: 'Type your reply here...',
  name: 'sel',
};

import React from 'react';

import { useForm } from 'react-hook-form';
import SelectSearchComp from './SelectSearch.component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Portal/Components/Form/SelectSearch',
  parameters: {
    docs: {
      description: {
        component: `
#Usage
\`\`\`js
import SelectSearch from './components/SelectSearch.component';
return (<SelectSearch {...props} />)
  \`\`\`
        `,
      },
    },
    viewMode: 'docs',
  },
  component: SelectSearchComp,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template = (args) => {
  const { control } = useForm();
  return <SelectSearchComp {...args} control={control} />;
};

export const SelectSearch = Template.bind({});
SelectSearch.args = {
  placeholder: 'Select Options',
  children: 'one',
  name: 'selectSearch',
  options: [
    { label: 'Test', value: 'test' },
    { label: 'Another option', value: 'anotherOption' },
  ],
};

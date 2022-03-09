import React from 'react';

import ProfilePage from './ProfilePage';

export default {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <ProfilePage {...args} />;

export const Default = Template.bind({});

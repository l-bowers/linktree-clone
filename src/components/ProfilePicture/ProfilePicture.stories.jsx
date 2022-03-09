import React from 'react';
import picture from '../../assets/profile-picture.png';

import ProfilePicture from './ProfilePicture';

export default {
  title: 'Components/ProfilePicture',
  component: ProfilePicture,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => (
  <div>
    <ProfilePicture {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  pictureUrl: picture,
};

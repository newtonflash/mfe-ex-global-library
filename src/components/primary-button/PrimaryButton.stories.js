// PrimaryButton.stories.js

import React from 'react';

import PrimaryButton from './PrimaryButton';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

export const Primary = () => <PrimaryButton>Login Button</PrimaryButton>;
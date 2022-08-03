import Button from "../components/Button"

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <Button {...args} />

export const Yellow = Template.bind({})
Yellow.args = {
  backgroundColor: '#D69E3D',
  label: "Login",
  size: "md",
}

export const Purple = Template.bind({})
Purple.args = {
  backgroundColor: '#6513AA',
  label: "Subscribe",
  size: "md",
}

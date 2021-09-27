import { ThemeProvider, useTheme } from '@emotion/react';

import { ButtonMain } from './styles'
import Props from './Button.props';


const theme = {
  colors: {
    primary: "darkorange",
    positive: "royalblue",
    negative: "red"
  }
};

export const Button = ({
  children,
  className,
  href,
  onClick,
  type = 'button',
  isLoading,
  disabled,
  ...props
}: Props) => {

  return (
    <ThemeProvider theme={theme}>
      <ButtonMain onClick={onClick}>{children}</ButtonMain>
    </ThemeProvider >
  )
};

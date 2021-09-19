import { AnchorHTMLAttributes } from 'react';

import { COLORS } from '@Constants/enums';

export default interface ButtonProps extends AnchorHTMLAttributes<any> {
  className?: string;
  color?: COLORS;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  children?: any;
  type?: 'button' | 'submit';
  isLoading?: boolean;
  disabled?: boolean;
}

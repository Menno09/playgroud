import { AnchorHTMLAttributes } from 'react';

export default interface ButtonProps extends AnchorHTMLAttributes<any> {
  className?: string;
  icon?: string
  iconPostion?: 'left' | 'right';
  href?: string;
  children?: any;
  type?: 'button' | 'submit';
  isLoading?: boolean;
  disabled?: boolean;

  onClick?: () => void;
}

import cn from 'classnames';
import { useFormContext } from 'react-hook-form';

// import styles from './Button.module.scss';
import Props from './Button.props';

export const Button = ({
  children,
  className,
  color = "blue",
  href,
  onClick,
  type = 'button',
  isLoading,
  disabled,
  ...props
}: Props) => {
  const formContext = useFormContext();

  const isLoadingOrSubmitting =
    (type === 'submit' && formContext?.formState.isSubmitting) || isLoading;

  // const classNames = cn(styles.Button, className, 'btn', styles[`Button--${color}`]);

  return href ? (
    <a href={href}{...props}>
      {children}
    </a >
  ) : (
    <button disabled={disabled} type={type} onClick={onClick} {...props}>
      <div>
        {children}
      </div>
      {isLoadingOrSubmitting && (
        <p>loading......</p>
      )}
    </button>
  );
};


import cn from 'classnames';

// import styles from './Button.module.scss';
export interface DropDownProps {
    style?: string;
    children: any
}

export const DropDown = ({ children, style }: DropDownProps) => {
    return (
        <div>
            {children}
        </div>
    )
}

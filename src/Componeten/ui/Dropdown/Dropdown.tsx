
import cn from 'classnames';
import styles from './Dropdown.module.scss'


// import styles from './Button.module.scss';
export interface DropDownProps {
    style?: string;
    children: any
}

export const DropDown = ({ children, style }: DropDownProps) => {
    return (
        <div className={styles.Dropdown}>
            {children}
        </div>
    )
}

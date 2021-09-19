import { AnchorHTMLAttributes } from "react";

export default interface CheckboxProps extends AnchorHTMLAttributes<any> {
    id: string
    name: string
    hasChild: boolean
    disabled?: boolean
    checked?: boolean
    isloading?: boolean
    onChange?: () => void
}

import React from "react";
import Props from './Checkbox.props'

export const Checkbox = ({
    id,
    name,
    hasChild,
    disabled,
    checked,
    isloading,
    onChange,
}: Props) => {
    return (
        <div>
            <label>
                {name}
            </label>
            <input type="checkbox" name="name" onChange={onChange} />
        </div>
    )
}

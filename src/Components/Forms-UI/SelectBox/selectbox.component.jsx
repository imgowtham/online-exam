import React from 'react';
import {TextField, MenuItem} from '@material-ui/core';
import {useField, useFormikContext} from 'formik';

const SelectWrapper = ({
    name,
    options,
    ...otherProps
}) => {
    const {setFieldValue} = useFormikContext();
    const [field,
        meta] = useField(name);

    const handleChange = evt => {
        const {value} = evt.target;
        setFieldValue(name, value);
    };

    const configSelect = {
        ...field,
        ...otherProps,
        select: true,
        fullWidth: true,
        onChange: handleChange
    };

    if (meta && meta.error) {
        configSelect.error = true;
        configSelect.helperText = meta.error;
    }

    return (
        <TextField {...configSelect}>
            {options.map((item, pos) => {
                return (
                    <MenuItem key={pos} value={item.id}>
                        {item.name}
                    </MenuItem>
                )
            })}
        </TextField>
    );
};

export default SelectWrapper;
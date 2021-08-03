import 'date-fns';
import React from 'react';
import {useField, useFormikContext} from 'formik';
import {KeyboardDatePicker} from '@material-ui/pickers';
//import { KeyboardDatePicker } from 'formik-material-ui-pickers';

const DateTimePicker = ({
    name,
    ...otherProps
}) => {

    const [field,
        meta] = useField(name);

    const {setFieldValue} = useFormikContext();

    const handleChange = value => {
        setFieldValue(name, value);
    };
    const configDatePicker = {
        ...field,
        ...otherProps,
        format: "dd/MM/yyyy",
        fullWidth: true,
        autoOk: true,
        onChange: handleChange
    };

    if (meta && meta.error) {
        configDatePicker.error = true;
        configDatePicker.helperText = meta.error;
    }

    return (<KeyboardDatePicker {...configDatePicker}/>);
};

export default DateTimePicker;

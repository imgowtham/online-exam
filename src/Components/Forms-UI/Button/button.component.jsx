import React from 'react';
import {Button} from '@material-ui/core';
import {useFormikContext} from 'formik';
import './button.style.css';
const ButtonWrapper = ({
    children,
    customclick,
    ...otherProps
}) => {

    const formik = useFormikContext();

    const handleSubmit = () => {
        formik.submitForm();
    }

    const configButton = {
        ...otherProps,
        variant: 'contained',
        fullWidth: true,
        onClick: customclick || handleSubmit
    }

    return (
        <Button {...configButton}>
            {children}
        </Button>
    );
};

export default ButtonWrapper;

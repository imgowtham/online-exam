import * as Yup from 'yup';
import {makeStyles} from '@material-ui/core';

export const InitialFormState = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    batch: '',
    is_active: true
}

export const csvData = `username,email,first_name,last_name
Jorge Harrison,de@rapo.pe,Fanny,Rivera`;

export const FormValidation = Yup
    .object()
    .shape({
        first_name: Yup
            .string()
            .required('Required'),
        last_name: Yup
            .string()
            .required('Required'),
        email: Yup
            .string()
            .nullable()
            .email('Invalid Email!'),
        batch: Yup.string().required('Required'),
        is_active: Yup
            .boolean()
    });

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    wrapper: {
        padding: theme.spacing(3),
        flexGrow: 1,
        marginTop: theme.spacing(1)
    },
    input: {
        display: 'none'
    },
    upload: {
        minHeight: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

export const StudentGridColumns = [
    {
        title: 'Username',
        field: 'username'
    }, {
        title: 'First Name',
        field: 'first_name'
    }, {
        title: 'Last Name',
        field: 'last_name'
    }, {
        title: 'Email',
        field: 'email'
    }, {
        title: 'Institution',
        field: 'institution'
    }, {
        title: 'Department',
        field: 'department'
    }, {
        title: 'Year',
        field: 'year'
    }
]
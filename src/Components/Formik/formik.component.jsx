import React from 'react';
import { TextField,Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
// import * as yup from 'yup';
const useStyles = makeStyles((theme) => ({
    textbox: {
        padding: theme.spacing(1)
    },
    formControl: {
        minWidth: 120,
    },
    input: {
        display: 'none',
    },
    upload: {
        minHeight: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

const FormikField = (props) => {
    const classes = useStyles();
    let fieldValue = {};
    props.fields.map(value => fieldValue[value.name] = "");
    
    const fieldConstruction = (field) => {
        switch (true) {
            case field.type === "text":
                let textName = field.name;
                return (
                    <Grid item xs={12}>
                        <TextField placeholder={field.placeholder} InputLabelProps={{ shrink: true, }} size="small"
                            id={textName}
                            name={textName}
                            label={textName}
                            value={formik.values.textName}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            fullWidth />
                    </Grid>
                );
            case field.type === "checkbox":
                let checkboxName = field.name;
                return (
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox onChange={formik.handleChange} name={checkboxName} color="primary" size="small" />}
                            label={checkboxName} 
                        />
                    </Grid>
                );
            case field.type === "dropdown":
                let dropdownName = field.name;
                return (
                    <Grid item xs={12}>
                        <FormControl className={classes.formControl} size="small" fullWidth>
                            <InputLabel shrink id="demo-simple-select-label">Batch</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name={dropdownName}
                                value={formik.values.dropdownName}
                                onChange={formik.handleChange}
                                placeholder={field.placeholder}
                                defaultValue=""
                                MenuProps={{
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "left"
                                    },
                                    transformOrigin: {
                                        vertical: "top",
                                        horizontal: "left"
                                    },
                                    getContentAnchorEl: null
                                }}
                            >
                                <MenuItem value={10}>Batch</MenuItem>
                                <MenuItem value={20}>Batch1</MenuItem>
                                <MenuItem value={30}>Batch2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                );
            default:
                return null;
        }
    }
    // const validationSchema = yup.object({
    //     email: yup
    //       .string('Enter your password')
    //       .min(8, 'Password should be of minimum 8 characters length')
    //       .required('Password is required'),
    //   });
    const formik = useFormik({
        initialValues: fieldValue,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Grid container item xs={12} spacing={3}>
                    {props.fields?.map(field => fieldConstruction(field))}
                </Grid>
                
                <Button color="primary" size="small" variant="contained" type="submit">
                    Save
                </Button>
            </form>
        </div>
    );
}

export default FormikField;
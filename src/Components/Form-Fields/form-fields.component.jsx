import React from 'react';
import { Grid } from '@material-ui/core';
import { TextField, Button, Typography, TextareaAutosize} from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from "@material-ui/core/IconButton";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './form-fields.style.css';
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
const FormFields = (props) => {
    console.log("form component");
    // debugger;
    const classes = useStyles();
    // const [batch, setBatch] = React.useState(10);
    const [data, setData] = React.useState(props.values);
    const [error, setError] = React.useState({});
    
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const handleValidate = () => {
        let errors = {};
        let formIsValid = true;
        if (!data["FirstName*"]) {
            formIsValid = false;
            errors["FirstName*"] = "FirstName is Required*"
        }
        if (!data["LastName*"]) {
            formIsValid = false;
            errors["LastName*"] = "LastName is Required*"
        }
        setError(errors);

        return formIsValid;

    }
    const handleSubmit = (e) => {
        handleValidate();
    }
    const fieldConstruction = (field) => {
        const fieldName = field.name;
        let fieldValue = fieldName?.toLowerCase();
        // debugger;
        switch (true) {
            case field.type === "text":
                
                return (
                    <Grid item xs={12}>
                        <TextField label={fieldName} placeholder={field.placeholder} InputLabelProps={{ shrink: true, }}
                            size="small" name={fieldName} value={data[fieldValue] ? data[fieldValue] : ""} disabled={data[fieldValue] && fieldName === "Username" ? true : false}
                            onChange={handleChange} key={"textbox"} fullWidth />
                        <span className="errorMessage">{error[fieldName]}</span>
                    </Grid>
                );
            case field.type === "upload":

                return (
                    <Grid item xs={12}>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="icon-button-file"
                            type="file"
                        />
                        <label htmlFor="icon-button-file" key={"upload"}>
                            <IconButton
                                color="primary"
                                aria-label="upload"
                                component="span"
                            >
                                <CloudUploadIcon />

                            </IconButton>
                            <div>
                                <Typography variant="h6" color="primary">
                                    Upload CSV File
                                </Typography>
                            </div>
                        </label>
                    </Grid>
                );
            case field.type === "checkbox":

                return (
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox onChange={handleChange} name={fieldName} color="primary" size="small" />}
                            label={fieldName} key={"checkbox"}
                        />
                    </Grid>
                );
            case field.type === "textarea":

                return (
                    <Grid item xs={12}>
                        <TextareaAutosize aria-label={fieldName} rowsMin={3} key={"textarea"} placeholder={field.placeholder} />
                    </Grid>
                );


            case field.type === "dropdown":
                return (
                    <Grid item xs={12}>
                        <FormControl className={classes.formControl} size="small" fullWidth>
                            <InputLabel shrink id="demo-simple-select-label">{fieldName}</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name={fieldName}
                                value={data.fieldName}
                                onChange={handleChange}
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
                                <MenuItem key={"Batch"} value={"Batch"}>Batch</MenuItem>
                                <MenuItem key={"Batch1"}value={"Batch1"}>Batch1</MenuItem>
                                <MenuItem key={"Batch2"} value={"Batch2"}>Batch2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                );
            default:
                return null;
        }
    }
    React.useEffect(()=> {
        
        setData(props.values);
    },[props.values]) 

    return (
        <div className="form-fields">
            <Grid container item xs={12} spacing={3}>
                {props.fields?.map(field => fieldConstruction(field))}
            </Grid>
            <Button color="primary" size="small" variant="contained" type="submit" onClick={(e) => handleSubmit(e)}>
                Save
            </Button>
        </div>
    );
}

export default FormFields;
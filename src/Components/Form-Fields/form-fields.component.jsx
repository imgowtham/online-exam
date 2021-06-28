import React from 'react';
import { Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
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
    const classes = useStyles();
    const [batch, setBatch] = React.useState(10);

    const fieldConstruction = (field) => {
        switch (true) {
            case field.type === "text":
                return (
                    <Grid item xs={12}>
                        <TextField label={field.name} placeholder={field.placeholder} InputLabelProps={{ shrink: true, }}
                             size="small" fullWidth />
                    </Grid>
                );
            case field.type === "dropdown":
                return (
                    <Grid item xs={12}>
                        <FormControl className={classes.formControl} size="small" fullWidth>
                            <InputLabel shrink id="demo-simple-select-label">Batch</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={batch}
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
    const handleChange = (event) => {
        setBatch(event.target.value);
    };
    return (
        <Grid container item xs={12} spacing={3}>
            {props.fields?.map(field => fieldConstruction(field))}
        </Grid>
    );
}

export default FormFields;
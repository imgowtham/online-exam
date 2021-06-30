import React from 'react';
import Gridtable from '../../Components/Table/table.component';
import { Grid, Paper, Typography } from '@material-ui/core';
import { getData } from '../../service';
import * as Constant from '../../constant';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../../Components/Button/button.component';
// import FormField from '../../Components/Form-Fields/form-fields.component';
import IconButton from "@material-ui/core/IconButton";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Formik from '../../Components/Formik/formik.component';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    wrapper: {
        padding: theme.spacing(3),
        flexGrow: 1,
        marginTop: theme.spacing(1)
    },
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
const Students = () => {
    const classes = useStyles();
    const [users, setUsers] = React.useState('');
    const [,setFeildValue] = React.useState([{}]);
    const myRef = React.useRef(null)

    const handleRowClick = (rowData) => {
        myRef.current.scrollIntoView();
        setFeildValue(rowData);
        

    } 
React.useEffect(() => {
        let url = `http://127.0.0.1:8000/staff/getStudentList/`
        getData(url).then(response => response && setUsers(response
            ?.users_list))
    }, [])
    return (
        <div className={classes.root}>
            
            {users
                ? <Gridtable
                    griddata={users}
                    gridtitle={'Student List'}
                    gridcolumns={Constant.STUDENT_GRIDCOLUMNS}
                    handleRowClick={handleRowClick} />
                : null}
            <Grid container spacing={3} ref={myRef}>
                <Grid container item xs={12} sm={12} md={6}>
                    <Paper className={classes.wrapper}>
                        <Grid>
                            <Typography variant="h6" color="primary" gutterBottom>
                                Add Students
                            </Typography>
                        </Grid>
                        <Grid>
                            <Button color='secondary' label='View Students' />
                        </Grid>
                        <Formik fields={Constant.STUDENT_ADDSTUDENT}/>
                        {/* <FormField fields={Constant.STUDENT_ADDSTUDENT} /> */}
                        
                    </Paper>
                </Grid>
                <Grid container item xs={12} sm={12} md={6} style={{ display: "flow-root" }}>
                    <Paper className={classes.wrapper}>
                        <Grid>
                            <Typography variant="h6" color="primary" gutterBottom>
                                Student CSV File
                            </Typography>
                        </Grid>
                        <Grid>
                        </Grid>

                        <Grid className={classes.upload}>
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="icon-button-file"
                                type="file"
                            />
                            <label htmlFor="icon-button-file">
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
                        <Grid>
                            <Button label="Submit" color="primary" />
                            <Button label="Sample Download" color="secondary" />
                        </Grid>

                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Students

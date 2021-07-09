import React from 'react';
import Gridtable from '../../Components/Table/table.component';
import { Grid, Paper, Typography,Grow } from '@material-ui/core';
import { getData } from '../../service';
import * as Constant from '../../constant';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../../Components/Button/button.component';
import FormField from '../../Components/Form-Fields/form-fields.component';
// import Formik from '../../Components/Formik/formik.component';
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
    console.log("student component");
    const classes = useStyles();
    const [users, setUsers] = React.useState('');
    const [add,setAdd] = React.useState(false);
    const [fieldValue,setFeildValue] = React.useState([{}]);
    const [animation,setAnimation] = React.useState(false);
    const myRef = React.useRef(null)

    const handleRowClick = (rowData) => {
        // debugger;
        // console.log(rowData);
        // let fieldData = {
        //     'Username' : [{
        //         'value' : rowData.username,
        //         'disabled' : true
        //                 }]
            
        // };
        setFeildValue(rowData);
        scrollToView("scroll");
    }
    const scrollToView = (value) => {
        if(value === "add"){
            setFeildValue({});
        }
        setAdd(true);
        setTimeout(() => myRef.current.scrollIntoView(),1000);
        setAnimation(true);
        
     }
     
React.useEffect(() => {
        let url = `http://127.0.0.1:8000/staff/getStudentList/`
        getData(url).then(response => response && setUsers(response
            ?.users_list))
    }, [])
    return (
        <div className={classes.root}>
            {users
                ? 
                <div className="studentTable">
                    <Grid>
                        <Button color='primary' label='Add Students' type="add" buttonClick={()=> scrollToView("add")}/>
                    </Grid>
                    <Gridtable
                    griddata={users}
                    gridtitle={'Student List'}
                    gridcolumns={Constant.STUDENT_GRIDCOLUMNS}
                    handleRowClick={handleRowClick} />
                </div>
                : null}
            
             {add 
                ?
                <Grid container spacing={3} ref={myRef}>
                <Grow in={animation}>
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
                        {/* <Formik fields={Constant.STUDENT_ADDSTUDENT}/> */}
                        <FormField fields={Constant.STUDENT_ADDSTUDENT} values = {fieldValue}/>
                        
                    </Paper>
                </Grid>
                </Grow>
                <Grow 
                    in={animation}
                    style={{transformOrigin: '0 0 0'}}
                    {...(animation ? {timeout:1000} : {})}>
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
                            <FormField fields={Constant.STUDENT_ADDCSV} />
                        </Grid>
                        <Grid>
                            <Button label="Submit" color="primary" />
                            <Button label="Sample Download" color="secondary" />
                        </Grid>

                    </Paper>
                </Grid>
                </Grow>
            </Grid>
                 : null}
                
            
        </div>
    )
}

export default Students

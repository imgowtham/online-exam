import React from 'react';
import Gridtable from '../../Components/Table/table.component';
import {Grid, Paper, Typography} from '@material-ui/core';
import {getData} from '../../service'
import {TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    wrapper: {
        padding: theme.spacing(1),
        flexGrow: 1,
        marginTop: theme.spacing(1)
    },
    textbox:{
        padding: theme.spacing(1)
    }
}));
const Students = () => {
    const classes = useStyles();
    const [users,
        setUsers] = React.useState('')
    const gridColumns = [
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
                        gridcolumns={gridColumns}/>
                : null}
            <Grid container spacing={3}>
                <Grid container item xs={6}>
                    <Grid>
                        <Typography variant="h4" gutterBottom>
                            Add Students
                        </Typography>
                    </Grid>
                    <Paper className={classes.wrapper}>
                        <Grid container item xs={12}>
                            <Grid item xs={12}>
                                <TextField className={classes.textbox} label="First Name" fullWidth/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Last Name" fullWidth/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Email" fullWidth/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid container item xs={6}>
                    <Grid item xs={4}>
                        <TextField label="First Name"/>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="Last Name"/>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="Email"/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Students

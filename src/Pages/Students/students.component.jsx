import React from 'react';
import Gridtable from '../../Components/Table/table.component';
import {Grid, makeStyles, Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import {getData} from '../../service';
import {Switch, Route, useRouteMatch, useHistory} from 'react-router-dom';
import StudentsForm from './students-form.component';
import {StudentGridColumns} from './students.constants';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
}));
const Students = () => {
    const classes = useStyles();

    let {path, url} = useRouteMatch();

    let history = useHistory();

    const formRef = React.useRef(null);

    const [state,
        setState] = React.useState({users: [], batchList: [], formType: '', rowData: ''});

    const handleRowClick = (rowData) => {
        history.push(`${url}/Edit`);
        setTimeout(() => {formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })},0)
        setState({
            ...state,
            rowData: rowData,
            formType: 'Edit'
        });
    }

    React.useEffect(() => {
        let url = `http://127.0.0.1:8000/staff/getStudentList/`;
        getData(url).then(response => response && setState(prevState => {
            return { ...prevState, users: response.users_list, batchList : response.batchList}
          })) 
    }, [state])

    return (
        <div className={classes.root}>
            <div className="studentTable">
                <Grid>
                    <Button color="primary" label="Add Student" size="small" variant="contained" className="Add_Student" onClick={() => {history.push(`${url}/Add`);
                        setState({
                            ...state,
                            formType: 'Add'
                        })}} ><AddIcon/>Add Student</Button>
                </Grid>
                <Gridtable
                    griddata={state.users}
                    gridtitle={'Student List'}
                    gridcolumns={StudentGridColumns}
                    handleRowClick={handleRowClick}/>
            </div>
            <Grid container spacing={3} ref={formRef}>
                <Switch>
                    <Route path={`${path}/:formType`}>
                        <StudentsForm rowData={state.rowData} batchList={state.batchList} />
                    </Route>
                </Switch>
            </Grid>
        </div>
    )
}

export default Students

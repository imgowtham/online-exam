import React from 'react';
import Gridtable from '../../Components/Table/table.component';
import {Grid, Button} from '@material-ui/core';
import {getData} from '../../service';
import {Switch, Route, useRouteMatch, useHistory} from 'react-router-dom';
import {ExamsGridColumns,useStyles} from './exams.constants';
import ExamsForm from './exams-form.component';
import AddIcon from '@material-ui/icons/Add'

const Exams = () => {
    const classes = useStyles();
    
    let {path, url} = useRouteMatch();

    let history = useHistory();

    const formRef = React.useRef(null);

    const [state,
        setState] = React.useState({exams: [], batchList: [], formType: '', rowData: ''});

    React.useEffect(() => {
        let url = `http://127.0.0.1:8000/staff/getExamsList/`
        getData(url).then(response => response && setState(prevState => {
            return { ...prevState, exams: response.exams_list}
          })) 
    }, [])

    const handleRowClick = (rowData) => {
        history.push(`${url}/Edit`);
        setTimeout(() => {formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })},0)
        setState({
            ...state,
            rowData: rowData,
            formType: 'Edit'
        });
    }
    return (
        <div className={classes.root}>
            <div className="studentTable">
                <Grid>
                <Button color="primary" label="Add Exam" size="small" variant="contained" className="Add_Exam" onClick={() => {history.push(`${url}/Add`);
                        setState({
                            ...state,
                            formType: 'Add'
                        })}} ><AddIcon/>Add Exam</Button>
                </Grid>
                <Gridtable
                    griddata={state.exams}
                    gridtitle={'Exams List'}
                    gridcolumns={ExamsGridColumns}
                    handleRowClick={handleRowClick}/>
            </div>
            <Grid container spacing={3} ref={formRef}>
                <Switch>
                    <Route path={`${path}/:formType`}>
                        <ExamsForm rowData={state.rowData} />
                    </Route>
                </Switch>
            </Grid>
        </div>
    )
}

export default Exams

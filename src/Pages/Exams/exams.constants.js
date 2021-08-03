import * as Yup from 'yup';
import {makeStyles} from '@material-ui/core';

export const ExamsGridColumns = [
    {
        title: 'Name',
        field: 'exam_name'
    }, {
        title: 'Question Paper',
        field: 'question_name'
    }, {
        title: 'Batch',
        field: 'batch_name'
    }, {
        title: 'Exam Duration',
        field: 'exam_duration'
    }, {
        title: 'Start Date',
        field: 'exam_start_date'
    }, {
        title: 'End Date',
        field: 'exam_end_date'
    }
]

export const useStyles = makeStyles((theme) => ({
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
        minWidth: 120
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
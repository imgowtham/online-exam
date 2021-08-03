import React from 'react';
import {Grid, Paper, Typography, Button} from '@material-ui/core';
import {useParams, useHistory} from 'react-router-dom';
import {Formik, Form} from 'formik';
import TextField from '../../Components/Forms-UI/TextField/text-box.component';
import Select from '../../Components/Forms-UI/SelectBox/selectbox.component';
import Checkbox from '../../Components/Forms-UI/Checkbox/checkbox.component';
import ButtonWrapper from '../../Components/Forms-UI/Button/button.component';
import FileUpload from '../../Components/Forms-UI/File-Upload/file-upload.component';
import {CSVLink} from "react-csv";
import {postData, postMultiPartData} from '../../service';
import {useSnackbar} from 'notistack';
import {InitialFormState, FormValidation, csvData, useStyles} from './students.constants';
import Cookies from 'js-cookie';

const StudentsForm = ({
    batchList,
    ...props
}) => {
    const classes = useStyles();

    const {enqueueSnackbar} = useSnackbar();

    let {formType} = useParams();

    const csvLink = React.useRef()

    let history = useHistory();

    const [formData,
        setFormData] = React.useState([]);

    const [uploadedFile,
        setUploadedFile] = React.useState([]);

    const downloadSampleCSV = () => csvLink
        .current
        .link
        .click();

    React.useEffect(() => {
        if (formType === 'Edit' && !props.rowData) {
            history.push('/Students')
        }
        if (formType === 'Add') {
            setFormData(InitialFormState);
        }
    }, [props, formType, history]);

    React.useEffect(() => {
        setFormData(JSON.parse(JSON.stringify(props.rowData).replace(/:null/gi, ":\"\"")))
    }, [props.rowData]);

    const handleUpload = () => {
        let fileUpload = new FormData();
        fileUpload.append('bulk_student_file', uploadedFile);
        fileUpload.append('csrfmiddlewaretoken', Cookies.get('csrftoken'));
        let url = 'http://127.0.0.1:8000/staff/bulkUploadUser/'
        postMultiPartData(url, fileUpload).then(response => {
            enqueueSnackbar('Uploaded Successfully!', {variant: 'success'});
            setUploadedFile(null)
        });
    }

    const addOrEditForm = (data) => {
        let formData = new FormData();
        let {
            year,
            institution,
            department,
            tableData,
            is_active,
            ...filteredData
        } = data;
        for (let key in filteredData) {
            formData.append(key, data[key]);
        }
        formData.append('csrfmiddlewaretoken', Cookies.get('csrftoken'));
        let url = 'http://127.0.0.1:8000/staff/saveStudentDetails/';
        postData(url, formData).then(response => {
            enqueueSnackbar(`Student ${formType}ed Successfully!`, {variant: 'success'});
            setUploadedFile(null)
        });
    }

    return (
        <React.Fragment>
            <Grid container item xs={12} sm={12} md={6}>
                <Paper className={classes.wrapper}>
                    <Grid>
                        <Typography variant="h6" color="primary" gutterBottom>
                            {`${formType} Students`}
                        </Typography>
                    </Grid>
                        <Formik
                            initialValues={formData || InitialFormState}
                            enableReinitialize
                            validationSchema={FormValidation}
                            onSubmit={values => addOrEditForm(values)}>
                            <Form>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <TextField name="username" disabled={formType === 'Edit'} label="Username"/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField name="first_name" label="First Name"/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField name="last_name" label="Last Name"/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField name="email" label="Email"/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Select name="batch" label="Batch" options={batchList}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Checkbox name="is_active" legend="Active" label="Active"/>
                                    </Grid>
                                    <Button color="primary" label={`${formType} Student`} size="medium" variant="contained" className={`${formType}_Student`}>{`${formType} Student`}</Button>
                                </Grid>
                            </Form>
                        </Formik>
                </Paper>
            </Grid>
            <Grid
                container
                item
                xs={12}
                sm={12}
                md={6}
                style={{
                display: "flow-root"
            }}>
                <Paper className={classes.wrapper}>
                    <Grid>
                        <Typography variant="h6" color="primary" gutterBottom>
                            Student CSV File
                        </Typography>
                    </Grid>
                    <Grid></Grid>
                    <Grid className={classes.upload}>
                        <Grid item xs={12}>
                            <FileUpload
                                savefile={setUploadedFile}
                                acceptedFileType="(Only *.csv files will be accepted)"/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <ButtonWrapper color="primary" customclick={handleUpload}>Submit</ButtonWrapper>
                        </Grid>
                        <Grid item xs={3}>
                            <CSVLink
                                data={csvData}
                                filename='students.csv'
                                className='hidden'
                                ref={csvLink}
                                target='_blank'/>
                            <Button
                                color="secondary"
                                variant="contained"
                                customclick={downloadSampleCSV}
                                className="Sample_Download">Sample Download</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </React.Fragment>
    )
}

export default StudentsForm

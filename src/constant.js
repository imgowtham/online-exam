/*Student Fields*/
export const STUDENT_GRIDCOLUMNS = [
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
export const STUDENT_ADDSTUDENT = [
    {
        name: 'Username',
        type: 'text',
        placeholder: 'UserName'
    }, {
        name: 'FirstName*',
        type: 'text',
        placeholder: 'FirstName'
    }, {
        name: 'LastName*',
        type: 'text',
        placeholder: 'Lastname'
    }, {
        name: 'E-Mail',
        type: 'text',
        placeholder: 'E-Mail(Optional)'
    }, {
        name: 'Batch',
        type: 'dropdown',
        placeholder: 'Batch'
    },
    {
        name: 'Active',
        type: 'checkbox',
        
    }
]

export const STUDENT_ADDCSV = [
    {
        name: 'Upload CSV File',
        type: 'upload',
        }
]
/*Exams Fields*/
export const EXAMS_GRIDCOLUMNS = [
    {
        title: 'Name',
        field: 'name'
    }, {
        title: 'Question Paper',
        field: 'question_paper'
    }, {
        title: 'Batch',
        field: 'batch'
    }, {
        title: 'Exam Duration',
        field: 'exam_duration'
    }, {
        title: 'Start Date',
        field: 'start_date'
    }, {
        title: 'End Date',
        field: 'end_date'
    }
]
export const EXAMS_ADDEXAM = [
    {
        name: 'Exam Name',
        type: 'text',
        placeholder: 'Enter Exam Name'
    }, {
        name: 'Exam Description',
        type: 'textarea',
        placeholder: 'Enter Description'
    }, {
        name: 'Exam Duration',
        type: 'text',
        placeholder: 'Enter Duration'
    }, {
        name: 'Exam Start Date',
        type: 'text',
        placeholder: 'Enter Start Date'
    }, {
        name: 'Exam End Date',
        type: 'text',
        placeholder: 'Enter End Date'
    },
    {
        name: 'Question Paper',
        type: 'dropdown',
            placeholder: 'Question Paper'
    },
    {
        name: 'Batch',
        type: 'dropdown',
        placeholder: 'Batch'
    }
]
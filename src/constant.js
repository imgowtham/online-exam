/*Student Fields*/


export const STUDENTS_FORM = [
    {
        name: 'username',
        displayName: 'Username',
        type: 'text',
        placeholder: 'UserName',
    }, {
        name: 'first_name',
        displayName: 'FirstName*',
        type: 'text',
        placeholder: 'FirstName'
    }, {
        name: 'last_name',
        displayName: 'LastName*',
        type: 'text',
        placeholder: 'Lastname'
    }, {
        name: 'email',
        displayName: 'E-Mail',
        type: 'text',
        placeholder: 'E-Mail(Optional)'
    }, {
        name:'year',
        displayName: 'Batch',
        type: 'dropdown',
        placeholder: 'Batch',
        values: [{'name': 'Batch', 'value' : 'batch'}]
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
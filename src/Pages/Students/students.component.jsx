import React from 'react'
import Gridtable from '../../Components/Table/table.component'
import { getData } from '../../service'

const Students = () => {
    const [users, setUsers] = React.useState([])
    React.useEffect(() => {
        let url = `http://127.0.0.1:8000/staff/getStudentList/`
        getData(url).then(response => console.log(response))
    }, [])
    return (
        <div>
            <Gridtable gridtitle={'Student List'}/>
        </div>
    )
}

export default Students

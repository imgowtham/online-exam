import React from 'react';
import MaterialTable from "material-table";

const Gridtable = ({gridtitle, griddata, gridcolumns}) => {
    console.log(griddata)
    return (<MaterialTable
        columns={gridcolumns}
        data={griddata}
        options={{
        search: false
    }}
        title={gridtitle}/>)
}

export default Gridtable

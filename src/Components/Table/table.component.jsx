import React from 'react';
import MaterialTable from "material-table";

const Gridtable = ({gridtitle, griddata, gridcolumns,handleRowClick}) => {
    console.log(griddata)
    return (<MaterialTable
        columns={gridcolumns}
        data={griddata}
        onRowClick={(event,rowData) => handleRowClick(rowData)}
        options={{
        search: false
    }}
        title={gridtitle}/>)
}

export default Gridtable

import React from 'react';
import MaterialTable from "material-table";
import './table.style.css';

const Gridtable = ({gridtitle, griddata, gridcolumns,handleRowClick}) => {
    
    return (
        <div className="material-Table">
            <MaterialTable
                columns={gridcolumns}
                data={griddata}
                onRowClick={(event,rowData) => handleRowClick(rowData)}
                options={{
                search: false,
                filtering: true
            }}
                title={gridtitle}
                filterPlaceholder = {"placeholder"}/>
        </div>
    )
    
}

export default Gridtable

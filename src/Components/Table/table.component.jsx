import React from 'react';
import MaterialTable from "material-table";

const Gridtable = ({gridtitle}) => {
    return (<MaterialTable
        columns={[
        {
            title: 'Name',
            field: 'name',
            searchable: true
        }, {
            title: 'Surname',
            field: 'surname',
            searchable: true
        }, {
            title: 'Birth Year',
            field: 'birthYear',
            type: 'numeric',
            searchable: true
        }, {
            title: 'Birth Place',
            field: 'birthCity',
            searchable: true,
            lookup: {
                34: 'İstanbul',
                63: 'Şanlıurfa'
            }
        }
    ]}
        data={[
        {
            name: 'Mehmet',
            surname: 'Baran',
            birthYear: 1987,
            birthCity: 63
        }, {
            name: 'Zerya Betül',
            surname: 'Baran',
            birthYear: 2017,
            birthCity: 34
        }
    ]}
    options={{
        search: false
      }}
        title={gridtitle}/>)
}

export default Gridtable

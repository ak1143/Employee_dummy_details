import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

function Employees({ data }) {
    const columns = [
        { 
            field: 'id', 
            headerName: 'ID', 
            width: 100, 
            headerAlign: 'center', 
            align: 'center' 
        },
        {
            field: 'image',
            headerName: 'Image',
            width: 80,
            renderCell: (params) => (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <img src={params.row.image} alt="Profile" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </div>
            ),
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'fullName',
            headerName: 'Full Name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 200,
            renderCell: (params) => (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {`${params.row.firstName || ''} ${params.row.lastName || ''}`}
                </div>
            ),
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'demography',
            headerName: 'Demography',
            width: 150,
            renderCell: (params) => (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {`${params.row.gender === "male" ? "M" : "F"}/${params.row.age}`}
                </div>
            ),
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'location',
            headerName: 'Location',
            width: 200,
            renderCell: (params) => (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {`${params.row.address.state}, ${params.row.address.country === "United States" ? "USA" : "error"}`}
                </div>
            ),
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 290,
            renderCell: (params) => (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {params.row.email}
                </div>
            ),
            headerAlign: 'center',
            align: 'center',
        }
    ];

    return (
        <div className='w-full' style={{ height: 527 }}>
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 8 },
                    },
                }}
                sx={{
                    '& .MuiDataGrid-cell': {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        textAlign: 'center',
                    },
                    '& .MuiDataGrid-footerContainer': {
                        textAlign: 'center',
                    },
                }}
            />
        </div>
    );
}

export default Employees;

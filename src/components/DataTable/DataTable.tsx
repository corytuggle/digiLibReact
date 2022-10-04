import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core';
import { BookForm } from '../BookForm';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width:45, hide: true },
    { field: 'title', headerName: 'Title', flex: 2 },
    { field: 'author', headerName: 'Author', flex: 1 },
    { field: 'illustrator', headerName: 'Illustrator', flex: 1 },
    { field: 'narrator', headerName: 'Narrator', flex: 1 },
    { field: 'product', headerName: 'Product', flex: 1 },
    { field: 'isbn10', headerName: 'ISBN-10', flex: 1 },
    { field: 'isbn13', headerName: 'ISBN-13', flex: 1 },
    { field: 'publisher', headerName: 'Publisher', flex: 1 },
    { field: 'yearmd', headerName: 'Publish Date', flex: 1 }
];

interface gridData {
    data: {
        id?: string
    }
}

export const DataTable = () => {
    
    let { bookData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data: {}});
    const [selectionModel, setSelectionModel] = useState<any>([]);

    let handleOpen = () => {
        setOpen(true)
    };
    let handleClose = () => {
        setOpen(false)
    };

    let deleteData = () => {
        server_calls.delete(selectionModel);
        console.log(gridData.data.id);
        getData();
        setTimeout( () => { window.location.reload(); }, 1000)
    }

    console.log(gridData.data.id!);
    console.log(`testing for data ${bookData}`)

    return (
        <div style={{ height : 400, width: '100%'}}>
            <h2>Our Library</h2>

        <DataGrid 
            rows={ bookData } 
            columns = { columns } 
            pageSize={ 5 } 
            checkboxSelection={true} 
            onSelectionModelChange={ (item) => {
                setSelectionModel(item)
                console.log(item)
            }}
        />
        
        <Button onClick={handleOpen}>Update</Button>
        
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Book {selectionModel}</DialogTitle>
            
            <DialogContent>
                <DialogContentText>Update Book</DialogContentText>
                        <BookForm id={selectionModel!}/>
            </DialogContent>
            
            <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel</Button>
        
                <Button onClick={handleClose} color="primary">Done</Button>
            </DialogActions>
        </Dialog>

        </div>
    )
}
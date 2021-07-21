import React from 'react';
import { DataGrid } from '@material-ui/data-grid'
import { rowSelected } from '../../actions/row';
import { useDispatch } from 'react-redux';


export function ShowDataOnTable({
  style = {}, 
  rows = [], 
  columns = [],
}) {

  const dispatch = useDispatch()

  return (
    <div style={ style }>
      <DataGrid 
        rows={rows} 
        columns={columns} 
        pageSize={ 10 }
        autoPageSize
        getRowId = { row => row._id || row.id}
        onRowClick = {e => dispatch( rowSelected(e.row) ) }
      />
    </div>
  );
}
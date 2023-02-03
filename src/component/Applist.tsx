import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTolist } from '../redux/listSlice';
import { TodolistItem } from './TodolistItem';
import { v4 as uuidv4 } from 'uuid';
import './Applist.scss'

export const Applist = () => {
  const dispatch = useDispatch();
  const [list_Item, setlist_Item] = useState({ list_data: '', showpopup: false });
  const total_to_do_list_Item = useSelector((state: any) => state.Totallist.todolist);
  return (
    <div className="list__left">
      <div className='list_heading'>
        <header><h1>To do list</h1></header>
        <Button
          variant='outlined'
          onClick={() =>
            setlist_Item((prev: any) => ({ ...prev, showpopup: !(list_Item.showpopup) }))
          }>
          +
        </Button>
      </div>

      {list_Item.showpopup && <div className='Add_item_popup'>
        <TextField
          style={{ width: '80%' }}
          onChange={(e) =>
            setlist_Item((prev: any) => ({ ...prev, list_data: { id: uuidv4(), list_data_item: e.target.value } }))}
        />
        <Button
          onClick={() => {
            dispatch(addTolist(list_Item.list_data));
            setlist_Item((prev: any) => ({ ...prev, showpopup: !(list_Item.showpopup) }))
          }}
          variant='contained'
        >Add</Button>
      </div>}
      <TodolistItem
        total_to_do_list_Item={total_to_do_list_Item}
      />
    </div>
  )
}

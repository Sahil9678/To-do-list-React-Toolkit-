import React from 'react'
import { useDispatch } from 'react-redux';
import { removeTolist } from '../redux/listSlice';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Card, CardActions, CardContent, Grid, IconButton } from '@mui/material';
import './TodolistItem.scss';

export const TodolistItem = ({ total_to_do_list_Item }: any) => {
    const dispatch = useDispatch();
    return (
        <Grid container xs zeroMinWidth spacing={1} columns={8}>
            {total_to_do_list_Item?.map((item: any, index: any) => {
                return (
                    <Grid item xs={8}>
                        <Card className="list__info" key={`${item.id}`}>
                            <CardContent>
                                <p className="list__title">
                                    {item.list_data_item}
                                </p>
                            </CardContent>
                            <CardActions>
                                <IconButton aria-label="delete">
                                    <DeleteOutlineIcon
                                        onClick={() => dispatch(removeTolist(item.id))}
                                    />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const listSlice = createSlice({
    name: 'list',
    initialState: {
        todolist: [],
    },
    reducers: {
        addTolist: (state: any, action: PayloadAction<any>) => {
            state.todolist.push(action.payload)

        },
        removeTolist: (state: any, action: any) => {
            state.todolist = state.todolist.filter((elem: any) => elem.id !== action.payload)
        },
    },
});

export const listReducer = listSlice.reducer;
export const {
    addTolist,
    removeTolist,
} = listSlice.actions;
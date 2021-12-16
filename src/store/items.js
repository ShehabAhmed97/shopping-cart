import { createSlice } from '@reduxjs/toolkit'

const itemsInitialState = {
    list: [
        { added: false, title: 'Test Item', quantity: 1, total: 18, price: 6 }
    ]
}

const itemsSlice = createSlice({
    name: "cart", 
    initialState: itemsInitialState,
    reducers: {
        add(state,action){
            state.list.action.payload.added = true
        },
        remove(state,action) {
            const item = action.payload
            
            state.list[item].added = false
        }
    }
})

export const itemsActions = itemsSlice.actions
export default itemsSlice.reducer
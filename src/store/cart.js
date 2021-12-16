import { createSlice } from '@reduxjs/toolkit'

const cartInitialState = {
    show: false,
    cartCounter: 0,
    items: []
}

const cartSlice = createSlice({
    name: "cart", 
    initialState: cartInitialState,
    reducers: {
        replaceCart(state,action){
            state.items = action.payload.items;
            state.cartCounter = action.payload.cartCounter;
        },
        toggle(state){
            state.show = !state.show
        },
        addItem(state,action){
            const newItem = action.payload
            const existingItem =state.items.find(item => newItem.id === item.id)
            state.cartCounter++
            if(!existingItem){
                state.items.push({
                    ...newItem, 
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }else{
                existingItem.quantity++
                existingItem.totalPrice += existingItem.price
            }
        },
        removeItem(state,action) {
            const id = action.payload
            const existingItem = state.items.find(item => id === item.id)
            state.cartCounter--
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id)
            }else if(existingItem.quantity > 1 ){
                existingItem.quantity--
                existingItem.totalPrice -= existingItem.price
            }
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer
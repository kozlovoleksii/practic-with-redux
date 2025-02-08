import { createSlice } from "@reduxjs/toolkit";

export const GoodSlicer = createSlice({
    name: "goods",
    initialState: {goods:[]},
    reducers: {
        addToCard(state, action) {
            const existingItem = state.goods.find((item) => item.id === action.payload.id);

            if (existingItem) {
                existingItem.count+=1
              } else {
                  state.goods.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    memory: action.payload.memory,
                    color: action.payload.color,
                    price: action.payload.price,
                    count: 1
                })
              }
        },
        removeOneItemFromCard(state,action) {
            const existingItem = state.goods.find((item) => item.id === action.payload.id);

            if (existingItem && existingItem.count>1) {
                existingItem.count--
              } else {
                  state.goods = state.goods.filter(item=>item.id!==existingItem.id)
              }

        },

        removeItem(state,action) {
            state.goods = state.goods.filter(item=>item.id!==action.payload.id)
        }
    }
})

export const {addToCard, removeOneItemFromCard, removeItem} = GoodSlicer.actions
export default GoodSlicer.reducer
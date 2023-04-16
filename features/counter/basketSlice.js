import { createSlice } from '@reduxjs/toolkit';

    
export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basketId: null,
    basketName: null,

  },
  reducers: {
    setBasketInfo: (state, action) => {
      state.basketId = action.payload.basketId;
      state.basketName = action.payload.basketName;
    }
  },

});

export const { setBasketInfo } = basketSlice.actions;

export const selectBasketId = (state) => state.basket.basketId;
export const selectBasketName = (state) => state.basket.basketName;

export default basketSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        questionId: null,
        questionName: null,

    },
    reducers: {
        setReviewInfo: (state, action) => {
            state.reviewId = action.payload.reviewId;
            state.reviewName = action.payload.reviewName;
        }
    },

});

export const { setReviewInfo } = reviewSlice.actions;

export const selectReviewId = (state) => state.review.reviewId;
export const selectReviewName = (state) => state.review.reviewName;



export default reviewSlice.reducer;

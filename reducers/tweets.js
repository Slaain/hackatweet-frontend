import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const tweetsSlice = createSlice({
 name: 'tweets',

  initialState,
 reducers: {
   setTweets: (state, action) => {
    state.value = action.payload;
  },
 },
});

export const { addTweet, setTweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;
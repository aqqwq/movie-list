import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

export interface listState {
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  Genre: string;
  Plot: string;
}

export interface listMovie {
  movie: listState;
}
export interface listArr {
  list: listState[];
}

const initialState: listArr = {
  list: [],
};

const profileListSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addToCurrentList(state, action: PayloadAction<listState>) {
      state.list.push(action.payload);
    },
  },
});

export const { addToCurrentList } = profileListSlice.actions;
export default profileListSlice.reducer;

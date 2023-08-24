import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface listState {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
  imdbRating: string;
  Genre: string;
  Plot: string;
}

export interface ProfileListState {
  current: listState[];
  planning: listState[];
  complete: listState[];
  paused: listState[];
  dropped: listState[];
}

const initialState: ProfileListState = {
  current: [],
  planning: [],
  complete: [],
  paused: [],
  dropped: [],
};

const profileListSlice = createSlice({
  name: 'profileList',
  initialState,
  reducers: {
    addToCurrent: (state, action) => {
      state.current.push(action.payload);
    },
    addToPlanning: (state, action) => {
      state.planning.push(action.payload);
    },
    addToComplete(state, action: PayloadAction<listState>) {
      state.complete.push(action.payload);
    },
    addToPaused(state, action: PayloadAction<listState>) {
      state.paused.push(action.payload);
    },
    addToDropped(state, action: PayloadAction<listState>) {
      state.dropped.push(action.payload);
    },
  },
});

export const {
  addToCurrent,
  addToPlanning,
  addToComplete,
  addToPaused,
  addToDropped,
} = profileListSlice.actions;

export default profileListSlice.reducer;

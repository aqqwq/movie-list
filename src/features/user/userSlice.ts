import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { createSlice } from '@reduxjs/toolkit';
interface userState {
  username: string;
}

const initialState: userState = {
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;
// export const selectCount = (state: RootState) => state.counter.value
export default userSlice.reducer;

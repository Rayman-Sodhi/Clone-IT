import { createSlice } from "@reduxjs/toolkit";
import { db } from "../firebase.utils";

// "ducks" pattern which suggests that you should put all your action creators and reducers in one file, do named exports of the action creators, and a default export of the reducer function.

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const fetchUser =  (uid) => {
  return (dispatch) => {
  db.collection('amazonUsers').doc(uid)
      .get()
    .then((doc) => {
        if (doc.exists) {
          dispatch(setUser({name: doc.data().name, email: doc.data().email, uid: doc.id}));
        }
      })
      .catch((error) => console.log(error.message));
  };
};

export const { setUser } = userSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.user.value)`
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCakes: 10,
};

// object passed to createSlice
// name param describes name of this slice
// initialState of the slice
// reducer functions
const cakeSlice = createSlice({
  name: "cake",
  initialState, // key value both same, shorthand syntax
  reducers: {
    // will have function that receives state and action as arguments
    ordered: (state, action) => {
      // dont have to explicitly return the new state
      // can directly mutate the state as toolkit uses immer under the hood
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

// slice also provides the reducer method to include in our store
module.exports = cakeSlice.reducer; // default export
// as well the actions
module.exports.cakeActions = cakeSlice.actions; // named export

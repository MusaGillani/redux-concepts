const redux = require("redux");
const produce = require("immer").produce;

const initialState = {
  name: "musa",
  address: {
    street: "273 street 2",
    city: "atd",
    state: "kpk",
  },
};

const STREET_UPDATED = "STREET_UPDATED";
const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      // draftCopy of state
      // immer allows to update this draft state as state is mutable
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = redux.createStore(reducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

store.dispatch(updateStreet("271 street 2"));
store.dispatch(updateStreet("145 street 3"));

unsubscribe();

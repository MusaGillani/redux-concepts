import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  const [value, setValue] = useState(1);

  // accepts a function as arg
  // this function is called selector function
  // selector function receives state as argument
  // here state refers to the state in store
  // this state contains multiple reducers which we can refer
  // by the key we assigned in the reducer object in configureStore

  // useSelector returns whatever is returned by the selector function
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);

  // this hooks returns a reference to the dispatch function from
  // the redux store
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(5))}>Restock cakes</button>
    </div>
  );
};

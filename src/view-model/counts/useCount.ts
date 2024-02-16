/**
 * View-model
 */

import React from "react";

type Increment = "increment";
type Decrement = "decrement";

export const useCounts = () => {
  const reducer = (state: number, action: Increment | Decrement) => {
    switch (action) {
      case "decrement":
        return state - 1;

      case "increment":
        return state + 1;

      default:
        return state;
    }
  };

  const [counts, dispatch] = React.useReducer(reducer, 0);

  const increase = () => {
    dispatch("increment");
  };

  const decrease = () => {
    dispatch("decrement");
  };

  return { counts, increase, decrease };
};

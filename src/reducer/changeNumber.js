const initialState = 0;
const changeNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state !== 0 ? state - 1 : 0;
    case "INCREMENTBY":
      return state + action.payload;
    case "DECREMENTBY":
      state = state !== 0 ? state - action.payload : 0;
      if (state < 0) {
        return (state = 0);
      }

    default:
      return state;
  }
};

export default changeNumber;

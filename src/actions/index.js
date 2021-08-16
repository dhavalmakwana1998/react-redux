export const incNumber = () => {
  return {
    type: "INCREMENT",
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};

export const incNumberBy = () => {
  return {
    type: "INCREMENTBY",
    payload: 5,
  };
};

export const decNumberBy = () => {
  return {
    type: "DECREMENTBY",
    payload: 5,
  };
};

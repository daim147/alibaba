const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, actions) => {
  if (actions.type === "CURRENT_USER") {
    return {
      ...state,
      currentUser: actions.payload,
    };
  }

  return state;
};

export default userReducer;

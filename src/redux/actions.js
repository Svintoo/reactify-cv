export const updateViewed = (value) => ({
  type: "UPDATE_VIEWED",
  payload: value,
});

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_VIEWED":
      return {
        ...state,
        viewed: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;

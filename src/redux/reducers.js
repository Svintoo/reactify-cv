const initialState = {
    viewed: 0,
  };
  
  
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_VIEWED':
        return {
          ...state,
          viewed: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
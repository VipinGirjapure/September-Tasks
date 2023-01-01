const initialState = {
  firstPageInfo: {},
  secondPageInfo: {},
  thirdPageInfo: {},

};

const signupReducer = (state = initialState, action) => {
    
  switch (action.type) {
    case "FIRST_PAGE":
      return {...state,
        firstPageInfo: action.payload,
      };
    case "SECOND_PAGE":
      return {...state,
        secondPageInfo: action.payload,
      };
    case "THIRD_PAGE":
      return {...state,
        thirdPageInfo: action.payload,
      };

    default:
      return state;
  }
};
export default signupReducer;

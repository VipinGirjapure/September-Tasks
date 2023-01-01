const initialState = {
  employeeDetails: [],
  status: null,
  getAllPosts: [],
};
const LogInReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return { ...state, employeeDetails: action.payload };

    case "LOG_IN":
      return { ...state, employeeDetails: action.payload };
    case "STATUS_OK":
      return { ...state, status: action.payload };
    case "GET_ALL_POSTS":
      return { ...state, getAllPosts: action.payload };

    default:
      return state;
  }
};
export default LogInReducer;

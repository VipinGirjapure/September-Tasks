const initialState = {
  chatList: [],
  
};
const ChatReducer = (state = initialState, action) => {
    console.log(action.payload)
  switch (action.type) {
    case "CHAT":
      return {...state,chatList:[...state.chatList, action.payload] };

    default:
      return state;
  }
};
export default ChatReducer;


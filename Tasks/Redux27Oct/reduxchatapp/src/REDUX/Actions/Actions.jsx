export const setSendAction = (payload) => {
  return { type: "CHAT", payload };
};
export const getSendAction = (payload) => {
  return async (dispatch) => {
    dispatch(setSendAction({user: 'Vipin', text: payload.message, date: new Date(), selectedUser: payload.user}))

    const res = await fetch("https://fipolo-webhook-test.herokuapp.com/send", {
      method: "POST",
      headers: {
        
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: payload.message
      }),
    });
    const resJson = await res.json();
    console.log("action",payload)
    dispatch(setSendAction({user: payload.user, text: resJson.reply, date: new Date(), selectedUser: payload.user}))
// console.log(resJson)

    // dispatch(setSendAction(resJson, l));
    // dispatch(statusAction(res.status));
  };
};

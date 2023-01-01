const setQuestionAction = (payload) => {
  return { type: "QUE", payload };
};
const setAdminQuestionAction = (payload) => {
  return { type: "ADMIN_QUE", payload };
};
export const setAnsAction = (payload) => {
  // console.log("ans",payload)
  return { type: "ANS", payload };
};

export const getAdminQuestionAction = (payload) => {
  // console.log("reducer", payload);
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://fipolo-webhook-test.herokuapp.com/add-question",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            
            },
            body: JSON.stringify({
              que: payload.que,
              option1: payload.option1,
              option2: payload.option2,
              option3: payload.option3,
              option4: payload.option4,
              ans: payload.ans,
              userId: "501",
            }
            ),
          },
        
      );
      const resJson = await res.json();
      console.log("getAll", resJson);

      // dispatch(setAdminQuestionAction(resJson));
    } catch (e) {
      console.log(e);
    }
  };
  //   console.log("getAll",);
};
export const getQuestionAction = (payload) => {
  // console.log("reducer", payload);
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://fipolo-webhook-test.herokuapp.com/get-questions/501",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const resJson = await res.json();
      //   console.log("getAll", resJson);

      dispatch(setQuestionAction(resJson));
    } catch (e) {
      console.log(e);
    }
  };
  //   console.log("getAll",);
};

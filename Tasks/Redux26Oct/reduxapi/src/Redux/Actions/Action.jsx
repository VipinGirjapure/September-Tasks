export const SignUpAction = (payload) => {
  return { type: "SIGN_UP", payload };
};
export const LogInAction = (payload) => {
  return { type: "LOG_IN", payload };
};
export const statusAction = (payload) => {
  // console.log("status",payload)
  return { type: "STATUS_OK", payload };
};
export const getAllPostsAction = (payload) => {
  return { type: "GET_ALL_POSTS", payload };
};
export const createPostsAction = (payload) => {
  return { type: "CREATE_POST", payload };
};

export const createPostsAction2 = (payload, l) => {
  return async (dispatch) => {
    // const body = {
    //   title: payload.title,
    //   about: payload.about,
    //   subtitle: payload.subtitle,
    //   files: payload.files,
    // };
    var formData = new FormData();
    formData.append("title", payload.title);
    formData.append("about", payload.about);
    formData.append("subtitle", payload.subtitle);
    formData.append("files", payload.files);
    try {
      const res = await fetch(
        "https://empappregular.herokuapp.com/createPost",

        {
          method: "POST",
          headers: {
            token: `${sessionStorage.getItem("token")}`,
            // "Content-Type": "multipart/form-data",
          },
          body: formData,
        }
      );
      const resJson = await res.json();

      dispatch(createPostsAction(resJson, l));

      console.log("create", resJson);
    } catch (error) {
      console.log(error);
    }
    // console.log(sessionStorage.getItem("token"));
    // console.log("create", payload);
  };
};
export const getAllPostsAction2 = (payload, l) => {
  return async (dispatch) => {
    const res = await fetch("https://empappregular.herokuapp.com/getAllPosts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resJson = await res.json();

    dispatch(getAllPostsAction(resJson, l));

    // console.log("getAll", resJson);
  };
};
export const SignUpAction2 = (payload, l) => {
  console.log("action 2");
  return async (dispatch) => {
    const res = await fetch("https://empappregular.herokuapp.com/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emp_id: parseInt(payload.emp_id),
        name: payload.name,
        password: payload.password,
      }),
    });
    const resJson = await res.json();
    dispatch(SignUpAction(resJson, l));
    console.log("SignUp", resJson);
  };
};
export const LogInAction2 = (payload, l) => {
  return async (dispatch) => {
    const res = await fetch("https://empappregular.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emp_id: parseInt(payload.emp_id),
        password: payload.password,
      }),
    });
    const resJson = await res.json();
    sessionStorage.setItem("token", resJson.token);

    console.log("LogIn", resJson.token);

    dispatch(LogInAction(resJson, l));
    dispatch(statusAction(res.status));
  };
};

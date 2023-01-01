import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Datalist.css";
const Datalist = () => {
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(false);
  const [about, setAbout] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [note, setNote] = useState("");
  // const [message, setMessage] = useState("");
  const [files, setFiles] = useState();

  const navigate = useNavigate();
  const handleSubmitAction = () => {
    const body = {
      title: title,
      about: about,
      subtitle: subtitle,
      // message: message,
      files: files,
    };
    var formData = new FormData();
    formData.append("title", title);
    formData.append("about", about);
    formData.append("subtitle", subtitle);
    formData.append("files", files);

    axios
      .post("https://empappregular.herokuapp.com/createPost", body, {
        headers: {
          token: `${sessionStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      })

      .then((res) => {
        if (res.status === 200) {
          setNote(res.data.message);
          getAllPosts();
        }
      })
      .catch((err) => setNote(err.message));
  };

  const getAllPosts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://empappregular.herokuapp.com/getAllPosts",
        {
          headers: {
            token: `${sessionStorage.getItem("token")}`,
          },
        }
      );

      setLoading(false);
      setPosts(res.data);
    } catch (e) {}
  };
  useEffect(() => {
    getAllPosts();
  }, []);
  const signOut = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <div className="dataListContainer">
        <br />
        <br />

        <div className="dataListHeading">Add Blog Here</div>
        <br />
        <input
          type="text"
          placeholder="Enter title"
          className="dataListItem"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter subtitle"
          className="dataListItem"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Write Here..."
          className="dataListItem"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
        <br />
        <input
          type="file"
          name=""
          className="dataListItem"
          onChange={(e) => {
            setFiles(e.target.files[0]);
          }}
        />
        <br />
        <button
          className="dataListButton"
          onClick={() => handleSubmitAction()}
          disabled={
            about.length === 0 && title.length === 0 && subtitle.length === 0
          }
        >
          {" "}
          Add Post
        </button>
        <br />
        {/* <button className="dataListButton" onClick={() => navigate("/")}> */}
        {/* <Button variant="contained" onClick={() => navigate("/")}> Back</Button> */}

        {/* {" "}
          Back
        </button> */}
        <br />
        <button className="dataListButton" onClick={() => signOut()}>
          Log out
        </button>

        <h3 style={{ textAlign: "center" }}>{note}</h3>

        <div className="dataListHeading">Blog's List</div>
        {loading ? <h1>Blogs are loading ...</h1> : null}
        {Object.values(posts)
          .map((posts, i) => (
            <div key={i} className="dataList">
              <li className="dataListItem">
                <img
                  src={
                    posts.images
                      ? `https://empappregular.herokuapp.com/${posts.images}`
                      : "http://craftsnippets.com/articles_images/placeholder/placeholder.jpg"
                  }
                  alt="Images"
                  height="150"
                  // width="150"

                  onError={(e) =>
                    (e.target.src =
                      "https://us.123rf.com/450wm/caiquame/caiquame2101/caiquame210100429/163283955-blank-man-profile-head-icon-placeholder.jpg?ver=6")
                  }
                />
              </li>
              <li className="dataListItem">
                <span>Name </span> : {posts.author.name}
              </li>
              <li className="dataListItem">
                <span>Title </span> : {posts.title}
              </li>
              <li className="dataListItem">
                <span>About </span> : {posts.about}
              </li>
              <li className="dataListItem">
                <span>Subtitle </span>: {posts.subtitle}
              </li>
            </div>
          ))
          .reverse()}
        <a href=".dataListHeading" textAlign="right">
          go to top
        </a>
      </div>
    </>
  );
};

export default Datalist;

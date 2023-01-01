import { Component } from "react";
import { Box, TextField, Typography, Button, Modal } from "@mui/material";
import { connect } from "react-redux";
import "./Dashboard.css";
import {
  createPostsAction2,
  getAllPostsAction2,
} from "../../Redux/Actions/Action";
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      title: "",
      subtitle: "",
      about: "",
      files: "",
    };
  }

  handleGetAllPosts() {
    this.props.getAllPostsAction2();
  }
  handleCreatePost() {
    this.props.createPostsAction2({
      title: this.state.title,
      subtitle: this.state.subtitle,
      about: this.state.about,
      files: this.state.files,
    });
  }
  render() {
 
    var allPosts = this.props.State.LogInReducer.getAllPosts;

    return (
      <>
        <Box>
          <Modal
            open={this.state.open}
            // onClose={this.}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Box className="Modal">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Create Post
              </Typography>
              <TextField type="text" label="title" sx={{ margin: "8px 0" }} onChange={(e)=>this.setState({title:e.target.value})} />
              <TextField
                type="text"
                label="subtitle"
                sx={{ margin: "8px 0" }}
                onChange={(e)=>this.setState({subtitle:e.target.value})} 
              />
              <TextField type="text" label="about" sx={{ margin: "8px 0" }} onChange={(e)=>this.setState({about:e.target.value})}  />
              <TextField
                type="file"
                onChange={(e) => this.setState({ files: e.target.files[0] })}
                sx={{ margin: "8px 0" }}
              />
              <Button onClick={() => this.handleCreatePost()} variant="outlined">Create Post</Button>

              <Box onClick={() => this.setState({ open: false })}>Close</Box>
            </Box>
          </Modal>
        </Box>
        <Box className="dashboardPage">
          <Box className="dashboardFirstBox">
            <Box
              className="dashboardFirstBoxItem"
              onClick={() => this.handleGetAllPosts()}
            >
              All Posts
            </Box>
            <Box
              className="dashboardFirstBoxItem"
              onClick={() => this.setState({ open: true })}
            >
              Create Post{" "}
            </Box>
          </Box>
          <Box className="AllPostsContainer">
            {Object.values(allPosts)
              .map((item,i) => {
                return (
                  <>
                    <Box className="post" key={i}>
                      <img
                        src={
                          item.images
                            ? `https://empappregular.herokuapp.com/${item.images}`
                            : "http://craftsnippets.com/articles_images/placeholder/placeholder.jpg"
                        }
                        alt="Images"
                        height="180px"
                        style={{ maxWidth: "180px" }}
                        onError={(e) =>
                          (e.target.src =
                            "https://us.123rf.com/450wm/caiquame/caiquame2101/caiquame210100429/163283955-blank-man-profile-head-icon-placeholder.jpg?ver=6")
                        }
                      />
                      {/* <Box sx={{textAlign:"center"}}>Title : {item.title}</Box> */}
                      <Box sx={{ textAlign: "center" }}>
                        Author: {item.author.name}
                      </Box>
                      <Box sx={{ textAlign: "center" }}>
                        Title : {item.title}
                      </Box>
                    </Box>
                  </>
                );
              })
              .reverse()}
          </Box>
        </Box>
      </>
    );
  }
}
const mapStateToProps = (State) => ({
  State: State,
});
const mapDispatchToProps = {
  getAllPostsAction2: getAllPostsAction2,
  createPostsAction2: createPostsAction2,
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

import { Avatar, Box, Button, TextField } from "@mui/material";
import { Component } from "react";
import { connect } from "react-redux";
import { getSendAction } from "../../REDUX/Actions/Actions";
import SendIcon from "@mui/icons-material/Send";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import "./Main.css";
import { createRef } from "react";
class Main extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      user: "Ben",
    };
  }
  handleSend() {
    this.props.getSendAction({
      message: this.state.message,
      user: this.state.user,
    });
    this.setState({ message: "" });
  }
  messagesEndRef = createRef();
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    this.messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    // console.log(this.props.State);
    // console.log(
    //   this.props.State.ChatReducer.chatList.filter(
    //     (item) => item.user === "Ben"
    //   )
    // );
    return (
      <>
        <Box className="mainPage">
          <Box className="mainPageContainer">
            <Box className="leftBoxMain">
              <Box
                sx={{
                  fontSize: "23px",
                  fontWeight: "bolder",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#12558a",
                  backgroundColor: "white",
                  padding: "0 5px",
                  width: "100%",
                  height: "60px",
                }}
              >
                CHAT APP <TelegramIcon />
              </Box>
              <Box
                sx={{
                  color: "white",
                  backgroundColor: "#12558a",
                  width: "100%",
                  textAlign: "center",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Chats
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", height: "30%" }}
              >
                <Box
                  sx={{
                    marginBottom: "15px",
                    fontSize: "20px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    flexWrap: "wrap",
                    width: "100%",
                    marginTop: "5px",
                  }}
                  onClick={() => this.setState({ user: "Ben" })}
                >
                  <Avatar
                    alt="user"
                    src=""
                    sx={{
                      width: 36,
                      height: 36,
                      backgroundColor: "white",
                      color: "#12558a",
                      marginLeft: "5px",
                      marginRight: "5px",
                    }}
                  />
                  Ben
                </Box>
                <Box
                  sx={{
                    marginBottom: "15px",
                    fontSize: "20px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    flexWrap: "wrap",
                    width: "100%",
                    marginTop: "5px",
                  }}
                  onClick={() => this.setState({ user: "John" })}
                >
                  <Avatar
                    alt="user"
                    src=""
                    sx={{
                      width: 36,
                      height: 36,
                      backgroundColor: "white",
                      color: "#12558a",
                      marginLeft: "5px",
                      marginRight: "5px",
                    }}
                  />
                  John
                </Box>
              </Box>
              {/* <Button variant="outlined"></Button> */}
            </Box>
            <Box className="rightBoxMain">
              <Box className="chatBoxProfile">
                {" "}
                <Avatar
                  alt="Remy Sharp"
                  src=""
                  sx={{
                    width: 56,
                    height: 56,
                    backgroundColor: "white",
                    color: "#12558a",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}
                />
                {this.state.user}
              </Box>
              <Box className="chatBox">
                {this.state.user === "John"
                  ? this.props.State.ChatReducer.chatList
                      .filter((item) => item.selectedUser === "John")
                      .map((item, i) => {
                        return (
                          <Box key={i} className="chatTexts">
                            {/* <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                padding: "0 15px",
                              }}
                            >
                              {this.state.message === "" ? null : (
                                <Box className="sendItem">{this.state.message}</Box>
                              )}
                            </Box> */}
                            <Box sx={{ color: "White" }}>{item.user}</Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                                padding: "0 15px",
                              }}
                            >
                              <Box className="receivedItem">
                                <Box sx={{ fontSize: "20px" }}>
                                  {" "}
                                  {item.text}
                                </Box>
                                <Box
                                  sx={{
                                    fontSize: "10px",
                                    textAlign: "right",
                                    paddingTop: "2px",
                                  }}
                                >
                                  {item.date.toLocaleString("en-us", {
                                    //   month: "short",
                                    //   year: "numeric",
                                    //   day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                  })}
                                </Box>
                              </Box>
                            </Box>
                            <div ref={this.messagesEndRef} />
                          </Box>
                        );
                      })
                  : null}
                {this.state.user === "Ben"
                  ? this.props.State.ChatReducer.chatList
                      .filter((item) => item.selectedUser === "Ben")
                      .map((item, i) => {
                        return (
                          <Box key={i} className="chatTexts">
                            {/* <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                padding: "0 15px",
                              }}
                            >
                              {this.state.message === "" ? null : (
                                <Box className="sendItem">{this.state.message}</Box>
                              )}
                            </Box> */}
                            <Box sx={{ color: "#12558a", marginLeft: "5px" }}>
                              {item.user}
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                                padding: "0 15px",
                              }}
                            >
                              <Box className="receivedItem">
                                <Box sx={{ fontSize: "20px" }}>
                                  {" "}
                                  {item.text}
                                </Box>
                                <Box
                                  sx={{
                                    fontSize: "10px",
                                    textAlign: "right",
                                    paddingTop: "2px",
                                  }}
                                >
                                  {item.date.toLocaleString("en-us", {
                                    //   month: "short",
                                    //   year: "numeric",
                                    //   day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                  })}
                                </Box>
                              </Box>
                            </Box>
                            <div ref={this.messagesEndRef} />
                          </Box>
                        );
                      })
                  : null}
              </Box>
              <Box
                sx={{
                  height: "90px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                }}
              >
                <Box
                  sx={{
                    height: "40px",
                    fontSize: "larger",
                    color: "#12558a",
                    // marginRight: "1px",
                    // marginLeft: "-5px",
                  }}
                >
                  <EmojiEmotionsIcon />
                </Box>
                <TextField
                  type="text"
                  className="chatBoxInput"
                  placeholder="Write message..."
                  onChange={(e) => this.setState({ message: e.target.value })}
                  value={this.state.message}
                />
                <Box
                  className="chatBoxButton "
                  onClick={() => this.handleSend()}
                >
                  Send <SendIcon />
                </Box>
              </Box>
            </Box>
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
  getSendAction: getSendAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

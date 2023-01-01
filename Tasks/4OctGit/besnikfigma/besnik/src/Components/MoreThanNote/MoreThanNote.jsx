import { Component } from "react";
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import "./MoreThanNote.css";
class MoreThanNote extends Component {
  render() {
    return (
      <>
        <div className="more-than-note-page">
          <div className="more-than-note-container">
            <div className="more-than-note-heading">
              More than just sharing & storage
            </div>
            <div className="more-than-note-text">
              File storage made easy - including powerfull features you won't
              find anywhere else.Whether you're.
            </div>
            <div className="more-than-note-buttons">
              <div className="more-than-note-blue-button">Get Started</div>
              <div className="more-than-note-watch-video">
              < PlayCircleOutlinedIcon sx={{color:"lightblue",height:"30px",width:"30px",boxShadow:"3px 3px 6px 3px lightblue",borderRadius:"15px",marginRight:"5px "}}/> Watched Video</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MoreThanNote;

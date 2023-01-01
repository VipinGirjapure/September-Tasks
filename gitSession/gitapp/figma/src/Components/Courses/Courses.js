import "./Courses.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
export default function Courses() {
  return (
    <>
      <div className="Courses-div">
        <div className="Courses-upper-div">
          <div className="courses-data">
            <div className="courses-data-childdiv">
              <span className="Courses-Membership-heading"> Membership</span>
              <span className="Courses-Student-heading">
                Our Popular Courses
              </span>

              <span className="Courses-Student-para">
                <div>
                  Company is simply dummy text of the printing and typesetting.
                </div>
              </span>
            </div>
          </div>
          <div className="courses-btn">Browse All</div>
        </div>
        <div className="Courses-Cards">
          <div className="Courses-Card">
            <div className="Courses-Card-detail1"></div>
            <div className="Courses-Card-detail2">User Experience Design</div>
            <div className="Courses-Card-detail3">
              The Complete UI/UX Design Course for Beginer
            </div>
            <div className="Courses-Card-detail4">
              <div className="wrt24">$24</div>
              <div className="wrt-4">
                <StarIcon className="courses-star" />
                <StarIcon className="courses-star" />
                <StarIcon className="courses-star" />
                <StarIcon className="courses-star" />
                <StarOutlineIcon className="courses-star" />4
              </div>
            </div>
            <div className="Courses-Card-detail5">
              <div className="Courses-Card-image"></div>
              <div className="User-Name">Glenn Maxl</div>
              <div className="Courses-Card-btn">20 Lessons</div>
            </div>
          </div>

          <div className="Courses-Card">
            <div className="Courses-Card-detail1"></div>
            <div className="Courses-Card-detail2">User Experience Design</div>
            <div className="Courses-Card-detail3">
              The Complete UI/UX Design Course for Beginer
            </div>
            <div className="Courses-Card-detail4">
              <div className="wrt24">$24</div>
              <div className="wrt-4">
                <StarIcon className="courses-star" />
                <StarIcon className="courses-star" />
                <StarIcon className="courses-star" />
                <StarIcon className="courses-star" />
                <StarOutlineIcon className="courses-star" />4
              </div>
            </div>
            <div className="Courses-Card-detail5">
              <div className="Courses-Card-image"></div>
              <div className="User-Name">Glenn Maxl</div>
              <div className="Courses-Card-btn">20 Lessons</div>
            </div>
          </div>

          <div className="Courses-Card">
            <div className="Courses-Card-detail1"></div>
            <div className="Courses-Card-detail2">User Experience Design</div>
            <div className="Courses-Card-detail3">
              The Complete UI/UX Design Course for Beginer
            </div>
            <div className="Courses-Card-detail4">
              <div className="wrt24">$24</div>
              <div className="wrt-4">
                <StarIcon className="courses-star" />
                <StarIcon className="courses-star" />
                <StarIcon className="courses-star" />
                <StarIcon className="courses-star" />
                <StarOutlineIcon className="courses-star" />4
              </div>
            </div>
            <div className="Courses-Card-detail5">
              <div className="Courses-Card-image"></div>
              <div className="User-Name">Glenn Maxl</div>
              <div className="Courses-Card-btn">20 Lessons</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

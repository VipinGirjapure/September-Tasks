import { Component } from "react";
import "./SecondBox.css";
class SecondBox extends Component {
  render() {
    return (
      <>
        <div id="second-box">
          <p className="text1">
            A blue rose is a flower of the genus Rosa (family Rosaceae) that
            presents blue-to-violet pigmentation instead of the more common red,
            white, or yellow. Blue roses are often used to symbolize mystery or
            attaining the impossible. However, because of genetic
            limitations, they do not exist in nature. In 2004, researchers used
            genetic modification to create roses that contain the blue pigment
            delphinidin. So-called "blue roses" have been bred by conventional
            hybridization methods, but the results, such as "Blue Moon", are
            more accurately described as lilac in color.
            <button>read more</button>
          </p>
          <div className="box-image">
            <img
              src="http://www.moviehdwallpapers.com/wp-content/uploads/2014/10/beautiful-blue-flowers-wallpapersblue-hd-flowers-wallpaper-hd-wallpapers-mgbvgfx8.jpg"
              alt="flower"
            />
          </div>
        </div>
      </>
    );
  }
}
export default SecondBox;

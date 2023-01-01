import { Component } from "react";
import "./FirstBox.css";
class FirstBox extends Component {
  render() {
    return (
      <>
        <div id="first-box">
          <div className="first-box-image">
            <img
              src="https://static-cse.canva.com/blob/680157/BabyBlue226.7771a2e6.png"
              alt="flower"
            />
          </div>
          <p>
            Extremely popular worldwide, hydrangeas produce beautiful clusters
            of fragrant blue flowers naturally. Hydrangeas produce very distinct
            and easily identifiable flowers. Belonging to the family
            Hydrangeaceae, these popular perennial shrubs produce blue flowers
            throughout the summer. For hydrangeas to produce blue flowers
            naturally, they need to grow in acidic soil. The species Hydrangea
            macrophylla grows amazing blue-colored mophead flowers in soil that
            is below 7 pH. However, only a few species of hydrangea grow blue or
            purple flowers that depend on the soil acidity. If you want to make
            sure your blue species of hydrangea produce dark blue flowers, keep
            the soil acidic with soil sulfur.
            <button>read more</button>
          </p>
        </div>
      </>
    );
  }
}
export default FirstBox;

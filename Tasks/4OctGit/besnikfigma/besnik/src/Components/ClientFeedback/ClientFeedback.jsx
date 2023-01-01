import { Component } from "react";
import "./ClientFeedback.css";
class ClientFeedback extends Component {
  render() {
    return (
      <>
        <div className="client-feedback-page">
          <div className="client-feedback-container">
            <div className="client-feedback-item1">
              <div className="client-feedback-heading">
                What our happy client say
              </div>
              <div className="client-feedback-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo nesciunt deserunt id!
              </div>
            </div>
            <div className="client-feedback-item2">
              <img
                src="https://www.linedata.com/sites/default/files/styles/style_image_big_737x517_/public/2021-08/Man-Laptop-Office.jpg?h=9cd35fbe&itok=eoa2oU7i"
                alt=""
                className="client-feedback-item2-img"
              />
              <div className="client-feedback-client-feedback-right-container">
                <div className="client-feedback-client-company">Besnik</div>
                <div className="client-feedback-client-feedback">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate veritatis laborum magni.
                </div>
                <div className="client-feedback-client-about">
                  <div className="client-feedback-client-name">
                    Larry Diamond
                  </div>
                  <div className="client-feedback-client-subtext">
                    Chief Executive Officer,Besnik
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ClientFeedback;

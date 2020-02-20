import React, { Component } from "react";
import { Link } from "react-router-dom";
class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="grid-area">
          <div className="choices">
            <div id="img"></div>
            <Link to="beers">
              <h3>All Beers</h3>
            </Link>
            <p className="fake-text">
              Sit nonumy et labore rebum invidunt eos nonumy, clita consetetur
              erat sea stet et. Sit stet lorem sed dolor consetetur.
            </p>
          </div>
          <div className="choices">
            <div id="img3"></div>
            <Link to="random-beer">
              <h3>Random Beer</h3>
            </Link>
            <p className="fake-text">
              Sit clita elitr eirmod diam ea lorem eirmod sit amet. Dolor
              dolores labore ipsum sanctus magna dolor ipsum, labore justo sed
              gubergren et. Et gubergren voluptua dolore no et sanctus.
            </p>
          </div>
          <div className="choices">
            <div id="img2"></div>
            <Link to="new-beer">
              <h3>New Beer</h3>
            </Link>
            <p className="fake-text">
              Sanctus lorem at accusam ipsum sed sea invidunt invidunt et
              eirmod. Sit stet dolor rebum sed clita ipsum. Dolor aliquyam sit
              et diam erat rebum, clita sit stet stet dolor.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div class="landing">
        <div class="dark-overlay landing-inner text-light">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h1 class="display-3 mb-4">Review</h1>
                <p class="lead">
                  {" "}
                  Create a developer profile/portfolio, share posts and get help
                  from other developers
                </p>
                <hr />
                <Link
                  href="addreview.html"
                  class="btn btn-lg btn-info mr-2"
                  to="/addreview"
                >
                  Add Review
                </Link>
                <Link
                  href="updatereview.html"
                  class="btn btn-lg btn-info mr-2"
                  to="/updatereview"
                >
                  Update Review
                </Link>
                <Link
                  href="deletereview"
                  class="btn btn-lg btn-info mr-2"
                  to="/deletereview"
                >
                  Delete Review
                </Link>
                <Link
                  href="getallreviews"
                  class="btn btn-lg btn-info mr-2"
                  to="/getallreviews"
                >
                  Get All Reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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
                <h1 class="display-3 mb-4">Product</h1>
                <p class="lead">
                  {" "}
                  Create a developer profile/portfolio, share posts and get help
                  from other developers
                </p>
                <hr />
                <Link
                  href="addproduct.html"
                  class="btn btn-lg btn-info mr-2"
                  to="/addproduct"
                >
                  Add Product
                </Link>
                <Link
                  href="updateproduct.html"
                  class="btn btn-lg btn-info mr-2"
                  to="/updateproduct1"
                >
                  Update Product
                </Link>
                <Link
                  href="deleteproduct"
                  class="btn btn-lg btn-info mr-2"
                  to="/deleteproduct"
                >
                  Delete Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

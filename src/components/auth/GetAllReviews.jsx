import React, { Component, useState} from "react";
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {getallReviews} from '../../redux/actions/authAction'
import { Link } from "react-router-dom";

const GetAllReviews = ({ getallReviews }) => {
  const [formData, setFormData] = useState({
  });
  const {
  } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    //when state of ur controller is changing then we are holding that changed value in state.
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
    };

    console.log(JSON.stringify(formData));
    getallReviews(formData)
  };

  return (
    <div className="getallreviews">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Get All Review</h1>
            <p className="lead text-center">Get All Review</p>
            <form onSubmit={onSubmit}>
              <input type="submit" className="btn btn-info btn-block mt-4" href="http://localhost:3000/getallreviews1"/>
              {/* <Link
                  href="getallreviews1.html"
                  class="btn btn-lg btn-info mr-2"
                  to="/getallreviews1"
                >
                  Get All Reviews
                </Link> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

GetAllReviews.propTypes = {
  //isAuthenticated: PropTypes.bool,
  getallReviews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  //isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { getallReviews })(GetAllReviews);
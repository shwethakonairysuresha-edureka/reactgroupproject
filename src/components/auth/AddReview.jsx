import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addReview} from '../../redux/actions/authAction'

const AddReview = ({ addReview }) => {
  const [formData, setFormData] = useState({
    id: "",
    comment: "",
    rating: "",
    productId: "",
    username:""
  });
  const {
    id,
    comment,
    rating,
    productId,
    username
  } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    //when state of ur controller is changing then we are holding that changed value in state.
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: id,
      comment: comment,
      rating: rating,
      productId: productId,
      username: username
    };

    console.log(JSON.stringify(formData));
    addReview(formData)
  };

  return (
    <div className="review">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Create Review</h1>
            <p className="lead text-center">Add Review</p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Id"
                  name="id"
                  required
                  value={id}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Comment"
                  name="comment"
                  value={comment}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Rating"
                  name="rating"
                  value={rating}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Product Id"
                  name="productId"
                  value={productId}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={onChange}
                />
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

AddReview.propTypes = {
  //isAuthenticated: PropTypes.bool,
  addReview: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  //isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { addReview })(AddReview);
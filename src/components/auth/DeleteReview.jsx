import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {deleteReview} from '../../redux/actions/authAction'

const DeleteReview = ({ deleteReview }) => {
  const [formData, setFormData] = useState({
    id: ""
  });
  const {
    id
  } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    //when state of ur controller is changing then we are holding that changed value in state.
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: id
    };

    console.log(JSON.stringify(formData));
    deleteReview(formData)
  };

  return (
    <div className="review">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Delete Review</h1>
            <p className="lead text-center">Delete Review</p>
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
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

DeleteReview.propTypes = {
  //isAuthenticated: PropTypes.bool,
  deleteReview: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  //isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { deleteReview })(DeleteReview);
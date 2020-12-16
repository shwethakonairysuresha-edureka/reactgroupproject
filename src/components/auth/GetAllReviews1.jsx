import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {getallReviews} from '../../redux/actions/authAction'

function GetAllReviews1({reviewData, getallReviews}) {
    useEffect(() => {
        getallReviews()
    }, [])
    return reviewData.loading ? (
        <h2>Loading</h2>
    ) : reviewData.error ? (
        <h2>{reviewData.error}</h2>
    ) : (
        <div>
            <h2>Reviews List</h2>
            <div>
                {
                    reviewData && 
                    reviewData.reviews && 
                    reviewData.reviews.map(review => <p>{review.id}</p>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    //isAuthenticated: state.auth.isAuthenticated,
    reviewData: state.review
  });

const mapDispatchToProps = (dispatch) => {
    return {
        getallReviews: () => dispatch(getallReviews())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllReviews1)
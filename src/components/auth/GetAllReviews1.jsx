import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {getallReviews} from '../../redux/actions/authAction'

function GetAllReviews1({reviewData, getallReviews}) {

    useEffect(() => {
        getallReviews()
    }, [])

    console.log(reviewData)
    return (

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

        //console.log(reviewData)
        // <div>
        //     <h2>Reviews List</h2>
        //     <table className="table table-dark">
        //   <thead>
        //     <tr>
        //       <th>Id</th>
        //       <th>Comment</th>
        //       <th>Rating</th>
        //       <th>Product ID</th>
        //       <th>Username</th>
        //     </tr>
        //   </thead>
        //   <tbody>{
        //             reviewData.map(review => (
        //                 <tr>
        //                 <td>{review.id}</td>
        //                 <td>{review.comment}</td>
        //                 <td>{review.rating}</td>
        //                 <td>{review.productId}</td>
        //                 <td>{review.username}</td>
        //                 </tr>))
        //         }</tbody>
        //         </table>
        // </div>
    )
}

const mapStateToProps = (state) => {
    return {
    //isAuthenticated: state.auth.isAuthenticated,
    reviewData: state.reviews
    }
  };

const mapDispatchToProps = (dispatch) => {
    return {
        getallReviews: () => dispatch(getallReviews())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllReviews1)
import React, { useState, useEffect } from "react";
import GetAllReviews from './components/layouts/GetAllReviews';

const GetAllReviews = () => {
    const [reviews, setReviews] = useState([]);

useEffect(() => {
    receiveReviews();
  }, []);

const receiveReviews = () => {
    authAction.getallReviews()
    .then(response => {
        setReviews(response.data);
        console.log(response.data);
    })
    .catch(e => {
        console.log(e);
      });
};
}
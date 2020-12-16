import React from 'react'
import { Link } from 'react-router';

const PostItem = (props) => {
    return (
        <tr key={props.productid}>
      <td>{props.productid}</td>
      <td>{props.productname}</td>
      <td>{props.category}</td>
      <td>{props.description}</td>
      <td>{props.price}</td>
      <td>{props.expirydate}</td>
    </tr>
    )
}

export default PostItem;
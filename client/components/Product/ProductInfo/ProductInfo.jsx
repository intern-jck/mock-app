import React from 'react';
import {FaFacebook, FaTwitter, FaPinterest} from "react-icons/fa";
import './ProductInfo.css';

function ProductInfo({info, styles}) {
  console.log('Product Info', info)
  // console.log('Product Info', styles)
  return (
    <div className="ProductInfo">
      <h3>
        {info.category}
      </h3>
      <h2>
        {info.name}
      </h2>
      <h3>
        {info.default_price}
      {/* { salePrice ?
        <h4>
          <span style={{textDecorationLine: 'line-through'}}>${price}</span>
          <span style={{color: 'red'}}> ${salePrice}</span>
        </h4>
        : <h4>${price}</h4>
      } */}
      </h3>

      {/* <div className="overview-social-icons">
        <a target="_blank" className="onclick" href= {`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>
          <FaFacebook name="icon" size={25}/>
        </a>
        <a target="_blank" className="twitter-share-button  onclick" href="https://twitter.com/intent/tweet?text=Check%20this%20out%33" data-size="large">
          <FaTwitter size={25}/>
        </a>
        <a target="_blank" className="onclick" href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark" data-pin-custom="true">
          <FaPinterest size={25}/>
        </a>
      </div> */}
    </div>
  );

}

export default ProductInfo;
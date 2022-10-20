import React, {useState, useEffect} from 'react';
import ProjectCarousel from './ProjectCarousel/ProjectCarousel.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import StyleSelector from './StyleSelector/StyleSelector.jsx';
// import AddToCart from './AddToCart/AddToCart.jsx';
import StarRating from '../shared/StarRating/StarRating.jsx';

import './Product.css';

const Product = ({productId, productInfo, productStyles}) => {
  // console.log(productId, productInfo, productStyles);
  const [currentStyle, setCurrentStyle] = useState(productStyles.styles[0]);

  return (
    <div className='Product'>

      <div className='product-carousel'>
        <ProjectCarousel slides={currentStyle.photos} />
      </div>

      <div className='product-dash'>
        <StarRating stars={4} />
        {/* {reviewCount ?
          <h5><a className="onclick" href="#reviews-div">See all reviews</a> {reviewCount}</h5>
          : <></>
        } */}
        <ProductInfo
          info={productInfo}
          styles={productStyles}
        />
        <StyleSelector
          styles={productStyles}
          // style={styles ? style : {}}
          // results={productStyles}
        />
        {/* <AddToCart skus={style ? style.skus : []}/> */}
      </div>

    </div>
  );

}

export default Product;

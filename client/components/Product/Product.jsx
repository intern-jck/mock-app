import React, {useState, useEffect} from 'react';
import Carousel from '../Carousel/Carousel.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
// import StyleSelector from './StyleSelector/StyleSelector.jsx';
import StarRating from '../shared/StarRating/StarRating.jsx';
import './Product.css';

const Product = ({productId, productInfo, productStyles}) => {
  console.log(productId, productInfo, productStyles);
  const [currentStyle, setCurrentStyle] = useState(productStyles.styles[0]);

  return (
    <div className='Product'>

      <div className='product-carousel'>
        <Carousel slides={currentStyle.photos.map((photo) => ({'img': photo.url}))} />
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
        {/* <StyleSelector
          styles={productStyles}
        /> */}
        {/* <AddToCart skus={style ? style.skus : []}/> */}
      </div>

    </div>
  );

}

export default Product;

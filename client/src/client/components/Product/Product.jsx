import React, { useState, useEffect } from 'react';
import Carousel from '../shared/Carousel/Carousel.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import StyleSelector from './StyleSelector/StyleSelector.jsx';
import AddToCart from './AddToCart/AddToCart.jsx';
import './Product.css';

const Overview = ({productId, productInfo, productStyles}) => {
  console.log(productId, productInfo, productStyles)
  // const [product, setProduct] = useState({});
  // const [styles, setStyles] = useState([]);
  // const [style, setStyle] = useState({});
  // const [rating, setRating] = useState(0);
  // const [fullscreen, setFullscreen] = useState(false);

  // useEffect(() => {
  //   setProduct(productInfo);
  //   setStyles(productStyles);
  //   if (productStyles) {
  //     setStyle(productStyles.results[0]);
  //   }
  //   if (reviews) {
  //     // Get avgerage rating.
  //     let ratingsSum = 0;
  //     for (let r of reviews.results) {
  //       ratingsSum += r.rating;
  //     }
  //     const avg = ratingsSum / reviews.count;
  //     setRating(avg);
  //   }
  // }, [productInfo, productStyles, reviews]);

  // const updateStyle = (obj) => {
  //   setStyle(obj);
  // };

  return (
    <div className='Product'>
      <Carousel slides={productStyles.photos} />
      <div className='overview-product-dash'>
        <ProductInfo
          name={productInfo.name}
          description={productInfo.description}
          // rating={rating}
          // reviewCount={reviews.count}
          price={productInfo.default_price}
          // salePrice={style.sale_price}
          category={productInfo.category}/>
        {/* <StyleSelector
          // styleHandler={updateStyle}
          // style={styles ? style : {}}
          results={productStyles}
          /> */}
        {/* <AddToCart skus={style ? style.skus : []}/> */}
      </div>
    </div>
  );

}

export default Overview;

import React, { useState, useEffect } from 'react';
import ProjectCarousel from './ProjectCarousel/ProjectCarousel.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
// import StyleSelector from './StyleSelector/StyleSelector.jsx';
// import AddToCart from './AddToCart/AddToCart.jsx';
import './Product.css';

const Product = ({productId, productInfo, productStyles}) => {
  // console.log(productId, productInfo, productStyles)

  // const [product, setProduct] = useState({});
  // const [styles, setStyles] = useState([]);
  // const [style, setStyle] = useState({});
  // const [rating, setRating] = useState(0);
  // const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    setProduct(productInfo);
    setStyles(productStyles);
    if (productStyles) {
      setStyle(productStyles.results[0]);
    }
    if (reviews) {
      // Get avgerage rating.
      let ratingsSum = 0;
      for (let r of reviews.results) {
        ratingsSum += r.rating;
      }
      const avg = ratingsSum / reviews.count;
      setRating(avg);
    }
  }, [productId, productStyles]);

  // const updateStyle = (obj) => {
  //   setStyle(obj);
  // };

  return (
    <div className='Product'>

      <div className='product-carousel'>
        <ProjectCarousel slides={productStyles} />
      </div>

      <div className='product-info'>
        <ProductInfo
          info={productInfo}
          // name={productInfo.name}
          // description={productInfo.description}
          // rating={rating}
          // reviewCount={reviews.count}
          // price={productInfo.default_price}
          // salePrice={style.sale_price}
          // category={productInfo.category}
        />
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

export default Product;

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Product from './components/Product/Product.jsx';
// import Questions from './components/Questions/Questions.jsx';
// import Reviews from './components/Reviews.jsx';
import './App.css';

const SERVER_IP = 'http://localhost:3000';

const App = () => {
  const [productId, setProductId] = useState(1);
  // All info stored in one state.
  const [productInfo, setProductInfo] =useState();
  const [productStyles, setProductStyles] =useState();

  useEffect(() => {
    // Get Products
    // axios.get(`${SERVER_IP}/products/${productId}`)
    // .then((response) => {
    //   setProductInfo(response.data[0])
    // })
    // .catch((error) => (console.log('Get Products Error:', error)));
    updateProduct(productId)
  }, []);

  const updateProduct = (id) => {
    // id = Number(id);
    axios
      .all([
        axios.get(`${SERVER_IP}/products/${productId}`),
        axios.get(`${SERVER_IP}/products/${productId}/styles`),
      ])
      .then(axios.spread((...responses) => {
        setProductInfo(responses[0].data[0]);
        setProductStyles(responses[1].data[0]);
      }))
      .catch((error) => (console.log(error)));
  };

  return (
    <div className='App'>
      {
        productInfo ?
        <>
          <Product
            productId={productId}
            productInfo={productInfo}
            productStyles={productStyles}
            // reviews={reviews}
            // stateHandler={updateState}
          />
          {/* <Questions
            id={productID}
            product={productAll.productInfo}
            questionsData={productAll.questions}
            stateHandler={updateState}/> */}
          {/* <Reviews
            id={productID}
            reviews={productAll.reviews}
            reviewsMeta={productAll.reviewsMeta}
            stateHandler={updateState}/> */}
        </> :
        <>!!!!PRODUCT CANT BE FOUND!!!!</>
      }
    </div>
  );

}

export default App;

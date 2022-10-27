import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Product from './components/Product/Product.jsx';
import Questions from './components/Questions/Questions.jsx';
// import Reviews from './components/Reviews.jsx';
import './App.css';

const SERVER_IP = 'http://localhost:3000';

const App = () => {
  const [productId, setProductId] = useState(1);
  // All info stored in one state.
  const [productInfo, setProductInfo] =useState();
  const [productStyles, setProductStyles] =useState();
  const [questions, setQuestions] = useState();

  useEffect(() => {
    getProduct(productId);
    getQuestions(productId);
  }, []);

  const getProduct = (id) => {
    axios
      .all([
        axios.get(`${SERVER_IP}/products/${id}`),
        axios.get(`${SERVER_IP}/products/${id}/styles`),
      ])
      .then(axios.spread((...responses) => {
        setProductInfo(responses[0].data[0]);
        setProductStyles(responses[1].data[0]);
      }))
      .catch((error) => (console.log(error)));
  };

  const getQuestions =(id) => {
    axios.get(`${SERVER_IP}/qa/questions/${id}`)
      .then((response) => {
        setQuestions(response.data[0].results);
      })
      .catch((error) => (console.log('get questions error:', error)));
  }

  return (
    <div className='App'>
      {
        productInfo ?
          <Product
            productId={productId}
            productInfo={productInfo}
            productStyles={productStyles}
            // reviews={reviews}
            // stateHandler={updateState}
          /> :
          null
      }
      {
        questions ?
          <Questions
            questions={questions}
            // product={productAll.productInfo}
            // questionsData={productAll.questions}
            // stateHandler={updateState}
          /> :
          null
      }
      {/* {
        reviews ?
          <Reviews
            id={productID}
            reviews={productAll.reviews}
            reviewsMeta={productAll.reviewsMeta}
            stateHandler={updateState}/> :
          null
      } */}
    </div>
  );
}

export default App;

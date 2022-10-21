import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Product from './components/Product/Product.jsx';
import Questions from './components/Questions/Questions.jsx';
import Reviews from './components/Reviews/Reviews.jsx';
import './App.css';

const SERVER_IP = 'http://localhost:3000';

const App = () => {
  const [productId, setProductId] = useState(1);
  // All info stored in one state.
  const [productInfo, setProductInfo] =useState();
  const [productStyles, setProductStyles] =useState();
  const [questions, setQuestions] = useState();
  const [reviews, setReviews] = useState();
  const [meta, setMeta] = useState();

  useEffect(() => {
    // Get Products
    // axios.get(`${SERVER_IP}/products/${productId}`)
    // .then((response) => {
    //   setProductInfo(response.data[0])
    // })
    // .catch((error) => (console.log('Get Products Error:', error)));
    getProduct(productId);
    getQuestions(productId);
    getReviews(productId);
    getMeta(productId);
  }, []);

  const getProduct = (id) => {
    // id = Number(id);
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

  const getReviews = (id) => {
    axios.get(`${SERVER_IP}/reviews/${id}`)
      .then((response) => {
        setReviews(response.data[0].results);
      })
      .catch((error) => (console.log('get reviews error:', error)));
  };

  const getMeta = (id) => {
    axios.get(`${SERVER_IP}/reviews/${id}/meta`)
    .then((response) => {
      setMeta(response.data[0].meta);
    })
    .catch((error) => (console.log('get meta error:', error)));
  };

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
      {
        reviews && meta ?
          <Reviews
            reviews={reviews}
            meta={meta}
            // reviews={productAll.reviews}
            // reviewsMeta={productAll.reviewsMeta}
            // stateHandler={updateState}
          /> :
          null
      }
    </div>
  );

}

export default App;

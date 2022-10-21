import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Product from './components/Product/Product.jsx';
import Questions from './components/Questions/Questions.jsx';
import Reviews from './components/Reviews/Reviews.jsx';
import './App.css';

const SERVER_IP = 'http://localhost:3000';

const App = () => {
  const [productId, setProductId] = useState(2);
  const [productInfo, setProductInfo] =useState();
  const [productStyles, setProductStyles] =useState();
  const [questions, setQuestions] = useState();
  const [reviews, setReviews] = useState();
  const [meta, setMeta] = useState();

  useEffect(() => {
    // getProduct(productId);
    // getQuestions(productId);
    // getReviews(productId);
    // getMeta(productId);
    getData(productId);
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
  };
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

  const getData = (id) => {
    axios
      .all([
        axios.get(`${SERVER_IP}/products/${id}`),
        axios.get(`${SERVER_IP}/products/${id}/styles`),
        axios.get(`${SERVER_IP}/qa/questions/${id}`),
        axios.get(`${SERVER_IP}/reviews/${id}`),
        axios.get(`${SERVER_IP}/reviews/${id}/meta`),
      ])
      .then(axios.spread((...responses) => {
        setProductInfo(responses[0].data[0]);
        setProductStyles(responses[1].data[0]);
        setQuestions(responses[2].data[0].results);
        setReviews(responses[3].data[0].results);
        setMeta(responses[4].data[0].meta);
      }))
      .catch((error) => (console.log('get all', error)));
  };

  return (
    <div className='App'>
      {
        productInfo ?
          <Product
            productId={productId}
            productInfo={productInfo}
            productStyles={productStyles}
            // rating={meta.ratings}
            // reviews={reviews}
          /> :
          null
      }

      {
        questions ?
          <Questions
            questions={questions}
            // answers={answers}
          /> :
          null
      }
      {
        reviews && meta ?
          <Reviews
            reviews={reviews}
            meta={meta}
          /> :
          null
      }
    </div>
  );

}

export default App;

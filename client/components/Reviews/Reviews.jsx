import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AddReview from './review/addreview/AddReview.jsx';
// import ReviewList from './review/reviewlist/ReviewList.jsx';
// import Rating from './review/rating/Rating.jsx';
// import ModalMain from './review/ModalMain.jsx';
// import Sorting from './review/Sorting.jsx';
// import ProducBd from './review/productbreakdown/ProductBd.jsx';
// import Search from './review/keywordsearch/Search.jsx';
// import filterBySearch from './review/filter.js'
import './Reviews.css';

function Reviews({reviews, meta}) {
  console.log(reviews, meta)
  // const [data, setData] = useState({});
  // const [list, setList] = useState(reviews.results);
  // const [filtedL, setFilterdL] = useState(reviews.results);
  // const [toggledStar, setToggledStar] = useState({1: false, 2: false, 3: false, 4: false, 5: false});
  // // const [starIsToggle, setStartIsToggle] = useState(false);
  // const [page, setPage] = useState(1);
  // const [sortOptions, setSortoptions] = useState('relevant');

  // function handleAddReview(data) {
  //   axios.post('/reviews', data)
  //     .then(res => console.log(res.status))
  //     .catch(err => console.error('Wait No'));
  // }

  // function handleNextPage() {
  //   setPage(page + 1);
  // }

  // useEffect(() => {
  //   updateState();
  // }, [page, sortOptions]);

  // function updateState() {
  //   stateHandler(id, page, 100, sortOptions)
  // }
  // // Sorting and next page

  // // Search

  // function handleSearch(input){
  //   if (input.length < 3) {
  //     setFilterdL(list);
  //     return;
  //   }
  //   const newList = filterBySearch(input, list);
  //   console.log('returned from Search: ', newList);
  //   setFilterdL(newList);
  // }

  // // End of Search

  // function handleSortChange(value) {
  //   setSortoptions(value);
  // }
  // const markedHelpful = (value, reviewId) => {
  //   if (value) {
  //     axios
  //         .put(`/reviews/${value}/helpful`)
  //         .then((response) => {
  //           stateHandler()
  //         })
  //         .catch((error) => ( console.log(error) ));
  //   }
  // };

  // function handleFilter(star) {

  //   setToggledStar(() => {
  //     const prevValue = toggledStar;
  //     prevValue[star] = !prevValue[star];
  //     return prevValue;
  //   });
  // }
  // const chars = reviewsMeta.characteristics;
  // const ratings = reviewsMeta.ratings;

  return (
    <div className="Reviews">
      {/* {
        chars && (
          <div className="reviewsContainer">
            <div className="LeftPage">
              <div className="ratingcontainer">
                <Rating handleFilter={handleFilter} id={id} ratings={ratings} />
              </div>
              <div className="productIdContainer">
                <ProducBd chars={chars} />
              </div>
            </div>
            <div>
              <Search handleSearch={handleSearch} />
              <Sorting handleSortChange={handleSortChange} currentOption={sortOptions} />
              <div className="revieListAndAddReviewContainer">
                <ReviewList markedHelpful={markedHelpful} handleNextPage={handleNextPage} reviews={filtedL} />
                <ModalMain handleSubmit={handleAddReview} id={id} chars={chars} />
              </div>
            </div>
          </div>
        )
      } */}
      <div className='reviews-meta'>
        <h3>RATINGS</h3>
        <h3>RECOMMENED</h3>
        <h3>CHARACTERISTICS</h3>
      </div>
      <div className='reviews-list'>
        {
          reviews.map((review, i) => {
            return (
              <div>
                <h3>{review.body}</h3>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Reviews;

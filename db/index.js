const {connect} = require('mongoose');
const {addProducts, addProductFeatures, addProductStyles, addProductSkus, addProductPhotos} = require('./products/productsETL.js');
const {addQuestions, addAnswers, addAnswerPhotos} = require('./questions/questionsETL.js');
const {addReviews, addReviewPhotos, addReviewCharacteristics, updateReviewCharacteristics} = require('./reviews/reviewsETL.js');

// Location of test csv data.

// Products
const productsCSV = '../testData/products/products10k.csv';
const featuresCSV = '../testData/products/features10k.csv';
const stylesCSV = '../testData/products/styles10k.csv';
const skusCSV = '../testData/products/skus10k.csv';
const productPhotosCSV = '../testData/products/photos10k.csv';

//Questions
const questionsCSV = '../testData/questions/questions10k.csv';
const answersCSV = '../testData/questions/answers10k.csv';
const answerPhotosCSV = '../testData/questions/answers_photos10k.csv';

//Related
const relatedCSV = '../testData/related/related10k.csv';

// Reviews
const reviewsCSV = '../testData/reviews/reviews10k.csv';
const reviewPhotosCSV = '../testData/reviews/reviews_photos10k.csv';
const characteristicsCSV = '../testData/reviews/characteristics10k.csv';
const characteristicReviewsCSV = '../testData/reviews/characteristic_reviews10k.csv';

// Connect to local db using user info.
connect('mongodb://127.0.0.1:27017/mockapp',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => (console.log(`ETL connected to MongoDB!`)))
  .catch((err) => (console.log(`MongoDB ERR ${err}`)));

// Build Products Collection
addProducts(productsCSV)
.then((rowCount) => {
  console.log(`Added ${rowCount} Products`)
  return addProductFeatures(featuresCSV);
})
.then((rowCount) => {
  console.log(`Added ${rowCount} Features`)
  return addProductStyles(stylesCSV);
})
.then((rowCount) => {
  console.log(`Added ${rowCount} Styles`)
  return addProductSkus(skusCSV);
})
.then((rowCount) => {
  console.log(`Added ${rowCount} Skus`)
  return addProductPhotos(productPhotosCSV);
})
.then((rowCount) => {
  console.log(`Added ${rowCount} Photos`)
  console.log('Products Collection Complete!');
})
.catch((error) => (console.log(error)));

// Build Questions Collection
// addQuestions(questionsCSV)
// .then((rowCount) => {
//   console.log(`Added ${rowCount} Questions`)
//   return addAnswers(answersCSV);
// })
// .then((rowCount) => {
//   console.log(`Added ${rowCount} Answers`)
//   return addAnswerPhotos(answerPhotosCSV);
// })
// .then((rowCount) => {
//   console.log(`Added ${rowCount} Answer Photos`)
// })
// .catch((error) => (console.log(error)));

// Build Reviews Collection
// addReviews(reviewsCSV)
// .then((rowCount) => {
//   console.log(`Added ${rowCount} Reviews`)
//   return addReviewPhotos(reviewPhotosCSV);
// })
// .then((rowCount) => {
//   console.log(`Added ${rowCount} Review Photos`)
//   return addReviewCharacteristics(characteristicsCSV);
// })
// .then((rowCount) => {
//   console.log(`Added ${rowCount} Review Characteristics`)
//   updateReviewCharacteristics(characteristicReviewsCSV);
// })
// .then((rowCount) => {
//   console.log(`Updated ${rowCount} Review Characteristics`)
// })
// .catch((error) => (console.log(error)));

// Sit back and sip your coffee

// TODO: Implement this
// Promise.all([
//   addProducts,
//   // addProductFeatures,
//   // addProductStyles,
//   // addProductSkus,
//   // addProductPhotos,
//   // addQuestion,
//   // addAnswer,
//   // addAnswerPhotos,
//   // addReviews,
//   // addReviewPhotos,
//   // addReviewCharacteristics,
//   // updateReviewCharacteristics
// ]).then((values) => {
//   console.log('P ALL: ', values)
// });

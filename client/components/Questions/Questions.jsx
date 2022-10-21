import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Question from "./questions/Question.jsx";
// import QuestionModal from "./questions/QuestionModal.jsx";
import { GoSearch } from 'react-icons/go';

import './Questions.css';

const Questions = ({questions}) => {
  console.log(questions);
  // const [productID, setProductID] = useState(id);
  // const [questions, setQuestions] = useState([]);
  // const [qLimit, setQLimit] = useState(2);
  // const [currentProduct, setCurrentProduct] = useState(product);
  // const [productName, setProductName] = useState('');
  // const [filteredResults, setFilteredResults] = useState([]);
  // const [questionHidden, setQuestionHidden] = useState(true);

  // useEffect(() => {
  //   if (questionsData) {
  //     setQuestions(questionsData);
  //   }

  //   if (product) {
  //     setProductName(product.name);
  //   }
  // }, [questionsData, product]);

  // const updateState = () => {
  //   stateHandler(productID, 1, 100);
  // }
  // const markHelpful = (event) => {
  //   event.preventDefault();
  //   // const target = event.target;
  //   // const name = target.name;
  //   const {name, value} = event.target;

  //   if (name === 'helpful-question') {
  //     axios
  //       .put(`/qa/questions/${value}/helpful`)
  //       .then((response) => ( updateState() ))
  //       .catch((error) => ( console.log(error) ));
  //   } else if (name === 'helpful-answer') {
  //     axios
  //       .put(`/qa/answers/${value}/helpful`)
  //       .then((response) => ( updateState() ))
  //       .catch((error) => ( console.log(error) ));
  //   }
  // };
  // const report = (event) => {
  //   event.preventDefault();
  //   // const target = event.target;
  //   // const name = target.name;
  //   // const id = target.getAttribute('value');
  //   const {name, value} = event.target;

  //   if (name === 'report-question') {
  //     axios
  //       .put(`/qa/questions/${value}/report`)
  //       .then((response) => ( updateState() ))
  //       .catch((error) => ( console.log(error) ));
  //   } else if (name === 'report-answer') {
  //     axios
  //       .put(`/qa/answers/${value}/report`)
  //       .then((response) => ( updateState() ))
  //       .catch((error) => ( console.log(error) ));
  //   }

  // };
  // const addQuestion = (data) => {
  //   axios
  //     .post('/qa/questions', data)
  //     .then((response) => ( updateState() ))
  //     .catch((error) => ( console.log(error) ));
  // };
  // const addAnswer = (data) => {
  //   axios
  //     .post(`/qa/questions/${data.question_id}/answers`, data)
  //     .then((response) => ( updateState() ))
  //     .catch((error) => ( console.log(error) ));
  // };
  // const showQuestionModal = (event) => {
  //   event.preventDefault();
  //   setQuestionHidden(false);
  // };
  // const hideQuestionModal = (event) => {
  //   event.preventDefault();
  //   setQuestionHidden(true);
  // };
  // const showMoreQuestions = (event) => {
  //   const target = event.target;
  //   let newLimit = qLimit;
  //   newLimit += 2;
  //   setQLimit(newLimit);
  //   // if questions.length < newLimit, hide more question button
  //   if (questions.length <= newLimit) {
  //     target.classList.toggle('questions-hide-button');
  //   }
  // };
  // // Set the query to whatever is typed in search bar.
  // const onChangeHandler = (event) => {
  //   event.preventDefault();
  //   const target = event.target;
  //   const value = target.value;
  //   if (value && value.length >= 3) {
  //     let results = [];
  //     // testing                              // somethingSOmthing.sdomsdf@adsgo3333masdgomads.com
  //     const regex = new RegExp(value, 'g'); // /[a-zA-Z].[a-zA-Z]@[a-zA-Z0-9].[com, edu, org]/
  //     for (let q of questions) {
  //       const body = q.question_body.toLowerCase();
  //       let matchArr = [...body.matchAll(regex)];
  //       if (matchArr.length > 0) {
  //         results.push(q);
  //       }
  //     }
  //     if (results.length > 0) {
  //       setQuestions(results);
  //     }
  //   } else {
  //     setQuestions(questionsData);
  //   }
  // };

  return (
    <div className="Questions">
      {
        questions.map((question, i) => {
          return (
            <div key={i} className='question-div'>
              <h3>{question.question_body}</h3>
            </div>
          )
        })
      }
    </div>
  )

};

export default Questions;

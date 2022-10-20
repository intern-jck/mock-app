
      {/* <QuestionModal id={productID} productName={productName} hidden={questionHidden} hide={hideQuestionModal} submitHandler={addQuestion}/>

      {/* Search Bar */}
      <div className="question-search">
        <input
          type="search"
          onChange={onChangeHandler}
          placeholder="Have a question? Search for answers..." />
          <GoSearch size={20}/>
      </div>

      <div className="questions-list">
        { questions ? questions.map((q, i) => {
          if (i < qLimit) {
            return (
              <Question
                key={q.question_id}
                productName={productName}
                id={q.question_id}
                body={q.question_body}
                date={q.question_date}
                name={q.asker_name}
                helpfulness={q.question_helpfulness}
                reported={q.reported}
                answers={q.answers}
                helpfulHandler={markHelpful}
                reportHandler={report}
                submitHandler={addAnswer}
                />
              )
            }
          }) : null
        }
      </div>

      <div className="questions-actions">
        <button
          className="questions-more-btn onclick"
          hidden={questions.length <= 2 ? true : false}
          onClick={showMoreQuestions}>MORE ANSWERED QUESTIONS</button>
        <button
          className="questions-add-btn onclick"
          onClick={showQuestionModal}>ADD A QUESTION +</button>
      </div> */}

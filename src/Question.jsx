/* eslint-disable react/prop-types */

import Option from "./Option";

function Question({ question, dispatch, answer }) {
  console.log(question);
  return (
    <div>
      <h1 className="text-white font-mono text-center mt-5 text-2xl">
        {question.question}
      </h1>
      <Option answer={answer} dispatch={dispatch} question={question} />
    </div>
  );
}
export default Question;

/* eslint-disable react/prop-types */

import Button from "./Button";

function Option({ question, dispatch, answer }) {
  return (
    <div>
      {question.options.map((option, i) => (
        <Button
          answer={answer}
          dispatch={dispatch}
          key={option}
          option={option}
          num={i}
          question={question}
        />
      ))}
    </div>
  );
}
export default Option;

/* eslint-disable react/prop-types */


function Button({ option, num, dispatch, answer, question }) {
  const hasClicked = answer !== null;

  console.log(question.correctOption);

  return (
    <button
      disabled={hasClicked}
      onClick={() => dispatch({ type: "ansSelect", payload: num })}
      className={`${
        !hasClicked
          ? "rounded-full font-mono p-2 px-10 block m-auto bg-slate-300 mt-4 text-black text-2xl hover:bg-gray-600"
          : "rounded-full font-mono p-2 px-10 block m-auto bg-slate-300 mt-4 text-black text-2xl"
      }  ${
        hasClicked
          ? num == question.correctOption
            ? "bg-orange-400"
            : "bg-slate-400"
          : ""
      }`}
    >
      {option}
    </button>
  );
}
export default Button;

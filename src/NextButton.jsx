/* eslint-disable react/prop-types */
function NextButton({ dispatch, numberOfQuestion, index }) {
  if (index < numberOfQuestion - 1)
    return (
      <button
        onClick={() => dispatch({ type: "newQuestion" })}
        className="mt-20 ml-96 bg-center m-auto rounded-full hover: p-3 text-2xl hover:bg-blue-600 font-mono bg-blue-500 text-black"
      >
        Next
      </button>
    );
  if (index == numberOfQuestion - 1)
    return (
      <button
        onClick={() => dispatch({ type: "finished" })}
        className="mt-20 ml-96 bg-center m-auto rounded-full hover: p-3 text-2xl hover:bg-blue-600 font-mono bg-blue-500 text-black"
      >
        Finish
      </button>
    );
}
export default NextButton;

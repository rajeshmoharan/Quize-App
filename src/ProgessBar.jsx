/* eslint-disable react/prop-types */
function ProgessBar({ numberOfQuestion, index, question, total }) {
  return (
    <header className="text-center">
      <progress className="w-6/12 rounded-full" max={numberOfQuestion} value={index} />
      <div className="flex justify-evenly">
        <p className="text-white text-lg font-mono">
          Questions {index}/{numberOfQuestion}
        </p>
        <p className="text-white text-lg font-mono">
          {question[index].points}/{total}
        </p>
      </div>
    </header>
  );
}
export default ProgessBar;

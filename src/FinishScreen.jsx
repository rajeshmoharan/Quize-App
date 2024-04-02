/* eslint-disable react/prop-types */
function FinishScreen({ point }) {
  return (
    <div className="inline ml-96 p-2 text-center mt-8 text-3xl text-white font-mono rounded-full bg-gray-500  w-50 ">
      <h1 className="inline text-center">
        You Finished the Quize❤️ Score is {point}
      </h1>
    </div>
  );
}
export default FinishScreen;

/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

function StartScreen({ numberOfQuestion,dispatch }) {
  return (
    <div className="text-center mt-7 text-white font-mono">
      <h1 className="text-5xl">Welcome to React Quiz!</h1>
      <p className="text-2xl mt-4">
        {numberOfQuestion} question to test your React mastry
      </p>
      <button onClick={() => dispatch({type : "start"})} className="rounded-full mt-5 border-white text-black bg-white p-3 font-bold hover:bg-blue-500">
        Let's Start
      </button>
    </div>
  );
}
export default StartScreen;

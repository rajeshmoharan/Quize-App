/* eslint-disable no-case-declarations */
import { useEffect, useReducer } from "react";
import Header from "./Header";
import Section from "./Section";
import Loading from "./Loading";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import ProgessBar from "./ProgessBar";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";

const timer_constant = 1;

const initialState = {
  question: [],
  status: "loading",
  index: 0,
  answer: null,
  point: 0,
  timerObject: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataRecived":
      return { ...state, question: action.payload, status: "ready" };
    case "dataError":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        timerObject: state.question.length * timer_constant,
      };
    case "ansSelect":
      const question = state.question.at(state.index);

      return {
        ...state,
        answer: action.payload,
        point:
          action.payload === question.correctOption
            ? state.point + question.points
            : state.point,
      };
    case "newQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        timerObject: state.question.length * timer_constant,
      };
    case "finished":
      return { ...state, status: "finished" };
    case "timer":
      return {
        ...state,
        timerObject:
          state.timerObject === 0
            ? state.question.length * timer_constant
            : state.timerObject - 1,
        // status: state.timerObject == 0 ? "finished" : state.status,
        index: state.timerObject === 0 ? state.index + 1 : state.index,
      };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // eslint-disable-next-line no-unused-vars
  const { question, status, index, answer, point, timerObject } = state;

  const numberOfQuestion = question.length;
  const total = question.reduce((pre, cur) => {
    return pre + cur.points;
  }, 0);

  useEffect(() => {
    fetch(`http://localhost:9000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      // eslint-disable-next-line no-unused-vars
      .catch((err) => dispatch({ type: "dataError" }));
  }, []);

  return (
    <div className="bg-slate-700 w-full h-screen">
      <Header />
      <Section>
        {status === "loading" && <Loading />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen
            dispatch={dispatch}
            numberOfQuestion={numberOfQuestion}
          />
        )}
        {status === "active" && (
          <>
            <ProgessBar
              total={total}
              numberOfQuestion={numberOfQuestion}
              index={index}
              question={question}
            />
            <Question
              answer={answer}
              dispatch={dispatch}
              question={question[index]}
            />
            <Timer dispatch={dispatch} timerObject={timerObject} />
            <NextButton
              dispatch={dispatch}
              numberOfQuestion={numberOfQuestion}
              index={index}
            />
          </>
        )}
        {status === "finished" && <FinishScreen point={point} />}
      </Section>
    </div>
  );
}
export default App;

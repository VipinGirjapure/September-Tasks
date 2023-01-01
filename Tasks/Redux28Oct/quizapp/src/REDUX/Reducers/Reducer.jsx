const initialState = {
  quizQuestions: [],
  adminQuizQuestions: [],
  answers: [],
};
const QuizReducer = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case "QUE":
      return {
        ...state,
        quizQuestions: action.payload,
      };
    case "ANS":
      const isAvailable = state.answers.find((i) => i.id === action.payload.id);
      return isAvailable
        ? {
            ...state,
            answers: state.answers.map((i) =>
              i.id === action.payload.id
                ? { ...i, correct: action.payload.correct }
                : i
            ),
          }
        : {
            ...state,
            answers: [...state.answers, action.payload],
          };

    default:
      return state;
  }
};

export default QuizReducer;

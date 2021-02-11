import {
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
} from "../constants/actionsTypes";

const intialState = {
  list: [],
};

const reducerTask = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, list: [...state.list, action.payload] };

    case DELETE_TASK:
      return {
        ...state,
        list: state.list.filter((el) => el.id !== action.payload),
      };

    case COMPLETE_TASK:
      return {
        ...state,
        list: state.list.map((el) =>
          el.id === action.id ? { ...el, isDone: !el.isDone } : el
        ),
      };

    default:
      return state;
  }
};

export default reducerTask;

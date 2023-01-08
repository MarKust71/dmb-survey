import { Action, State } from './reducer.types';

export const initialState = {
  currentChapter: 0,
  currentQuestion: 0,
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_CURRENT_CHAPTER':
      return {
        ...state,
        currentChapter: action.payload,
      };

    case 'SET_CURRENT_QUESTION':
      return {
        ...state,
        currentQuestion: action.payload,
      };

    default:
      return state;
  }
}

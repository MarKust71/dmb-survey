export enum ActionType {
  SET_CURRENT_CHAPTER = 'SET_CURRENT_CHAPTER',
  SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION',
}

export type State = {
  currentChapter: number;
  currentQuestion: number;
};

export type Action = {
  type: ActionType;
  payload: number;
};

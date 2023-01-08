import { useContext, useMemo } from 'react';

import { chapters } from 'constants/constants';
import { ActionType } from 'reducer/reducer.types';
import { ReducerContext } from '../../App';

export const useQuestions = () => {
  const { state, dispatch } = useContext(ReducerContext);
  const { currentChapter, currentQuestion } = state;

  const currentChapterId = useMemo(() => chapters[currentChapter].id, [currentChapter]);
  const currentChapterTitle = useMemo(
    () => `${chapters[currentChapter].id}. ${chapters[currentChapter].title}`,
    [currentChapter],
  );
  const currentQuestionId = useMemo(() => {
    if (chapters[currentChapter].questions?.length) {
      return chapters[currentChapter].questions[currentQuestion].id;
    }

    return '';
  }, [currentChapter, currentQuestion]);

  const nextQuestion = () => {
    if (currentQuestion < chapters[currentChapter].questions.length - 1) {
      dispatch({ type: ActionType.SET_CURRENT_QUESTION, payload: currentQuestion + 1 });

      return;
    }

    if (currentChapter < chapters.length - 1) {
      dispatch({ type: ActionType.SET_CURRENT_CHAPTER, payload: currentChapter + 1 });
      dispatch({ type: ActionType.SET_CURRENT_QUESTION, payload: 0 });

      return;
    }
  };
  const prevQuestion = () => {
    if (currentQuestion !== 0) {
      dispatch({ type: ActionType.SET_CURRENT_QUESTION, payload: currentQuestion - 1 });

      return;
    }

    if (currentChapter !== 0) {
      const newCurrentChapter = currentChapter - 1;
      dispatch({ type: ActionType.SET_CURRENT_CHAPTER, payload: newCurrentChapter });
      dispatch({
        type: ActionType.SET_CURRENT_QUESTION,
        payload: chapters[newCurrentChapter].questions.length ? chapters[newCurrentChapter].questions.length - 1 : 0,
      });

      return;
    }
  };

  return { currentChapterTitle, currentChapter, currentChapterId, currentQuestionId, nextQuestion, prevQuestion };
};

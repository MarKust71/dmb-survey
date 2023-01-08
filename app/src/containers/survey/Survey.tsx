import React from 'react';
import { useTheme } from '@mui/material';

import { ChapterContainer } from 'components/chapterContainer/ChapterContainer';
import { ChapterTitle } from 'components/chapterTitle/ChapterTitle';
import { QuestionA1 } from 'components/questions/questionA1/QuestionA1';
import { QuestionA2 } from 'components/questions/questionA2/QuestionA2';
import { QuestionA4 } from 'components/questions/questionA4/QuestionA4';
import { QuestionA3 } from 'components/questions/questionA3/QuestionA3';
import { QuestionB1 } from 'components/questions/questionB1/QuestionB1';
import { QuestionB2 } from 'components/questions/questionB2/QuestionB2';
import { QuestionB3 } from 'components/questions/questionB3/QuestionB3';
import { QuestionB4 } from 'components/questions/questionB4/QuestionB4';
import { QuestionB5 } from 'components/questions/questionB5/QuestionB5';
import { QuestionB6 } from 'components/questions/questionB6/QuestionB6';
import { QuestionB7 } from 'components/questions/questionB7/QuestionB7';
import { QuestionC1 } from 'components/questions/questionC1/QuestionC1';
import { QuestionC2 } from 'components/questions/questionC2/QuestionC2';
import { QuestionC3 } from 'components/questions/questionC3/QuestionC3';
import { useQuestions } from 'hooks/useQuestions/useQuestions';
import { ChapterFooter } from 'components/chapterFooter/ChapterFooter';

import { SurveyProps } from './Survey.types';
import { useStyles } from './Survey.styles';

export const Survey: React.FC<SurveyProps> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { currentChapterTitle, currentChapterId, currentQuestionId, nextQuestion, prevQuestion } = useQuestions();

  return (
    <ChapterContainer>
      <ChapterTitle>{currentChapterTitle}</ChapterTitle>

      <Question chapter={currentChapterId} question={currentQuestionId} />

      <ChapterFooter onClickNext={nextQuestion} onClickPrev={prevQuestion} />
    </ChapterContainer>
  );
};

function Question({ chapter, question }: { chapter: string; question: string }) {
  if (chapter === 'A') {
    switch (question) {
      case '1':
        return <QuestionA1 />;

      case '2':
        return <QuestionA2 />;

      case '3':
        return <QuestionA3 />;

      case '4':
        return <QuestionA4 />;

      default:
        break;
    }
  }

  if (chapter === 'B') {
    switch (question) {
      case '1':
        return <QuestionB1 />;

      case '2':
        return <QuestionB2 />;

      case '3':
        return <QuestionB3 />;

      case '4':
        return <QuestionB4 />;

      case '5':
        return <QuestionB5 />;

      case '6':
        return <QuestionB6 />;

      case '7':
        return <QuestionB7 />;

      default:
        break;
    }
  }

  if (chapter === 'C') {
    switch (question) {
      case '1':
        return <QuestionC1 />;

      case '2':
        return <QuestionC2 />;

      case '3':
        return <QuestionC3 />;

      default:
        break;
    }
  }

  return null;
}

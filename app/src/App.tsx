import React, { createContext, useReducer, Dispatch } from 'react';
import { Helmet } from 'react-helmet';
import { Theme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';

import { Survey } from './containers/survey/Survey';
import { theme } from './theme/theme';
import { initialState, reducer } from './reducer/reducer';
import { Action } from './reducer/reducer.types';

declare module '@mui/styles/defaultTheme' {
  type DefaultTheme = Theme;
}

export const ReducerContext = createContext({ state: initialState, dispatch: (() => null) as Dispatch<Action> });

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeProvider theme={theme}>
      <Helmet defaultTitle="dMb: Ankieta" />

      <ReducerContext.Provider value={{ state, dispatch }}>
        <Survey />
      </ReducerContext.Provider>
    </ThemeProvider>
  );
}

export default App;

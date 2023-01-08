import { renderHook } from '@testing-library/react-hooks';

import { useQuestions } from './useQuestions';

describe('useQuestions', () => {
  test('returns a value', async () => {
    const { result } = renderHook(() => useQuestions());

    expect(result.current).toEqual('1');
  });
});
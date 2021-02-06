import { useState, useCallback } from 'react';
import { fetchByUserName } from '../../../../api/api';
import { ApiResponse } from '../../../../api/api.types';
import { debounce } from '../../../../helpers/helpers';

type HookReturnType = {
  gists: ApiResponse['data'];
  isError: boolean;
  isLoading: boolean;
  isFinishedOnce: boolean;
  debouncedRequest: (username: string) => Promise<void>;
};

export const UseGetGists = (): HookReturnType => {
  const [gists, setGists] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFinishedOnce, setIsFinishedOnce] = useState(false);

  const debouncedFetch = debounce(async (username: string) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const res = await fetchByUserName(username);
      setGists(res.data);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
      setIsFinishedOnce(true);
    }
  }, 400);

  const debouncedRequest = useCallback((value: string) => debouncedFetch(value), []);

  return { gists, isError, isLoading, isFinishedOnce, debouncedRequest };
};

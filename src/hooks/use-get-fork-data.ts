import { useState, useRef } from 'react';
import { fetchForks } from '../api/api';
import { ForksApiResponse } from '../api/api.types';

type HookReturnType = {
  forks: ForksApiResponse[];
  getForksData: () => Promise<void>;
  isLoading: boolean;
  isFinishedOnce: boolean;
};

export const useGetForksData = (url: string): HookReturnType => {
  const [isFinishedOnce, setIsFinishedOnce] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const forksRef = useRef<ForksApiResponse[]>();

  const getForksData = async () => {
    try {
      setIsLoading(true);
      const res = await fetchForks(url);
      forksRef.current = res.data;
    } catch (e) {
      console.warn(e.message);
    } finally {
      setIsFinishedOnce(true);
      setIsLoading(false);
    }
  };
  return { forks: forksRef.current, isLoading, isFinishedOnce, getForksData };
};

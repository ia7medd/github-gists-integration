import { useState, useRef } from 'react';
import { fetchForks } from '../../../../api/api';
import { ForksApiResponse } from '../../../../api/api.types';

type HookReturnType = {
  forks: ForksApiResponse[];
  getForksData: () => Promise<void>;
  isFinishedOnce: boolean;
};

export const useGetForksData = (url: string): HookReturnType => {
  const [isFinishedOnce, setIsFinishedOnce] = useState(false);
  const forksRef = useRef<ForksApiResponse[]>();

  const getForksData = async () => {
    try {
      const res = await fetchForks(url);
      forksRef.current = res.data;
    } catch (e) {
      console.warn(e.message);
    } finally {
      setIsFinishedOnce(true);
    }
  };
  return { forks: forksRef.current, isFinishedOnce, getForksData };
};

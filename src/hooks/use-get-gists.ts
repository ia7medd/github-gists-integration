import { useState, useRef, useEffect } from 'react';
import { fetchByUserName } from '../api/api';
import { ApiResponse } from '../api/api.types';

type HookReturnType = {
  gists: ApiResponse['data'];
  isError: boolean;
  isLoading: boolean;
  isFinishedOnce: boolean;
  isLoadingPage: boolean;
  getNextPage: (page: number) => void;
  mayHaveMoreData: boolean;
};

const PER_PAGE = 10;

export const UseGetGists = (user: string): HookReturnType => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPage, setIsLoadingPage] = useState(false);

  const gistsRef = useRef([]);
  const mayHaveMoreRef = useRef();
  const isErrorRef = useRef(false);
  const isFinishedOnceRef = useRef(false);

  useEffect(() => {
    if (!user) return null;

    // Timeout here will act as debounce, as it will make sure not to call the api unless user stopped type
    const timeOut = setTimeout(() => {
      gistsRef.current = [];
      setIsLoading(true);
      getData();
    }, 300);

    return () => clearTimeout(timeOut);
  }, [user]);

  const getNextPage = (page: number) => {
    setIsLoadingPage(true);
    getData(page);
  };

  const getData = async (page: number = 1) => {
    isErrorRef.current = false;
    try {
      const res = await fetchByUserName(user, page, PER_PAGE);
      gistsRef.current = [...gistsRef.current, ...res.data];
      mayHaveMoreRef.current = res.data.length === PER_PAGE ? true : false;
    } catch (e) {
      isErrorRef.current = true;
    } finally {
      isFinishedOnceRef.current = true;
      setIsLoading(false);
      setIsLoadingPage(false);
    }
  };

  return {
    isLoading,
    isLoadingPage,
    gists: gistsRef.current,
    isError: isErrorRef.current,
    isFinishedOnce: isFinishedOnceRef.current,
    mayHaveMoreData: mayHaveMoreRef.current,
    getNextPage,
  };
};

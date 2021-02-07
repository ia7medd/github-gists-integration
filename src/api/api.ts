import axios from 'axios';
import { apiHeaders, appRootUrl } from './api.types';
/**
 * fetchByUserName, its a function which will call the user search api via axios.
 * @param searchTerm the text typed by user in the input text.
 *
 * @returns Promise<AxiosResponse<any>>
 */
export const fetchByUserName = async (searchTerm: string, page: number, per_page: number) =>
  axios.get(appRootUrl + `users/${searchTerm}/gists`, {
    headers: apiHeaders,
    params: { per_page, page },
  });

/**
 *
 */

export const fetchForks = async (url: string) =>
  axios.get(url, {
    headers: apiHeaders,
  });

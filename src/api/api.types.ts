export interface IKeyValuePair {
  [key: string]: any;
}

export interface IKeyValuePairGeneric<T> {
  [key: string]: T;
}

type OwnerType = {
  avatar_url: string;
  html_url: string;
  url: string;
  login: string;
  type: string;
};

/**
 * ApiResponse, its an interface to describe the type of response we will get by calling the github API.
 */
export interface ApiResponse {
  data: {
    comments: 0;
    comments_url: string;
    commits_url: string;
    created_at: string;
    description: string;
    id: string;
    html_url: string;
    forks_url: string;
    files: IKeyValuePairGeneric<{
      language: string;
      type: string;
    }>;
    owner: OwnerType;
    updated_at: string;
    url: string;
    user: null;
  }[];
}

/**
 * ForksApiResponse
 */
export interface ForksApiResponse {
  comments: number;
  id: string;
  owner: OwnerType;
}

/**
 * Github root Url
 */
export const appRootUrl: string = 'https://api.github.com/';

//   /**
//    * GitHub URLs for search by users or reposotpries
//    */
//   export const apiUrls = {
//     usersGist: appRootUrl + 'users/{USERNAME}/gists',
//   };

/**
 * Our api headers, which will be user inside an http call.
 */
export const apiHeaders = {
  Accept: 'application/vnd.github.v3+json',
};

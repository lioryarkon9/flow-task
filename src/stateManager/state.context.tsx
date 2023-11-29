import React from "react";

import { TPost } from "../types/posts.types";
import { TUser } from "../types/users.types";

import { MOCK_POSTS } from "../mock_data/posts.mock";
import { MOCK_USERS } from "../mock_data/users.mock";

import { toDictionaryById } from "../utils/utils";

type TState = {
  posts: null | TPost[];
  users: null | { [key: number]: TUser };
};
type TUiPost = TPost & {
  userName: string | undefined;
};
type TUiState = {
  uiPosts: null | TUiPost[];
};

const INITIAL_STATE: TUiState = {
  uiPosts: null,
};

const PostsContext = React.createContext(INITIAL_STATE);

const fakePostsApi = () => Promise.resolve(MOCK_POSTS);
const fakeUsersApi = () => Promise.resolve(MOCK_USERS);

export function StateProvider({ children }: { children: JSX.Element }) {
  const [posts, setPosts] = React.useState<TState["posts"]>(null);
  const [users, setUsers] = React.useState<TState["users"]>(null);

  const uiPosts = React.useMemo(
    () =>
      posts?.map((post) => {
        const postAuthorId = post.userId;

        return {
          ...post,
          userName: users ? users[postAuthorId]?.name : undefined,
        };
      }) ?? null,
    [posts, users]
  );

  React.useEffect(function getAppData() {
    // fetch("http://rest.flowsec.xyz/posts")
    //   .then(httpResponse => httpResponse.json())
    //   .then(setPosts)
    fakePostsApi().then(setPosts);

    fakeUsersApi().then((users) => setUsers(toDictionaryById(users)));
  }, []);

  const contextValue: TUiState = { uiPosts };

  return (
    <PostsContext.Provider value={contextValue}>
      {children}
    </PostsContext.Provider>
  );
}

export const useAppState = () => React.useContext(PostsContext);



export type InitialStateType = {
    posts: string[],
    FetchedPosts:Array<string>
}

export enum DefenitionActionPosts  {
    CREATE_POST = 'CREATE_POST'
}
type CreatePostActionType = {
     type: DefenitionActionPosts.CREATE_POST,
     payload: string[] }

export type ActionType = CreatePostActionType


export type InitialStateType = {
    posts: any,
    FetchedPosts:Array<string>,
    loader: boolean
}

export enum DefenitionActionPosts  {
    CREATE_POST = 'CREATE_POST',
    FETCH_POST = 'FETCH_POST',
    SHOW_LOADER ='SHOW_LOADER',
    HIDE_LOADER ='HIDE_LOADER'
}

export type NewPostType  = {
    title: string,
    id: string
}
export type CreatePostActionType = {
     type: DefenitionActionPosts.CREATE_POST,
     payload: NewPostType }

export type ActionType = CreatePostActionType
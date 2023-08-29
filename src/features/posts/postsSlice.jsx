import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, title: "One Provident cupiditate voluptatem et in.", content: "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi."},
    {id: 2, title: "Two Provident cupiditate voluptatem et in.", content: "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi."}
]

export const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{}
})

export default postsSlice.reducer;
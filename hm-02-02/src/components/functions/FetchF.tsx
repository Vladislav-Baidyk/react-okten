const GetPosts  = async () => {
    return await fetch(import.meta.env.VITE_API_URL + '/' + "posts")
            .then(res => res.json());
}


const GetComment = async () => {
    return await fetch(import.meta.env.VITE_API_URL + '/' + "comments")
            .then(res => res.json());
}
export {
    GetPosts,
    GetComment
}
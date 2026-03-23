const GetPosts  = async () => {
    return await fetch(import.meta.env.VITE_API_URL + '/' + "posts")
            .then(res => res.json());
}
export {
    GetPosts
}
const getToDo = async () => {
    return await fetch(import.meta.env.VITE_API_URL)
        .then(value => value.json());
}
export{
    getToDo
}
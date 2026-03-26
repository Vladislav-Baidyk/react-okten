
export const FetchUrlDummy = async (name:string) => {
    return await fetch(import.meta.env.VITE_DUMMY_API + name)
        .then(res => res.json());
};
export const FetchUrlPlace = async (name:string) => {
    return await fetch(import.meta.env.VITE_PLACEHOLDER_API + name)
        .then(res => res.json());
};
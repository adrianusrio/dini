export const getContent = (path) => {
    return{
        type : 'GETCONTENT',
        payload : path
    };
}
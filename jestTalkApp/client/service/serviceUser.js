import {getPosts} from '../service/httpService';

export const doSomethingWithRemoteData = () => {
    const postData  = getPosts();
    console.log('Data', postData);
    return postData.posts.map(it =>it.toUpperCase());
}
import {getPosts} from '../service/httpService';

export let doSomethingWithRemoteData = () => {
    const postData  = getPosts();
    return postData.posts.map(it =>it.toUpperCase());
};
import axios from "axios";
const URL = "https://jsonplaceholder.typicode.com";

class PostService{
  getPostList(){
    return axios.get(`${URL}/posts`)
      .then(res => res.data);
  }
  getMultiPost(...ids){
    const promises = ids.map(id => axios.get(`${URL}/posts/${id}`));

    //return Promise.all(promises); //전체값
    return Promise.all(promises)
      .then(res => res.map(item => item.data)); //data만 추출
  }
}

export default PostService;

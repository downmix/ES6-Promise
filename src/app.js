//import PostServiceXHR from "./post.service.xhr";
//import PostServicePromise from "./post.service.promise";
import PostService from "./post.service";

// callback 스타일
/*const postServiceXHR = new PostServiceXHR();
postServiceXHR.getPostList(function(err, data) {
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});
*/

//Promise 스타일
/*let postServicePromise = new PostServicePromise();
postServicePromise.getPostList()
  .then(res => console.log(res))
  .catch(err => console.log(err));
*/
  let postService = new PostService();
  postService.getMultiPost(3, 7, 9)
    .then(posts => console.log(posts));
  /*postService.getPostList()
    .then(res => console.log(res))
    .catch(err => console.log(err));
  */

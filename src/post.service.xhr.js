// callback 스타일
class PostServiceXHR{
  getPostList(cb){
    var request = new XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var resp = request.responseText;
        console.log(resp);
        cb(null, resp);
      } else {
        // We reached our target server, but it returned an error
      }
    };
    request.onerror = function() {
      //console.log("error");
      cb(err);
    };
    request.send();
  }
}

export default PostServiceXHR;

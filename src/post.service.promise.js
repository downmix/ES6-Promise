//ES6 Promise 스타일
class PostServicePromise{
  getPostList(){
    return new Promise((resolve,reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          // Success!
          var resp = request.responseText;
          //resolve(resp);
          resolve(JSON.parse(resp));
        } else {
          // We reached our target server, but it returned an error
        }
      };
      request.onerror = function() {
        //console.log("error");
        reject("error");
      };
      request.send();
    });
  }
}

export default PostServicePromise;

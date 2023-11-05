function registerBlog(e) {
  e.preventDefault();
  alert("form is submitted");

  var title = document.getElementById('title').value;
  var author = document.getElementById('author').value;
  var content = document.getElementById('content').value;
  
  var obj = {
      title, author, content
  };

  axios.post("http://localhost:4000/blog/add-blog", obj)
      .then((response) => {
          DispBlog(response.data.newBlogDetails); 
          console.log(response.data.newBlogDetails);
      })
      .catch((err) => {
          document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong... in post request <h4>"
          console.log(err)
      })
}
window.addEventListener("DOMContentLoaded", () => {
  const data = axios.get("http://localhost:4000/blog/get-blogs")
      .then((response) => {
          //console.log(response)
          for (var i = 0; i < response.data.allBlogs.length; i++) {
              DispBlog(response.data.allBlogs[i]);
              console.log(response.data.allBlogs[i]);
          }
      })
      .catch((err) => {
          console.log(err)
      })
})
function DispBlog(obj) {
  var pElement = document.getElementById('list');
  var cElement = `<div id= "blog">
                    <h4 id="t">${obj.title}</h4>
                    <h5 id="a">${obj.author}</h5>
                    <p id="c">${obj.content}</p>
                    <div id="C">
                        <h4>Comment: </h4>
                        <input type="text" name= "comment" id="comment">
                        <button id= "send">send</button>
                    </div>
                </div>`;


    // pElement.innerHTML += cElement;
//    document.createElement('li');
//   cElement.textContent = obj.title + " - " + obj.author+ " - " + obj.content;
//   cElement.style.padding = "7rem";

  var del = document.createElement('input');
  del.type = 'button';
  del.value = 'Delete';
  del.style.backgroundColor = "rgb(236, 160, 160)";
  del.style.margin = "0 0 0 1rem ";
  del.style.padding= "0.2rem 0.5rem";

  function deleteBlog(blogId) {
      axios.delete('http://localhost:4000/blog/delete-blog/'+blogId)
          .then((response) => {
              console.log(response);
          })
          .catch((err) => {
              console.log(err)
          })
  }

  var edit = document.createElement('input');
  edit.type = 'button';
  edit.value = 'Edit';
  edit.style.backgroundColor = "rgb(145, 225, 189)";
  edit.style.margin = "0 0 0 1rem ";
  edit.style.padding= "0.2rem 0.5rem";

  function editBlog(blogId) {
      // axios.put('http://localhost:3000/blog/edit-blog/'+blogId)
      //     .then((response) => {
      //         console.log(response);
      //     })
      //     .catch((err) => {
      //         console.log(err);
      //     })
      console.log()
  }
//   cElement.appendChild(edit);
//   cElement.appendChild(del);

  del.onclick = () => {
      pElement.removeChild(cElement);
      deleteBlog(obj.id);
  }
  
  edit.onclick = () => {
      pElement.removeChild(cElement);
      editBlog(obj.id);
      deleteBlog(obj.id);
      document.getElementById('title').value = obj.title;
      document.getElementById('author').value = obj.author;
      document.getElementById('content').value = obj.content;
  }
//   pElement.appendChild(cElement);
pElement.innerHTML += cElement;
}
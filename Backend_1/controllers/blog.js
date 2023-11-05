const Blog = require('../models/blog');

exports.addBlog=  async(req, res, next) =>{
  try{
      const title =  req.body.title;
      const author =  req.body.author;
      const content =  req.body.content;

      const blogData  =  await Blog.create ( {title: title, author: author, content: content });
      res.status(201).json( {newBlogDetails: blogData});
      console.log("post is successful");
  }
  catch(err){
      console.log("Post User is not working",JSON.stringify(err));
      console.log(err);
      res.status(500).json({
          error: err
      })
  }
}

exports.getBlog= async (req, res, next) =>{
  try{
      const blogs = await Blog.findAll();
      res.status(200).json({allBlogs : blogs});
      console.log("get is successful");
  }
  catch(err){
      console.log("Get User is failing ", JSON.stringify(err));
      res.status(500).json({
          error: err
      })
  }
}
  exports.deleteBlog= async(req, res, next) =>{
    try{
        if(req.params.id === 'undefined'){
            console.log("id is missing");
            return res.status(400).json({err :'Id is missing'});
        }
        const blogId = req.params.id;
        console.log(blogId);
        await Blog.destroy({where: {id: blogId}});
        console.log("successfully deleted");
        return res.sendStatus(200);
       
    }
    catch(err){
        console.log("Delete User is failing ", JSON.stringify(err));
        console.log(err + "helo");
        res.sendStatus(500).json({
            error: err
        })
    }
  }
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import BlogList from './BlogList';
import AddBlog from './AddBlog';
import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import BlogSingle from './BlogSingle';


function App() {
  const [blog, setBlog] = useState([]);

    useEffect(() => {
           fetch("http://localhost:5600/",
           {  
              method: "get",
              headers: new Headers({'content-type': 'application/json'}),
              async: true
           })
           .then(function(response) {
              return response.text()
           }).then(function(text) {
            setBlog(JSON.parse(text));
           });
      }, []);
   
   console.log("DDDDDDDDDDDDDDDDD", blog)

  function onAddBlog(event) {
        event.preventDefault();
        let blogTitle = document.getElementById('title').value;
        let blogDescription = document.getElementById('description').value;
        let blogImageUrl = document.getElementById('imageUrl').value;
        let blogAuthorName = document.getElementById('authorName').value;
        if(blogTitle === "") {
            document.getElementById('title').classList.add("error")
            return;
        }
        const blogData = {
            "id": Math.random(),
            "imgurl": blogImageUrl,
            "title": blogTitle,
            "description": blogDescription,
            "author": {
                "authorid": 2,
                "imgUrl": "",
                "name": blogAuthorName,
                "date": '2022/12/12'
            }
        }
        console.log(blogData)
        try {
          console.log("dhjgjhdsgjhgsafjhc")
          fetch("http://localhost:5600/save",
          {  
             method: "POST",
             headers: new Headers({'content-type': 'application/json'}),
             body: JSON.stringify(blogData),
          })
          .then(function(response) {
             return response.text()
          }).then(function(text) {
             console.log(text)
          });
         
       } catch (err) {
          alert(err);
       }

        setBlog((previousBlog) => {
            // let b = previousBlog.filter(e => e.id === blogData.id);
            // b.forEach(f => previousBlog.splice(previousBlog.findIndex(e => e.id === f.id),1));
            return [...previousBlog, blogData]
        });
        
    }
  
  return (
    <div className="App">
      <Header></Header>
      <Route path="/home">
        <Home ></Home>
    </Route> 
    <Route path="/about">
        <About></About>
    </Route> 
      <Route path="/addBlog">
        <AddBlog onFormSubmitHandler={onAddBlog}></AddBlog>
      </Route>
      <Route path="/blogList">
        <BlogList  blogData={blog}></BlogList>
      </Route> 

      <Route path="/singleBlog/:blogId">
        <BlogSingle  blogData={blog}></BlogSingle>
      </Route>  
    </div>
  );
}

export default App;

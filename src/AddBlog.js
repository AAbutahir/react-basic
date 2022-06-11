import { useState } from 'react';
import './AddBlog.css';

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [author, setAuthor] = useState('');

    function titleChangeEvent(event) {
        setTitle(event.target.value);
        //console.log(title)
    }

    function descriptionChangeEvent(event) {
        setDescription(event.target.value);
        //console.log(description)
    }

    function imgUrlChangeEvent(event) {
        setImgUrl(event.target.value);
        //console.log(imgUrl)
    }

    function authorChangeEvent(event) {
        setAuthor(event.target.value);
        //console.log(author)
    }

    const [blog, setBlog] = useState([]);

    function onFormSubmitHandler(event) {
        event.preventDefault();
        let blogTitle = document.getElementById('title').value;
        let blogDescription = document.getElementById('description').value;
        let blogImageUrl = document.getElementById('imageUrl').value;
        let blogAuthorName = document.getElementById('authorName').value;
        if(blogTitle === "") {
            document.getElementById('title').classList.add("error");
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
                "date": new Date()
            }
        }

        console.log(blogData)
        setBlog(blogData)
    }
    return(
        <div className="add-conatiner">
            <h3>Add Blog Form</h3>
            <form onSubmit={onFormSubmitHandler}>
                <label>Title</label>
                <input type="text" id="title" className="form-control" onChange={titleChangeEvent} />
                
                <label>Description</label>
                <input type="text" id="description" className="form-control" onChange={descriptionChangeEvent} />

                <label>Image URL</label>
                <input type="text" id="imageUrl" className="form-control" onChange={imgUrlChangeEvent} />

                <label>Author Name</label>
                <input type="text" id="authorName" className="form-control" onChange={authorChangeEvent} />

                <button type='submit'>Save Blog</button>
            </form>
        </div>
    )
}

export default AddBlog;

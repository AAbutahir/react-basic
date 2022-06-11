import { useState } from 'react';
import './AddBlog.css';

const AddBlog = (props) => {
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
    
    return(
        <div className="add-conatiner">
            <h3>Add Blog Form</h3>
            <form onSubmit={props.onFormSubmitHandler}>
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

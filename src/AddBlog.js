import { useState } from 'react';
import './AddBlog.css';

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [author, setAuthor] = useState('');

    function titleChangeEvent(event) {
        setTitle(event.target.value);
        console.log(title)
    }

    function descriptionChangeEvent(event) {
        setDescription(event.target.value);
        console.log(description)
    }

    function imgUrlChangeEvent(event) {
        setImgUrl(event.target.value);
        console.log(imgUrl)
    }

    function authorChangeEvent(event) {
        setAuthor(event.target.value);
        console.log(author)
    }

    function onFormSubmitHandler(event) {
        event.preventDefault();
        console.log(event)
    }
    return(
        <div className="add-conatiner">
            <h3>Add Blog Form</h3>
            <form onSubmit={onFormSubmitHandler}>
                <label>Title</label>
                <input type="text" className="form-control" onChange={titleChangeEvent} />

                <label>Description</label>
                <input type="text" className="form-control" onChange={descriptionChangeEvent} />

                <label>Image URL</label>
                <input type="text" className="form-control" onChange={imgUrlChangeEvent} />

                <label>Author Name</label>
                <input type="text" className="form-control" onChange={authorChangeEvent} />

                <button type='submit'>Save Blog</button>
            </form>
        </div>
    )
}

export default AddBlog;

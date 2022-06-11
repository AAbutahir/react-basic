import { Link } from 'react-router-dom';
import './BlogList.css'


const BlogList = (props) => {
    console.log("DATA: ", props)
    
    return(
        <div>
            <Link to='/addBlog' >
                <button type='button' className='button'>+ Add New Blog</button>
            </Link>
            <div className="blog-container">
                {props.blogData.map(list => (
                    <Link to={`/singleBlog/${list.id}`} >
                        <div className="blog-thumbnail col-4" key={list.id} >
                            <div className="img-wrapper">
                                <img src={list.imgurl} />
                            </div>
                            <div className='blog-content'>
                                <div className='blog-content-header'>
                                    {list.title}
                                </div>
                                <div className='blog-content-description'>
                                    {list.description}
                                </div>
                                <div className='blog-content-author'>
                                    <div className='author-name'>
                                        {list.author.name}
                                    </div>
                                    <div className='blog-date'>
                                        {list.date}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
                
                
            </div>
        </div>
    )
}

export default BlogList;

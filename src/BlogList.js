import './BlogList.css'


const BlogList = (props) => {
    console.log("DATA: ", props)
    
    return(
        <div className="blog-container">
            {props.blogData.map(list => (
                <div className="blog-thumbnail col-4" key={list.id}>
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
                                {list.author.date}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            
            
        </div>
    )
}

export default BlogList;

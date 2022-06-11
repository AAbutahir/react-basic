import { useParams } from "react-router-dom"

function BlogSingle(props) {
    const params = useParams();
    console.log("params", params);

    const blogDetail = props.blogData.filter(id => id.id == params.blogId);
    console.log("blogDetail", blogDetail)

    return (<h1>{blogDetail[0].title}</h1>)
}

export default BlogSingle

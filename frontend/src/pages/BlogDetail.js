import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import "./BlogDetail.css";

function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    API.get(`/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!post) return <p>در حال بارگذاری مقاله...</p>;

  return (
    <div className="blog-detail">
      <h2>{post.title}</h2>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
    </div>
  );
}

export default BlogDetail;

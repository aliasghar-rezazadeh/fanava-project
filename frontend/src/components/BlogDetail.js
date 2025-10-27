import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./BlogDetail.css";

function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("خطا در دریافت پست:", err));
  }, [id]);

  if (!post) return <p>در حال بارگذاری...</p>;

  return (
    <section id="blog-detail">
      <div className="detail-container">
        <img src={post.image} alt={post.title} />
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <Link to="/">← بازگشت به صفحه اصلی</Link>
      </div>
    </section>
  );
}

export default BlogDetail;

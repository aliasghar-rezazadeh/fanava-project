import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("خطا در دریافت پست‌ها:", err));
  }, []);

  return (
    <section id="blog">
      <h2>آخرین مقالات</h2>
      <div className="blog-container">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="blog-card">
              <img src={post.image} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <Link to={`/blog/${post.id}`}>ادامه مطلب</Link>
            </div>
          ))
        ) : (
          <p>در حال بارگذاری مقالات...</p>
        )}
      </div>
    </section>
  );
}

export default Blog;

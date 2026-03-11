import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import './../css/BlogPost.css';

import { blogPosts } from './../data/blogPosts';

function BlogPost() {
    const { slug } = useParams();
    const currentIndex = blogPosts.findIndex((post) => post.slug === slug);

    if (currentIndex === -1) {
        return <Navigate to="/blog" replace />;
    }

    const post = blogPosts[currentIndex];
    const prevPost = blogPosts[(currentIndex - 1 + blogPosts.length) % blogPosts.length];
    const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length];

    return (
        <section className="blog-post section">
            <div className="blog-post-container">
                <Link className="back-link" to="/blog">
                    Terug naar blogoverzicht
                </Link>

                <div className="post-meta">{post.date} • {post.readTime}</div>
                <h1>{post.title}</h1>

                <div className="post-image">
                    <img src={post.image} alt={post.title} loading="eager" />
                </div>

                <div className="post-content">
                    {post.content.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>

                <div className="post-nav">
                    <Link className="post-nav-btn" to={`/blog/${prevPost.slug}`}>
                        Vorige: {prevPost.title}
                    </Link>
                    <Link className="post-nav-btn" to={`/blog/${nextPost.slug}`}>
                        Volgende: {nextPost.title}
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default BlogPost;

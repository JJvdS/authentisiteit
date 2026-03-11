import React from 'react';
import { Link } from 'react-router-dom';
import './../css/Blog.css';

import { blogPosts } from './../data/blogPosts';

function Blog() {
    const featuredPost = blogPosts[0];

    return (
        <section className="blog section">
            <div className="blog-container">
                <div className="blog-intro">
                    <div className="blog-intro-copy">
                        <div className="blog-eyebrow">Blog</div>
                        <div className="section-title">
                            Uitleg en houvast rond autisme en prikkelverwerking
                        </div>
                        <div className="section-bio">
                            In deze blog deel ik heldere uitleg, praktijkvoorbeelden en korte inzichten over autisme,
                            prikkelverwerking en passende ondersteuning. De artikelen zijn geschreven voor ouders,
                            professionals en iedereen die meer rust en richting zoeken in de dagelijkse praktijk.
                        </div>
                        <div className="blog-intro-actions">
                            <Link className="blog-intro-link clickable" to={`/blog/${featuredPost.slug}`}>
                                Lees nieuwste artikel
                            </Link>
                        </div>
                    </div>

                    <Link className="blog-intro-featured" to={`/blog/${featuredPost.slug}`}>
                        <div className="blog-intro-image">
                            <img src={featuredPost.image} alt={featuredPost.title} loading="eager" />
                        </div>
                        <div className="blog-intro-featured-content">
                            <div className="blog-intro-meta">{featuredPost.date} • {featuredPost.readTime}</div>
                            <h2>{featuredPost.title}</h2>
                            <p>{featuredPost.excerpt}</p>
                        </div>
                    </Link>
                </div>

                <div className="blog-header">
                    <div className="section-title">Alle artikelen</div>
                    <div className="section-bio">
                        Kies een onderwerp dat aansluit bij je vraag of situatie. Elk artikel is gericht op
                        concrete vertaalslagen naar thuis, school of begeleiding.
                    </div>
                </div>

                <div className="blog-grid">
                    {blogPosts.map((post) => (
                        <Link className="blog-card" key={post.title} to={`/blog/${post.slug}`}>
                            <div className="card-image">
                                <img src={post.image} alt={post.title} loading="lazy" />
                            </div>
                            <div className="card-content">
                                <div className="card-meta">
                                    <span>{post.date} • {post.readTime}</span>
                                </div>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blog;

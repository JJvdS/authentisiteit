import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../css/BlogCarousel.css';

import { blogPosts } from './../data/blogPosts';

function BlogCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activePost = blogPosts[activeIndex];

    const goToPrevious = () => {
        setActiveIndex((currentIndex) => (
            currentIndex === 0 ? blogPosts.length - 1 : currentIndex - 1
        ));
    };

    const goToNext = () => {
        setActiveIndex((currentIndex) => (
            currentIndex === blogPosts.length - 1 ? 0 : currentIndex + 1
        ));
    };

    return (
        <section className="blog-carousel section">
            <div className="blog-carousel-container">
                <div className="blog-carousel-copy">
                    <div className="blog-carousel-eyebrow">Uit de blog</div>
                    <div className="section-title">Praktische inzichten voor thuis, school en begeleiding</div>
                    <div className="section-bio">
                        Korte artikelen met heldere uitleg over autisme, prikkelverwerking en ondersteuning
                        die in de praktijk werkt.
                    </div>
                    <div className="blog-carousel-actions">
                        <Link className="blog-carousel-link clickable" to={`/blog/${activePost.slug}`}>
                            Lees dit artikel
                        </Link>
                    </div>
                </div>

                <div className="blog-carousel-panel">
                    <Link className="blog-carousel-card" to={`/blog/${activePost.slug}`}>
                        <div className="blog-carousel-image">
                            <img src={activePost.image} alt={activePost.title} loading="lazy" />
                        </div>
                        <div className="blog-carousel-card-content">
                            <div className="blog-carousel-meta">{activePost.date} • {activePost.readTime}</div>
                            <h3>{activePost.title}</h3>
                            <p>{activePost.excerpt}</p>
                        </div>
                    </Link>

                    <div className="blog-carousel-controls">
                        <button className="blog-carousel-nav clickable" type="button" onClick={goToPrevious}>
                            Vorige
                        </button>
                        <div className="blog-carousel-dots">
                            {blogPosts.map((post, index) => (
                                <button
                                    key={post.slug}
                                    className={`blog-carousel-dot clickable${index === activeIndex ? ' is-active' : ''}`}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    aria-label={`Ga naar artikel ${index + 1}: ${post.title}`}
                                />
                            ))}
                        </div>
                        <button className="blog-carousel-nav clickable" type="button" onClick={goToNext}>
                            Volgende
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogCarousel;

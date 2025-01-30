import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentSection from '../CommentSection/CommentSection';

const BlogPost = ({ match }) => {
    const [blogPost, setBlogPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const blogId = match.params.id;

    useEffect(() => {
        const fetchBlogPost = async () => {
            try {
                const response = await axios.get(`/api/blog/${blogId}`);
                setBlogPost(response.data);
            } catch (error) {
                console.error('Error fetching blog post:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogPost();
    }, [blogId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!blogPost) {
        return <div>Blog post not found.</div>;
    }

    return (
        <div>
            <h1>{blogPost.title}</h1>
            <p>{blogPost.content}</p>
            <h3>Comments</h3>
            <CommentSection blogId={blogId} />
        </div>
    );
};

export default BlogPost;
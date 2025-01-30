import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('/api/blogs');
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {blogs.map(blog => (
                    <li key={blog._id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.content.substring(0, 100)}...</p>
                        <a href={`/blog/${blog._id}`}>Read more</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
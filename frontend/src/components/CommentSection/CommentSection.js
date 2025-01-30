import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentSection = ({ blogId }) => {
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');

    useEffect(() => {
        const fetchComments = async () => {
            const response = await axios.get(`/api/blogs/${blogId}/comments`);
            setComments(response.data);
        };
        fetchComments();
    }, [blogId]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (commentText.trim()) {
            const response = await axios.post(`/api/blogs/${blogId}/comments`, { text: commentText });
            setComments([...comments, response.data]);
            setCommentText('');
        }
    };

    return (
        <div>
            <h3>Comments</h3>
            <form onSubmit={handleCommentSubmit}>
                <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Add a comment..."
                />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {comments.map((comment) => (
                    <li key={comment._id}>{comment.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default CommentSection;
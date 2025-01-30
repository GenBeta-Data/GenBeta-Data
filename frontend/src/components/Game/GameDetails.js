import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GameDetails = ({ match }) => {
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchGameDetails = async () => {
            try {
                const response = await axios.get(`/api/games/${match.params.id}`);
                setGame(response.data);
            } catch (err) {
                setError('Error fetching game details');
            } finally {
                setLoading(false);
            }
        };

        fetchGameDetails();
    }, [match.params.id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>{game.title}</h1>
            <iframe
                width="560"
                height="315"
                src={game.videoLink}
                title={game.title}
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <p>{game.question}</p>
            <p>{game.logic}</p>
        </div>
    );
};

export default GameDetails;
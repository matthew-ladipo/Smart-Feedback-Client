import { useState, useEffect } from 'react';
import api from '../api/axios';

export const useFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchFeedback = async () => {
        try {
            const res = await api.get('/feedback');
            setFeedbacks(res.data);
        } catch (err) {
            console.error("Error fetching", err);
        } finally {
            setLoading(false);
        }
    };

    const addFeedback = async (content) => {
        const res = await api.post('/feedback', { content });
        setFeedbacks([res.data, ...feedbacks]); // Add new one to top
    };

    useEffect(() => { fetchFeedback(); }, []);

    return { feedbacks, addFeedback, loading };
};
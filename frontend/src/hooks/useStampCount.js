// useStampCount.js
import { useState, useEffect } from 'react';
import stampsApi from '../services/stampsApi';


const useStampCount = (isOpen) => {
    const [stampCount, setStampCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStampCount = async () => {
            if (!isOpen) return; // Only fetch if the sidebar is open
            try {
                setLoading(true);
                const response = await stampsApi.getAllStamps();
                setStampCount(response.data.length);
                setError(null);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchStampCount();
    }, [isOpen]); // Re-run effect when isOpen changes

    return { stampCount, loading, error };
};

export default useStampCount;

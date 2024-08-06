// hooks/useSetHierarchyWithCounts.js
import { useState, useEffect } from 'react';
import setApi from '../services/setApi';

const useSetHierarchyWithCounts = () => {
    const [setHierarchy, setSetHierarchy] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await setApi.getSetHierarchyWithCounts();
                setSetHierarchy(response.data);
                setError(null);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { setHierarchy, loading, error };
};

export default useSetHierarchyWithCounts;
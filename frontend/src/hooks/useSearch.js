// src/hooks/useSearch.js
import { useState, useEffect, useCallback } from 'react';

const useSearch = (initialItems = []) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState(initialItems);

    const search = useCallback((searchQuery) => {
        if (!searchQuery) {
            return initialItems;
        }
        return initialItems.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [initialItems]);

    useEffect(() => {
        const searchResults = search(query);
        setResults(searchResults);
    }, [query, search]);

    return { query, setQuery, results };
};

export default useSearch;

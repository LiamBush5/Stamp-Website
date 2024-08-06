// src/hooks/useSidebar.js
import { useState, useCallback } from 'react';

const useSidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = useCallback(() => {
        setIsSidebarOpen(prevState => !prevState);
    }, []);

    const closeSidebar = useCallback(() => {
        setIsSidebarOpen(false);
    }, []);

    return { isSidebarOpen, toggleSidebar, closeSidebar };
};

export default useSidebar;
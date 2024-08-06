// import React, { useState, useEffect, useMemo } from 'react';
// import { stampsApi, setApi } from '../services/index';
// import Header from '../components/header/Header';
// import Footer from '../components/Footer';
// import Sidebar from '../components/sidebar/Sidebar';
// import CreateStampForm from '../components/forms/CreateStampForm';
// import StampCard from '../components/StampCard';
// import useSidebar from '../hooks/useSidebar';
// import { sortStamps, SORT_OPTIONS } from '../utils/filterUtils';
// import {
//     getGridStyle,
//     createViewChangeHandler,
//     getMainContentStyle,
//     DEFAULT_VIEW,
//     VIEW_OPTIONS
// } from '../utils/layoutUtils';
// import useSetHierarchyWithCounts from '../hooks/useSetHierarchyWithCounts';

// const Homepage = () => {
//     const [stamps, setStamps] = useState([]);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [isFormOpen, setIsFormOpen] = useState(false);
//     const [currentView, setCurrentView] = useState(DEFAULT_VIEW);
//     const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebar();
//     const [searchQuery, setSearchQuery] = useState('');
//     const [selectedSet, setSelectedSet] = useState('');
//     const [sortOption, setSortOption] = useState('');
//     const { setHierarchy, loading: setsLoading, error: setsError } = useSetHierarchyWithCounts();

//     const handleViewChange = createViewChangeHandler(setCurrentView);

//     useEffect(() => {
//         fetchStamps();
//     }, []);

//     const fetchStamps = async () => {
//         setLoading(true);
//         try {
//             const response = await stampsApi.getAllStamps();
//             setStamps(response.data);
//         } catch (error) {
//             console.error('Error fetching stamps:', error);
//             setError('Failed to fetch stamps. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleDelete = async (id) => {
//         if (window.confirm('Are you sure you want to delete this stamp?')) {
//             setLoading(true);
//             try {
//                 await stampsApi.deleteStamp(id);
//                 fetchStamps();
//             } catch (error) {
//                 console.error('Error deleting stamp:', error);
//                 setError('Failed to delete stamp. Please try again.');
//             } finally {
//                 setLoading(false);
//             }
//         }
//     };

//     const handleCreateSuccess = () => {
//         fetchStamps();
//         setIsFormOpen(false);
//     };

//     const handleSetChange = (setId) => {
//         setSelectedSet(setId);
//     };

//     const handleSortChange = (option) => {
//         setSortOption(option);
//     };

//     const getChildSetIds = (setId, hierarchy) => {
//         const childIds = [];
//         const findChildIds = (currentSet) => {
//             if (currentSet.id.toString() === setId) {
//                 childIds.push(currentSet.id);
//                 currentSet.childSets.forEach(child => findChildIds(child));
//                 return true;
//             }
//             for (let child of currentSet.childSets) {
//                 if (findChildIds(child)) {
//                     return true;
//                 }
//             }
//             return false;
//         };
//         hierarchy.forEach(set => findChildIds(set));
//         return childIds;
//     };

//     const filteredStamps = useMemo(() => {
//         let result = stamps.filter(stamp =>
//             stamp.title.toLowerCase().includes(searchQuery.toLowerCase())
//         );

//         if (selectedSet) {
//             const relevantSetIds = getChildSetIds(selectedSet, setHierarchy);
//             result = result.filter(stamp => relevantSetIds.includes(stamp.setId));
//         }

//         return sortStamps(result, sortOption);
//     }, [stamps, searchQuery, selectedSet, sortOption, setHierarchy]);

//     if (setsLoading) {
//         return <div>Loading sets...</div>;
//     }

//     if (setsError) {
//         return <div>Error loading sets: {setsError}</div>;
//     }

//     return (
//         <div className="flex flex-col min-h-screen bg-[#FDF8F3]">
//             <Header
//                 toggleSidebar={toggleSidebar}
//                 onCreateStamp={() => setIsFormOpen(true)}
//                 onViewChange={handleViewChange}
//                 currentView={currentView}
//                 isSidebarOpen={isSidebarOpen}
//                 query={searchQuery}
//                 setQuery={setSearchQuery}
//                 onSortChange={handleSortChange}
//                 sortOptions={SORT_OPTIONS}
//                 viewOptions={VIEW_OPTIONS}
//                 setHierarchy={setHierarchy}
//                 selectedSet={selectedSet}
//                 onSetChange={handleSetChange}
//             />
//             <div className="flex flex-grow">
//                 <Sidebar
//                     isOpen={isSidebarOpen}
//                     onClose={closeSidebar}
//                     setHierarchy={setHierarchy}
//                     onSetSelect={handleSetChange}
//                 />
//                 <main className={getMainContentStyle(isSidebarOpen)}>
//                     <div className="max-w-7xl mx-auto">
//                         {error && (
//                             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mb-6" role="alert">
//                                 {error}
//                             </div>
//                         )}

//                         {isFormOpen && (
//                             <CreateStampForm
//                                 onSuccess={handleCreateSuccess}
//                                 onCancel={() => setIsFormOpen(false)}
//                             />
//                         )}

//                         {loading && <p className="text-center text-[#4A4A4A]">Loading...</p>}

//                         <div style={getGridStyle(currentView)}>
//                             {filteredStamps.map((stamp) => (
//                                 <StampCard key={stamp.id} stamp={stamp} onDelete={handleDelete} />
//                             ))}
//                         </div>
//                     </div>
//                 </main>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default Homepage;

import React, { useState, useEffect, useMemo } from 'react';
import { stampsApi, setApi } from '../services/index';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar/Sidebar';
import CreateStampForm from '../components/forms/CreateStampForm';
import StampCard from '../components/StampCard';
import useSidebar from '../hooks/useSidebar';
import { sortStamps, SORT_OPTIONS } from '../utils/filterUtils';
import {
    getGridStyle,
    createViewChangeHandler,
    getMainContentStyle,
    DEFAULT_VIEW,
    VIEW_OPTIONS
} from '../utils/layoutUtils';
import useSetHierarchyWithCounts from '../hooks/useSetHierarchyWithCounts';
import { findSetById } from '../utils/setUtils';

const Homepage = () => {
    const [stamps, setStamps] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [currentView, setCurrentView] = useState(DEFAULT_VIEW);
    const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebar();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSet, setSelectedSet] = useState('');
    const [sortOption, setSortOption] = useState('');
    const { setHierarchy, loading: setsLoading, error: setsError } = useSetHierarchyWithCounts();

    const handleViewChange = createViewChangeHandler(setCurrentView);

    useEffect(() => {
        fetchStamps();
    }, []);

    const fetchStamps = async () => {
        setLoading(true);
        try {
            const response = await stampsApi.getAllStamps();
            setStamps(response.data);
        } catch (error) {
            console.error('Error fetching stamps:', error);
            setError('Failed to fetch stamps. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this stamp?')) {
            setLoading(true);
            try {
                await stampsApi.deleteStamp(id);
                fetchStamps();
            } catch (error) {
                console.error('Error deleting stamp:', error);
                setError('Failed to delete stamp. Please try again.');
            } finally {
                setLoading(false);
            }
        }
    };

    const handleCreateSuccess = () => {
        fetchStamps();
        setIsFormOpen(false);
    };

    const handleSetChange = (setId) => {
        setSelectedSet(setId);
    };

    const handleSortChange = (option) => {
        setSortOption(option);
    };

    const getChildSetIds = (setId, hierarchy) => {
        const set = findSetById(hierarchy, setId);
        if (!set) return [];

        const collectIds = (currentSet) => {
            let ids = [currentSet.id];
            if (currentSet.childSets) {
                currentSet.childSets.forEach(childSet => {
                    ids = [...ids, ...collectIds(childSet)];
                });
            }
            return ids;
        };

        return collectIds(set);
    };

    const filteredStamps = useMemo(() => {
        let result = stamps.filter(stamp =>
            stamp.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (selectedSet) {
            const relevantSetIds = getChildSetIds(selectedSet, setHierarchy);
            result = result.filter(stamp => relevantSetIds.includes(stamp.setId));
        }

        return sortStamps(result, sortOption);
    }, [stamps, searchQuery, selectedSet, sortOption, setHierarchy]);


    if (setsLoading) {
        return <div>Loading sets...</div>;
    }

    if (setsError) {
        return <div>Error loading sets: {setsError}</div>;
    }

    return (
        <div className="flex flex-col min-h-screen bg-[#FDF8F3]">
            <Header
                toggleSidebar={toggleSidebar}
                onCreateStamp={() => setIsFormOpen(true)}
                onViewChange={handleViewChange}
                currentView={currentView}
                isSidebarOpen={isSidebarOpen}
                query={searchQuery}
                setQuery={setSearchQuery}
                onSortChange={handleSortChange}
                sortOptions={SORT_OPTIONS}
                viewOptions={VIEW_OPTIONS}
                setHierarchy={setHierarchy}
                selectedSet={selectedSet}
                onSetChange={handleSetChange}
            />
            <div className="flex flex-grow">
                <Sidebar
                    isOpen={isSidebarOpen}
                    onClose={closeSidebar}
                    setHierarchy={setHierarchy}
                    onSetSelect={handleSetChange}
                />
                <main className={getMainContentStyle(isSidebarOpen)}>
                    <div className="max-w-7xl mx-auto">
                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mb-6" role="alert">
                                {error}
                            </div>
                        )}

                        {isFormOpen && (
                            <CreateStampForm
                                onSuccess={handleCreateSuccess}
                                onCancel={() => setIsFormOpen(false)}
                            />
                        )}

                        {loading && <p className="text-center text-[#4A4A4A]">Loading...</p>}

                        <div style={getGridStyle(currentView)}>
                            {filteredStamps.map((stamp) => (
                                <StampCard key={stamp.id} stamp={stamp} onDelete={handleDelete} />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Homepage;
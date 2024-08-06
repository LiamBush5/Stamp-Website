import React from 'react';
import FilterDropdown from './FilterDropdown';
import SetDropdown from './SetDropdown';
import SearchInput from './SearchInput';
import { getSetNameById } from '../../utils/setUtils';

const Header = ({
    toggleSidebar,
    onCreateStamp,
    isSidebarOpen,
    query,
    setQuery,
    onSortChange,
    sortOptions,
    setHierarchy,
    selectedSet,
    onSetChange,
}) => {
    const selectedSetName = getSetNameById(setHierarchy, selectedSet) || 'All Stamps';

    console.log('Selected Set Name:', selectedSetName);

    return (
        <header className={`bg-[#FDF8F3] text-[#4A4A4A] p-6 flex items-center justify-between shadow-md transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-72' : ''}`}>
            <div className="flex items-center space-x-6 ${isSidebarOpen ? 'pl-8' : ''}">
                <button
                    onClick={toggleSidebar}
                    className="text-[#4A4A4A] focus:outline-none hover:text-[#2A2A2A] transition-colors duration-200"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <h1 className="text-3xl font-serif font-bold">{selectedSetName}</h1>
            </div>
            <div className="flex items-center space-x-4">
                <SearchInput query={query} setQuery={setQuery} />
                <FilterDropdown onSortChange={onSortChange} sortOptions={sortOptions} />
                <SetDropdown
                    onSetChange={onSetChange}
                    setHierarchy={setHierarchy}
                    selectedSet={selectedSet}
                />
                <button
                    onClick={onCreateStamp}
                    className="bg-[#8B4513] hover:bg-[#6B3000] text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D1C4B5] focus:ring-opacity-50 transition-colors duration-200"
                >
                    Add New Stamp
                </button>
            </div>
        </header>
    );
};

export default Header;

// src/components/SearchInput.js

import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchInput = ({ query, setQuery }) => {
    return (
        <div className="relative">
            <input
                type="text"
                id="search"
                name="search"
                placeholder="Search stamps..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-[#FDF8F3] border border-[#D1C4B5] text-[#4A4A4A] rounded-md pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-[#D1C4B5] focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#4A4A4A]">
                <FaSearch />
            </div>
        </div>
    );
};

export default SearchInput;
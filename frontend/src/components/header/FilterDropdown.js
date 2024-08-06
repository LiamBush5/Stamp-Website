// // // // src/components/FilterDropdown.js

// // // import React from 'react';
// // // import { FaSort } from 'react-icons/fa';

// // // const FilterDropdown = ({ onSortChange, sortOptions }) => {
// // //     return (
// // //         <div className="relative group">
// // //             <button className="flex items-center space-x-2 bg-[#FDF8F3] border border-[#D1C4B5] text-[#4A4A4A] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D1C4B5] transition-colors duration-200 hover:bg-[#F5E6D3]">
// // //                 <FaSort />
// // //                 <span>Sort</span>
// // //             </button>
// // //             <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 hidden group-hover:block">
// // //                 {Object.entries(sortOptions).map(([key, value]) => (
// // //                     <button
// // //                         key={key}
// // //                         onClick={() => onSortChange(value)}
// // //                         className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#F5E6D3] transition-colors duration-200"
// // //                     >
// // //                         {key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')}
// // //                     </button>
// // //                 ))}
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default FilterDropdown;

// // // src/components/FilterDropdown.js

// // import React, { useState, useRef, useEffect } from 'react';
// // import { FaChevronDown } from 'react-icons/fa';

// // const FilterDropdown = ({ onSortChange, sortOptions }) => {
// //     const [isOpen, setIsOpen] = useState(false);
// //     const [selectedOption, setSelectedOption] = useState('Sort');
// //     const dropdownRef = useRef(null);

// //     useEffect(() => {
// //         const handleClickOutside = (event) => {
// //             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //                 setIsOpen(false);
// //             }
// //         };

// //         document.addEventListener('mousedown', handleClickOutside);
// //         return () => {
// //             document.removeEventListener('mousedown', handleClickOutside);
// //         };
// //     }, []);

// //     const handleOptionClick = (key, value) => {
// //         setSelectedOption(key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));
// //         onSortChange(value);
// //         setIsOpen(false);
// //     };

// //     return (
// //         <div className="relative inline-block text-left" ref={dropdownRef}>
// //             <button
// //                 onClick={() => setIsOpen(!isOpen)}
// //                 className="inline-flex justify-between items-center w-40 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
// //             >
// //                 <span>{selectedOption}</span>
// //                 <FaChevronDown className={`ml-2 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
// //             </button>

// //             {isOpen && (
// //                 <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden z-20">
// //                     <div className="py-1">
// //                         {Object.entries(sortOptions).map(([key, value]) => (
// //                             <button
// //                                 key={key}
// //                                 onClick={() => handleOptionClick(key, value)}
// //                                 className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
// //                             >
// //                                 {key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')}
// //                             </button>
// //                         ))}
// //                     </div>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default FilterDropdown;

// // src/components/FilterDropdown.js

// import React, { useState, useRef, useEffect } from 'react';
// import { FaChevronDown } from 'react-icons/fa';

// const FilterDropdown = ({ onSortChange, sortOptions }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedOption, setSelectedOption] = useState('');
//     const dropdownRef = useRef(null);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsOpen(false);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const handleOptionClick = (key, value) => {
//         setSelectedOption(key);
//         onSortChange(value);
//         setIsOpen(false);
//     };

//     return (
//         <div className="relative inline-block text-left" ref={dropdownRef}>
//             <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="inline-flex justify-between items-center w-40 px-4 py-2 text-sm font-medium text-[#4A4A4A] bg-[#FDF8F3] border border-[#D1C4B5] rounded-md shadow-sm hover:bg-[#F5E6D3] focus:outline-none focus:ring-2 focus:ring-[#D1C4B5] focus:ring-opacity-50 transition-all duration-200"
//             >
//                 <span>{selectedOption || 'Sort by'}</span>
//                 <FaChevronDown className={`ml-2 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
//             </button>

//             {isOpen && (
//                 <div className="absolute right-0 mt-2 w-40 bg-[#FDF8F3] border border-[#D1C4B5] rounded-md shadow-lg overflow-hidden z-20">
//                     <div className="py-1">
//                         <button
//                             onClick={() => handleOptionClick('', '')}
//                             className="block w-full text-left px-4 py-2 text-sm text-[#4A4A4A] hover:bg-[#F5E6D3] transition-colors duration-150"
//                         >
//                             Sort by
//                         </button>
//                         {Object.entries(sortOptions).map(([key, value]) => (
//                             <button
//                                 key={key}
//                                 onClick={() => handleOptionClick(key, value)}
//                                 className="block w-full text-left px-4 py-2 text-sm text-[#4A4A4A] hover:bg-[#F5E6D3] transition-colors duration-150"
//                             >
//                                 {key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')}
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default FilterDropdown;

// src/components/FilterDropdown.js

import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaCheck } from 'react-icons/fa';

const FilterDropdown = ({ onSortChange, sortOptions }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const formatOptionName = (name) => {
        return name.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    };

    const handleOptionClick = (key, value) => {
        setSelectedOption(key);
        onSortChange(value);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex justify-between items-center w-40 px-4 py-2 text-sm font-medium text-[#4A4A4A] bg-[#FDF8F3] border border-[#D1C4B5] rounded-md shadow-sm hover:bg-[#F5E6D3] focus:outline-none focus:ring-2 focus:ring-[#D1C4B5] focus:ring-opacity-50 transition-all duration-200"
            >
                <span>{selectedOption ? formatOptionName(selectedOption) : 'Sort by'}</span>
                <FaChevronDown className={`ml-2 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-[#FDF8F3] border border-[#D1C4B5] rounded-md shadow-lg overflow-hidden z-20">
                    <div className="py-1">
                        <button
                            onClick={() => handleOptionClick('', '')}
                            className="flex justify-between items-center w-full px-4 py-2 text-sm text-[#4A4A4A] hover:bg-[#F5E6D3] transition-colors duration-150"
                        >
                            <span>Sort by</span>
                            {selectedOption === '' && <FaCheck className="text-[#8B4513]" />}
                        </button>
                        {Object.entries(sortOptions).map(([key, value]) => (
                            <button
                                key={key}
                                onClick={() => handleOptionClick(key, value)}
                                className="flex justify-between items-center w-full px-4 py-2 text-sm text-[#4A4A4A] hover:bg-[#F5E6D3] transition-colors duration-150"
                            >
                                <span>{formatOptionName(key)}</span>
                                {selectedOption === key && <FaCheck className="text-[#8B4513]" />}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterDropdown;
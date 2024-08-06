// // components/SetDropdown.js
// import React, { useState, useRef, useEffect } from 'react';
// import { FaChevronDown, FaCheck, FaFolder, FaFolderOpen } from 'react-icons/fa';
// import { getSetNameById } from '../../utils/setUtils';

// const EnvelopeIcon = ({ size = 14, className = "" }) => (
//     <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width={size}
//         height={size}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className={className}
//     >
//         <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//         <polyline points="22,6 12,13 2,6" />
//     </svg>
// );

// const SetOption = ({ set, level, selectedSet, onSelect }) => {
//     const hasChildren = set.childSets && set.childSets.length > 0;
//     const isSelected = selectedSet === set.id.toString();

//     return (
//         <>
//             <button
//                 onClick={() => onSelect(set.id.toString(), set.name)}
//                 className={`flex justify-between items-center w-full px-4 py-2 text-sm text-[#4A4A4A] hover:bg-[#F5E6D3] transition-colors duration-150 ${isSelected ? 'bg-[#F5E6D3]' : ''}`}
//                 style={{ paddingLeft: `${level * 16 + 16}px` }}
//             >
//                 <span className="flex items-center">
//                     {hasChildren ? (
//                         <FaFolderOpen className="mr-2 text-[#8B4513]" />
//                     ) : (
//                         <FaFolder className="mr-2 text-[#8B4513]" />
//                     )}
//                     {set.name}
//                 </span>
//                 <span className="flex items-center">
//                     <EnvelopeIcon size={14} className="mr-1 text-[#8B4513]" />
//                     {set.stampCount}
//                     {isSelected && <FaCheck className="ml-2 text-[#8B4513]" />}
//                 </span>
//             </button>
//             {hasChildren && set.childSets.map(childSet => (
//                 <SetOption
//                     key={childSet.id}
//                     set={childSet}
//                     level={level + 1}
//                     selectedSet={selectedSet}
//                     onSelect={onSelect}
//                 />
//             ))}
//         </>
//     );
// };

// const SetDropdown = ({ onSetChange, setHierarchy, selectedSet }) => {
//     const [isOpen, setIsOpen] = useState(false);
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

//     const handleOptionClick = (setId, setName) => {
//         onSetChange(setId, setName);
//         setIsOpen(false);
//     };

//     const selectedSetName = getSetNameById(setHierarchy, selectedSet);
//     const totalStampCount = setHierarchy.reduce((total, set) => total + set.stampCount, 0);

//     return (
//         <div className="relative inline-block text-left" ref={dropdownRef}>
//             <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="inline-flex justify-between items-center w-48 px-4 py-2 text-sm font-medium text-[#4A4A4A] bg-[#FDF8F3] border border-[#D1C4B5] rounded-md shadow-sm hover:bg-[#F5E6D3] focus:outline-none focus:ring-2 focus:ring-[#D1C4B5] focus:ring-opacity-50 transition-all duration-200"
//             >
//                 <span className="truncate">{selectedSetName}</span>
//                 <span className="flex items-center">
//                     <EnvelopeIcon size={14} className="mr-1 text-[#8B4513]" />
//                     {selectedSet ? (setHierarchy.find(set => set.id.toString() === selectedSet)?.stampCount || 0) : totalStampCount}
//                     <FaChevronDown className={`ml-2 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
//                 </span>
//             </button>

//             {isOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-[#FDF8F3] border border-[#D1C4B5] rounded-md shadow-lg overflow-hidden z-20 max-h-96 overflow-y-auto">
//                     <div className="py-1">
//                         <button
//                             onClick={() => handleOptionClick('', 'All Stamps')}
//                             className="flex justify-between items-center w-full px-4 py-2 text-sm text-[#4A4A4A] hover:bg-[#F5E6D3] transition-colors duration-150"
//                         >
//                             <span>All Stamps</span>
//                             <span className="flex items-center">
//                                 <EnvelopeIcon size={14} className="mr-1 text-[#8B4513]" />
//                                 {totalStampCount}
//                                 {selectedSet === '' && <FaCheck className="ml-2 text-[#8B4513]" />}
//                             </span>
//                         </button>
//                         {setHierarchy.map((set) => (
//                             <SetOption
//                                 key={set.id}
//                                 set={set}
//                                 level={0}
//                                 selectedSet={selectedSet}
//                                 onSelect={handleOptionClick}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SetDropdown;

import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaCheck, FaFolder, FaFolderOpen } from 'react-icons/fa';
import { getSetNameById, findSetById } from '../../utils/setUtils';

const EnvelopeIcon = ({ size = 14, className = "" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

// const SetOption = ({ set, level, selectedSet, onSelect }) => {
//     const hasChildren = set.childSets && set.childSets.length > 0;
//     const isSelected = selectedSet === set.id.toString();

//     return (
//         <>
//             <button
//                 onClick={() => onSelect(set.id.toString(), set.name)}
//                 className={`flex justify-between items-center w-full px-4 py-2 text-sm text-[#4A4A4A] hover:bg-[#F5E6D3] transition-colors duration-150 ${isSelected ? 'bg-[#F5E6D3]' : ''}`}
//                 style={{ paddingLeft: `${level * 16 + 16}px` }}
//             >
//                 <span className="flex items-center">
//                     {hasChildren ? (
//                         <FaFolderOpen className="mr-2 text-[#8B4513]" />
//                     ) : (
//                         <FaFolder className="mr-2 text-[#8B4513]" />
//                     )}
//                     {set.name}
//                 </span>
//                 <span className="flex items-center">
//                     <EnvelopeIcon size={14} className="mr-1 text-[#8B4513]" />
//                     {set.stampCount}
//                     {isSelected && <FaCheck className="ml-2 text-[#8B4513]" />}
//                 </span>
//             </button>
//             {hasChildren && set.childSets.map(childSet => (
//                 <SetOption
//                     key={childSet.id}
//                     set={childSet}
//                     level={level + 1}
//                     selectedSet={selectedSet}
//                     onSelect={onSelect}
//                 />
//             ))}
//         </>
//     );
// };

// const SetDropdown = ({ onSetChange, setHierarchy, selectedSet }) => {
//     const [isOpen, setIsOpen] = useState(false);
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

//     const handleOptionClick = (setId, setName) => {
//         onSetChange(setId, setName);
//         setIsOpen(false);
//     };

//     const selectedSetName = getSetNameById(setHierarchy, selectedSet);
//     const totalStampCount = setHierarchy.reduce((total, set) => total + set.stampCount, 0);

//     return (
//         <div className="relative inline-block text-left" ref={dropdownRef}>
//             <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="inline-flex justify-between items-center w-48 px-4 py-2 text-sm font-medium text-[#4A4A4A] bg-[#FDF8F3] border border-[#D1C4B5] rounded-md shadow-sm hover:bg-[#F5E6D3] focus:outline-none focus:ring-2 focus:ring-[#D1C4B5] focus:ring-opacity-50 transition-all duration-200"
//             >
//                 <span className="truncate">{selectedSetName}</span>
//                 <span className="flex items-center">
//                     <EnvelopeIcon size={14} className="mr-1 text-[#8B4513]" />
//                     {selectedSet ? (setHierarchy.find(set => set.id.toString() === selectedSet)?.stampCount || 0) : totalStampCount}
//                     <FaChevronDown className={`ml-2 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
//                 </span>
//             </button>

//             {isOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-[#FDF8F3] border border-[#D1C4B5] rounded-md shadow-lg overflow-hidden z-20 max-h-96 overflow-y-auto">
//                     <div className="py-1">
//                         <button
//                             onClick={() => handleOptionClick('', 'All Stamps')}
//                             className="flex justify-between items-center w-full px-4 py-2 text-sm text-[#4A4A4A] hover:bg-[#F5E6D3] transition-colors duration-150"
//                         >
//                             <span>All Stamps</span>
//                             <span className="flex items-center">
//                                 <EnvelopeIcon size={14} className="mr-1 text-[#8B4513]" />
//                                 {totalStampCount}
//                                 {selectedSet === '' && <FaCheck className="ml-2 text-[#8B4513]" />}
//                             </span>
//                         </button>
//                         {setHierarchy.map((set) => (
//                             <SetOption
//                                 key={set.id}
//                                 set={set}
//                                 level={0}
//                                 selectedSet={selectedSet}
//                                 onSelect={handleOptionClick}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SetDropdown;


const getSetStampCount = (set) => {
    return set.stampCount || 0;
};

const getTotalStampCount = (setHierarchy) => {
    const countLeafStamps = (sets) => {
        return sets.reduce((total, set) => {
            if (!set.childSets || set.childSets.length === 0) {
                return total + getSetStampCount(set);
            }
            return total + countLeafStamps(set.childSets);
        }, 0);
    };
    return countLeafStamps(setHierarchy);
};

const SetOption = ({ set, level, selectedSet, onSelect }) => {
    const hasChildren = set.childSets && set.childSets.length > 0;
    const isSelected = selectedSet === set.id.toString();
    const stampCount = getSetStampCount(set);

    return (
        <>
            <button
                onClick={() => onSelect(set.id.toString(), set.name)}
                className={`flex justify-between items-center w-full px-4 py-2 text-sm text-[#4A4A4A] hover:bg-[#F5E6D3] transition-colors duration-150 ${isSelected ? 'bg-[#F5E6D3]' : ''}`}
                style={{ paddingLeft: `${level * 16 + 16}px` }}
            >
                <span className="flex items-center">
                    {hasChildren ? (
                        <FaFolderOpen className="mr-2 text-[#8B4513]" />
                    ) : (
                        <FaFolder className="mr-2 text-[#8B4513]" />
                    )}
                    {set.name}
                </span>
                <span className="flex items-center">
                    <EnvelopeIcon size={14} className="mr-1 text-[#8B4513]" />
                    {stampCount}
                    {isSelected && <FaCheck className="ml-2 text-[#8B4513]" />}
                </span>
            </button>
            {hasChildren && set.childSets.map(childSet => (
                <SetOption
                    key={childSet.id}
                    set={childSet}
                    level={level + 1}
                    selectedSet={selectedSet}
                    onSelect={onSelect}
                />
            ))}
        </>
    );
};

const SetDropdown = ({ onSetChange, setHierarchy, selectedSet }) => {
    const [isOpen, setIsOpen] = useState(false);
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

    const handleOptionClick = (setId, setName) => {
        onSetChange(setId, setName);
        setIsOpen(false);
    };

    const selectedSetName = getSetNameById(setHierarchy, selectedSet);
    const totalStampCount = getTotalStampCount(setHierarchy);

    const getSelectedSetCount = (setId) => {
        if (!setId) return totalStampCount;
        const set = findSetById(setHierarchy, setId);
        return set ? getSetStampCount(set) : 0;
    };

    const selectedSetCount = getSelectedSetCount(selectedSet);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex justify-between items-center w-48 px-4 py-2 text-sm font-medium text-[#4A4A4A] bg-[#FDF8F3] border border-[#D1C4B5] rounded-md shadow-sm hover:bg-[#F5E6D3] focus:outline-none focus:ring-2 focus:ring-[#D1C4B5] focus:ring-opacity-50 transition-all duration-200"
            >
                <span className="truncate">{selectedSetName}</span>
                <span className="flex items-center">
                    <EnvelopeIcon size={14} className="mr-1 text-[#8B4513]" />
                    {selectedSetCount}
                    <FaChevronDown className={`ml-2 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
                </span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#FDF8F3] border border-[#D1C4B5] rounded-md shadow-lg overflow-hidden z-20 max-h-96 overflow-y-auto">
                    <div className="py-1">
                        <button
                            onClick={() => handleOptionClick('', 'All Stamps')}
                            className="flex justify-between items-center w-full px-4 py-2 text-sm text-[#4A4A4A] hover:bg-[#F5E6D3] transition-colors duration-150"
                        >
                            <span>All Stamps</span>
                            <span className="flex items-center">
                                <EnvelopeIcon size={14} className="mr-1 text-[#8B4513]" />
                                {totalStampCount}
                                {selectedSet === '' && <FaCheck className="ml-2 text-[#8B4513]" />}
                            </span>
                        </button>
                        {setHierarchy.map((set) => (
                            <SetOption
                                key={set.id}
                                set={set}
                                level={0}
                                selectedSet={selectedSet}
                                onSelect={handleOptionClick}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SetDropdown;
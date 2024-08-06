//

import React from 'react';

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

const StampDropdown = ({ stamps, level }) => {
    if (!stamps || stamps.length === 0) return null;

    const bgColor = level === 0 ? 'bg-[#2C3E50]' : level === 1 ? 'bg-[#34495E]' : 'bg-[#3C556E]';
    const hoverColor = level === 0 ? 'hover:bg-[#34495E]' : level === 1 ? 'hover:bg-[#3C556E]' : 'hover:bg-[#446581]';

    return (
        <ul className={`mt-1 rounded-md overflow-hidden ${bgColor}`}>
            {stamps.map(stamp => (
                <li
                    key={stamp.id}
                    className={`flex items-center px-3 py-2 text-sm text-[#BDC3C7] ${hoverColor} transition-all duration-200 cursor-pointer`}
                >
                    <EnvelopeIcon size={14} className="mr-2 text-[#3498DB]" />
                    <span className="truncate">{stamp.title}</span>
                </li>
            ))}
        </ul>
    );
};

export default StampDropdown;
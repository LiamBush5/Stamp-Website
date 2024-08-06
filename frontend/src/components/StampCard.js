// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaTimes } from 'react-icons/fa';

// const StampCard = ({ stamp, onDelete }) => {
//     return (
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden w-64 relative group transition-transform duration-300 hover:scale-105">
//             <Link to={`/stamp/${stamp.id}`} className="block">
//                 <div className="h-64 w-64 overflow-hidden relative bg-gray-100">
//                     {stamp.imageUrl ? (
//                         <img
//                             src={stamp.imageUrl}
//                             alt={stamp.title}
//                             className="w-full h-full object-contain"
//                             onError={(e) => {
//                                 e.target.onerror = null;
//                                 e.target.src = 'https://via.placeholder.com/300x400?text=Image+Not+Found';
//                             }}
//                         />
//                     ) : (
//                         <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                             <span className="text-gray-500 text-lg">No Image</span>
//                         </div>
//                     )}
//                     <button
//                         onClick={(e) => {
//                             e.preventDefault();
//                             onDelete(stamp.id);
//                         }}
//                         className="absolute top-2 right-2 text-[#FDF8F3] bg-[#D4A373] rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                         title="Delete stamp"
//                     >
//                         <FaTimes />
//                     </button>
//                 </div>
//             </Link>
//             <div className="p-4">
//                 <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate">{stamp.title}</h2>
//             </div>
//         </div>
//     );
// };

// export default StampCard;


import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const StampCard = ({ stamp, onDelete }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-64 relative group transition-transform duration-300 hover:scale-105">
            <Link to={`/stamp/${stamp.id}`} className="block">
                <div className="h-64 w-64 overflow-hidden relative bg-gray-100">
                    {stamp.imageUrl ? (
                        <img
                            src={stamp.imageUrl}
                            alt={stamp.title}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://via.placeholder.com/300x400?text=Image+Not+Found';
                            }}
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500 text-lg">No Image</span>
                        </div>
                    )}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            onDelete(stamp.id);
                        }}
                        className="absolute top-2 right-2 text-[#FDF8F3] bg-[#D4A373] rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        title="Delete stamp"
                    >
                        <FaTimes />
                    </button>
                </div>
            </Link>
            <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate">{stamp.title}</h2>
            </div>
        </div>
    );
};

export default StampCard;